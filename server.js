require('dotenv').config();
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { ethers } = require('ethers');

/* ===== CONFIG (.env से) ===== */
const RPC_URL = process.env.BSC_RPC_URL || 'https://bsc-dataseed1.binance.org/';
const PRIVATE_KEY = process.env.RELAYER_PRIVATE_KEY;
const ALLOWED_ORIGIN = (process.env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
const DRIP = ethers.parseEther(process.env.GAS_DRIP_BNB || '0.001');     // एक बार में कितना BNB
const MIN_USDT = ethers.parseUnits(process.env.MIN_USDT || '5', 18);       // कम से कम इतना USDT हो
const DAILY_CAP = Number(process.env.DAILY_CAP || 50);                     // दिन में अधिकतम वॉलेट
const MAX_BNB = ethers.parseEther('0.0004');                               // इससे ज़्यादा BNB हो तो drip नहीं
const RESERVE = ethers.parseEther('0.01');                                 // relayer में हमेशा इतना बचा रहे
const STORE = process.env.DRIPS_FILE || './drips.json';
const USDT = '0x55d398326f99059fF775485246999027B3197955';

if (!PRIVATE_KEY) { console.error('RELAYER_PRIVATE_KEY सेट नहीं है'); process.exit(1); }
if (!ALLOWED_ORIGIN.length) { console.error('ALLOWED_ORIGIN सेट नहीं है (आपकी साइट का पता)'); process.exit(1); }

const provider = new ethers.JsonRpcProvider(RPC_URL);
const relayer = new ethers.Wallet(PRIVATE_KEY, provider);
const usdt = new ethers.Contract(USDT, ['function balanceOf(address) view returns (uint256)'], provider);

/* ===== पहले दिए gas का रिकॉर्ड ===== */
let drips = {};
try { drips = JSON.parse(fs.readFileSync(STORE, 'utf8')); } catch (e) { /* पहली बार */ }
const save = () => { try { fs.writeFileSync(STORE, JSON.stringify(drips)); } catch (e) { console.error('रिकॉर्ड सेव नहीं हुआ:', e.message); } };

/* ===== एक-एक करके transaction भेजने की कतार (nonce टकराव से बचाव) ===== */
let chain = Promise.resolve();
const enqueue = fn => { const r = chain.then(fn); chain = r.catch(() => {}); return r; };

class HttpError extends Error { constructor(status, msg) { super(msg); this.status = status; } }
const today = () => new Date().toISOString().slice(0, 10);
const messageFor = (addr, day) => `IGC gas request\nWallet: ${addr}\nDate: ${day}`;

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '2kb' }));
app.use(cors({ origin: ALLOWED_ORIGIN, methods: ['GET', 'POST'] }));
const limiter = rateLimit({ windowMs: 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false });

app.get('/', (req, res) => {
  res.json({ status: 'IGC gas relayer चालू है', relayer: relayer.address, dripBNB: ethers.formatEther(DRIP), minUSDT: ethers.formatUnits(MIN_USDT, 18) });
});

/* क्लाइंट को सिर्फ gas (थोड़ा BNB) मिलता है; खरीद वह अपने वॉलेट से खुद करता है */
app.post('/api/gas', limiter, async (req, res) => {
  try {
    const { address, signature } = req.body || {};
    if (!ethers.isAddress(address) || typeof signature !== 'string' || signature.length > 200) {
      throw new HttpError(400, 'गलत जानकारी');
    }
    const addr = ethers.getAddress(address);
    const key = addr.toLowerCase();
    const day = today();

    let signer;
    try { signer = ethers.verifyMessage(messageFor(addr, day), signature); }
    catch (e) { throw new HttpError(400, 'Signature गलत है'); }
    if (signer.toLowerCase() !== key) throw new HttpError(401, 'यह वॉलेट आपका नहीं है');

    const txHash = await enqueue(async () => {
      if (drips[key]) throw new HttpError(409, 'इस वॉलेट को gas पहले मिल चुका है');
      if (Object.values(drips).filter(d => d.day === day).length >= DAILY_CAP) {
        throw new HttpError(429, 'आज की सीमा पूरी हो गई, कल कोशिश करें');
      }
      const [usdtBal, bnbBal, relBal] = await Promise.all([
        usdt.balanceOf(addr), provider.getBalance(addr), provider.getBalance(relayer.address)
      ]);
      if (usdtBal < MIN_USDT) throw new HttpError(400, 'वॉलेट में कम से कम ' + ethers.formatUnits(MIN_USDT, 18) + ' USDT होना चाहिए');
      if (bnbBal >= MAX_BNB) throw new HttpError(400, 'आपके पास पहले से gas (BNB) है');
      if (relBal < DRIP + RESERVE) throw new HttpError(503, 'सेवा अभी उपलब्ध नहीं है');

      const tx = await relayer.sendTransaction({ to: addr, value: DRIP });
      drips[key] = { day, tx: tx.hash };
      save();
      await tx.wait();
      return tx.hash;
    });

    res.json({ success: true, txHash, message: 'Gas भेज दिया गया। अब अपने वॉलेट से IGC खरीदें।' });
  } catch (e) {
    if (!e.status) console.error(e);
    res.status(e.status || 500).json({ success: false, error: e.status ? e.message : 'सर्वर में गड़बड़ हुई' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Relayer चालू: ' + relayer.address + ' · पोर्ट ' + PORT));
