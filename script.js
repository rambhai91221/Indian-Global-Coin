/* ================== CONFIG ================== */
const IGC="0xd20068fa2d06406f20752ec8a401bf0cc3a37e15";
const WBNB="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const USDT="0x55d398326f99059ff775485246999027b3197955";
const ROUTER="0x10ED43C718714eb63d5aA57B78B54704E256024E";
const FACTORY="0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const DEAD="0x000000000000000000000000000000000000dEaD";
const RPC="https://bsc-dataseed.binance.org";
const RABI=["function getAmountsOut(uint256,address[]) view returns (uint256[])","function swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256) payable","function swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"];
const TABI=["function balanceOf(address) view returns (uint256)","function allowance(address,address) view returns (uint256)","function approve(address,uint256) returns (bool)","function totalSupply() view returns (uint256)","function decimals() view returns (uint8)","function symbol() view returns (string)","function name() view returns (string)","function owner() view returns (address)"];
const FACTORY_ABI=["function getPair(address,address) view returns (address)"];
const PAIR_ABI=["function getReserves() view returns (uint112,uint112,uint32)","function token0() view returns (address)","function token1() view returns (address)"];

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJ_PvaWxb25FnQAfeCOdgp44NfAXFK59CoVrFjZ1F2lCkTj-5M_AskykXAVdyCefiH0w/exec";
const GOOGLE_CLIENT_ID = "1052030265381-3882rmnics5b09kvvjbf025v5m1cj6lm.apps.googleusercontent.com";
const RELAYER_URL = "https://indian-global-coin.onrender.com";

const SOCIAL={
  telegram:"https://t.me/IGC_Official_Token",
  twitter: "https://x.com/Rambhai91221",
  whatsapp:"https://whatsapp.com/channel/",
  merchant:"https://t.me/IGC_Official_Token"
};

const AIRDROP={perUser:20000,seats:5000,pool:100000000,refBonus:5000};
const OWNER_WALLET = "0xD20068fa2D06406F20752Ec8A401bF0CC3a37e15";
const FALLBACK_TOTAL_SUPPLY = 1000000000;

const MINING_PER_CLICK = 100;
const REF_BOOST_PER = 50;
const MAX_DAILY = 1000;
const MINING_LIFETIME_CAP = 30000;
const MINE_KEY = "igc_last_mine";
const MINE_TOTAL_KEY = "igc_total_mined";
let cooldownInterval = null;

/* ================== HELPERS ================== */
const $=id=>document.getElementById(id);
function on(id,ev,fn){const el=$(id);if(el)el.addEventListener(ev,fn);}
function setHTML(id,html){const el=$(id);if(el)el.innerHTML=html;}
function setText(id,txt){const el=$(id);if(el)el.textContent=txt;}
function setDisplay(id,disp){const el=$(id);if(el)el.style.display=disp;}
function setHref(id,url){const el=$(id);if(el)el.href=url;}

/* ================== TRANSLATIONS ================== */
const TRANSLATIONS = {
  hi: {
    brand:"Indian Global Coin", tagline:"IGC · BNB Smart Chain (BEP-20)", connect:"वॉलेट जोड़ें",
    heroSub:"🚀 BNB Smart Chain पर भरोसेमंद BEP-20 टोकन — भारत से दुनिया तक",
    heroBadge1:"🎁 20,000 IGC FREE",
    heroBadge2:"⛏️ डेली माइनिंग",
    heroBadge3:"🛡️ Contract Verified",
    heroBadge4:"🔒 No Mint Function",
    claimAirdropBtn:"🎁 Claim 20,000 IGC",
    buyNowBtn:"💰 अभी खरीदें",
    goToAirdropPage:"🎁 Claim 20,000 IGC पेज पर जाएँ →",
    quickTitle:"⚡ क्विक एक्शन — अपना काम चुनें",
    qcAirdrop:"एयरड्रॉप", qcAirdropSub:"20,000 IGC FREE पाएँ",
    qcMining:"डेली माइनिंग", qcMiningSub:"रोज़ 100 IGC कमाएँ",
    qcBuySell:"खरीदें / बेचें", qcBuySellSub:"BNB या USDT से",
    qcChart:"लाइव चार्ट", qcChartSub:"DexScreener पर देखें",
    qcSecurity:"सुरक्षा", qcSecuritySub:"On-chain verification",
    qcCommunity:"कम्युनिटी", qcCommunitySub:"Telegram · X · WhatsApp",
    qcMerchant:"मर्चेंट", qcMerchantSub:"दुकानदारों के लिए",
    qcWhitepaper:"व्हाइटपेपर", qcWhitepaperSub:"पूरी जानकारी पढ़ें",
    airdropPageTitle:"🎁 IGC Airdrop — 20,000 IGC FREE",
    airdropPageSub:"सिर्फ पहले 5,000 लोगों के लिए · हर सफल referral पर +5,000 IGC बोनस",
    miningPageTitle:"⛏️ Daily Mining — रोज़ 100 IGC",
    miningPageSub:"सिर्फ 1 click · हर 24 घंटे में · हर referral पर +50 IGC/day",
    buySellPageTitle:"💱 IGC खरीदें / बेचें",
    buySellPageSub:"BNB या USDT से सीधे PancakeSwap के ज़रिए — 30 seconds में",
    communityPageSub:"Telegram · X · WhatsApp — सब एक जगह",
    chartPageSub:"DexScreener · PooCoin · BscScan — सब एक जगह",
    merchantPageSub:"IGC payments accept कीजिए · 0% setup fee · Instant settlement",
    whitepaperPageSub:"Indian Global Coin — पूरी तकनीकी जानकारी, vision और roadmap",
    claimSection:"🎯 अभी Claim कीजिए",
    shareWhitepaper:"📢 Share Whitepaper",
    printPdf:"⬇ PDF के रूप में प्रिंट करें",
    badgeAirdrop:"🎁 FREE AIRDROP LIVE", get:"पाएँ", free:"मुफ़्त!", onlyFirst:"सिर्फ पहले 5,000 लोगों के लिए",
    refWelcome1:"आपको", refWelcome2:"ने refer किया है! नीचे claim कीजिए और", refWelcome3:"पाइए।",
    emailPh:"अपना Email डालिए", passPh:"Password (कम से कम 6 अक्षर)", or:"— या —", continueGoogle:"Continue with Google",
    switchLogin:"अकाउंट है? Login कीजिए", switchSignup:"नया user? Sign Up", bankEncryption:"Bank-Level Encryption",
    logout:"Logout", myRefs:"My Referrals", bonusIGC:"Bonus IGC", claimedIGC:"Claimed IGC", status:"Status",
    stepsTitle:"IGC Airdrop में हिस्सा लेने के 3 आसान steps:",
    step1:"Login कीजिए (ऊपर Email/Google से)", step2a:"वॉलेट जोड़िए (ऊपर", step2b:"बटन)",
    step3a:"अपना Referral Code दोस्तों को भेजिए — हर join पर", step3b:"5,000 IGC बोनस",
    totalPool:"Total Airdrop Pool", seats:"सीटें:", perPerson:"प्रति व्यक्ति:", yourRefCode:"🎟️ आपका Referral Code",
    refDesc:"इसे दोस्तों को भेजिए — हर join पर 5,000 IGC बोनस मिलेगा।", loginToSee:"Login करके देखें",
    copyCode:"📋 Copy Code", shareLink:"📤 Share Link", claimLocked:"🔒 पहले Login + Wallet जोड़ें",
    airdropNote:"⚠️ Note: Airdrop tokens PancakeSwap listing के 7 दिन के अंदर भेजे जाएँगे।",
    badgeMining:"⛏️ DAILY MINING LIVE", mineDaily:"रोज़", earn:"कमाइए!", mineSub:"सिर्फ 1 click — हर 24 घंटे में",
    miningWarn:"🔒 पहले Login + Wallet जोड़ें — फिर mining शुरू कर सकते हैं", totalMined:"Total Mined",
    dailyRate:"Daily Rate", mineNow100:"अभी Mine कीजिए — 100 IGC", nextMining:"⏳ अगली mining के लिए",
    lifetimeProgress:"Lifetime Mining Progress", remaining:"बचा:", cap:"Cap:", howItWorks:"💡 कैसे काम करता है:",
    mine1:"• हर 24 घंटे में 1 बार mine करें — 100 IGC मिलेंगे", mine2:"• हर सफल referral = +50 IGC/day extra",
    mine3:"• Max limit: 1,000 IGC/day", mine4:"• Lifetime Cap: 30,000 IGC per user",
    mine5:"• Mined IGC आपके wallet में 30 दिन के अंदर भेजे जाएँगे", refBoost:"🚀 Referral से mining rate बढ़ाइए!",
    now:"अभी:", refs:"Referrals:", miningNote:"⚠️ Note: Mining से कमाए IGC wallet में 30 दिन के अंदर भेजे जाएँगे।",
    securityTitle:"🛡️ Security & Transparency", securitySub:"IGC के बारे में live blockchain data — BscScan से सीधे। कोई भी verify कर सकता है।",
    liveOnChainData:"📊 Live On-Chain Data", securityBadges:"✅ Security Badges",
    totalSupply:"Total Supply", fixedNoMint:"Fixed · No Mint Function", burned:"Burned", permanentlyRemoved:"Permanently Removed",
    holders:"Holders", onBSC:"On BNB Smart Chain", liquidityPool:"Liquidity Pool", pancakeV2:"PancakeSwap V2",
    verified:"✅ Contract Verified", noMint:"✅ No Mint Function", bep20:"✅ BEP-20 Standard", liqLocked:"🔒 Liquidity Locked",
    ownerLocked:"🔒 Owner Tokens Timelocked", antiBot:"🛡️ Anti-Bot Enabled", commitment:"🛡️ हमारा Commitment:",
    c1:"✅ हम कभी आपका seed phrase या private key नहीं माँगते", c2:"✅ सारे tokens public blockchain पर हैं — कोई छुपा नहीं",
    c3:"✅ Owner wallet और liquidity pool — दोनों on-chain verified", c4:"✅ Contract BscScan पर verified है — कोई hidden function नहीं",
    viewContract:"📜 BscScan पर Contract देखें", viewOwner:"👤 Owner Wallet देखें", liveData:"Live data · ", refresh:"🔄 Refresh",
    communityTitle:"💬 हमारी Community से जुड़िए", telegramGroup:"Telegram Group", whatsappChannel:"WhatsApp Channel", whitepaper:"Whitepaper",
    officialChannels:"📱 Official Channels",
    communityGuideTitle:"🎯 Community Guidelines",
    guide1:"✅ कोई भी scam / fake link शेयर न करें",
    guide2:"✅ किसी से भी seed phrase या private key न माँगें",
    guide3:"✅ सभी को respect करें — कोई spam नहीं",
    guide4:"✅ सिर्फ official channels पर भरोसा करें",
    guide5:"✅ किसी भी समस्या के लिए admin से contact करें",
    shareTitle:"📢 दोस्तों के साथ शेयर कीजिए", whatsapp:"💬 WhatsApp", twitter:"𝕏 Twitter", telegram:"✈️ Telegram", copyLink:"🔗 Link कॉपी",
    openInWallet:"वॉलेट ऐप में खोलें", noWalletMsg:"इस ब्राउज़र में वॉलेट नहीं मिला। खरीद-बिक्री के लिए यह पेज अपने वॉलेट के ब्राउज़र में खोलें।",
    buySellTitle:"IGC खरीदें / बेचें", buy:"खरीदें", sell:"बेचें", bnbAmount:"BNB की मात्रा", willGet:"लगभग मिलेगा",
    slippage:"Slippage (%) — कम से कम 3 रखें", usdtTitle:"💵 USDT से IGC खरीदें",
    usdtDesc:"USDT से सीधे IGC खरीदिए। एक बार Approve कीजिए, फिर हर बार सीधे खरीद सकते हैं।", usdtAmount:"USDT की मात्रा",
    buyWithUsdt:"USDT से IGC खरीदें", gasNote:"⛽ Gas (BNB) के बारे में:",
    gasNoteText:"BSC network पर हर transaction के लिए थोड़ी BNB चाहिए (₹2-5)। अगर wallet में BNB नहीं है तो नीचे \"Gas के लिए BNB खरीदें\" section से ₹50 का BNB खरीद लीजिए — यह 10-15 transactions के लिए काफी है।",
    freeGas:"⛽ Free Gas माँगें (0.001 BNB) — USDT होल्डर्स के लिए", freeGasNote:"(कम से कम 5 USDT होना जरूरी है)",
    buyGasBNB:"Gas के लिए BNB खरीदें", binanceUPI:"Binance · UPI / P2P / Card", dexTitle:"अन्य जगह से खरीदें (DEX)",
    pancakeTradeBNB:"PancakeSwap — BNB से ट्रेडिंग करें", pancakeTradeBNBSub:"BNB/IGC खरीदें या बेचें",
    pancakeTradeUSDT:"PancakeSwap — USDT से ट्रेडिंग करें", pancakeTradeUSDTSub:"USDT (BEP-20) / IGC खरीदें या बेचें",
    poocoinChart:"PooCoin पर चार्ट देखें", liveChart:"लाइव चार्ट", otherExTitle:"🔄 अन्य Exchange / Card से खरीदें",
    otherExSub:"क्या आपके पास पहले से Bitcoin, USDT, ETH या INR किसी exchange पर है? नीचे से अपना तरीका चुनिए और IGC खरीदिए।",
    threeStepsTitle:"📖 किसी भी Exchange से IGC तक कैसे पहुँचें — 3 आसान Step:",
    t3step1:"पहले BNB खरीदिए (Binance/CoinDCX/WazirX/card से) — ₹500 से शुरू",
    t3step2:"BNB को अपने Trust Wallet / MetaMask में भेजिए (withdraw करके)",
    t3step3a:"वापस इस website पर आकर", t3step3b:"\"ट्रेडिंग करें\"", t3step3c:"दबाइए — 30 seconds में IGC खरीदें या बेचें ✅",
    buyBNBBinance:"Binance से BNB खरीदें", binanceDesc:"Card / UPI / P2P · Global सबसे बड़ा exchange",
    buyBNBCoinDCX:"CoinDCX से BNB खरीदें", coindcxDesc:"भारत का #1 exchange · UPI से सीधे",
    buyBNBWazirX:"WazirX से BNB खरीदें", wazirxDesc:"Indian exchange · INR से सीधे",
    buyBNBCoinbase:"Coinbase से BNB खरीदें", coinbaseDesc:"Global · Card/Apple Pay से",
    buyBNBTransak:"Card / UPI से सीधे BNB खरीदें (Transak)", transakDesc:"बिना exchange · सीधे आपके wallet में",
    buyBNBMetamask:"MetaMask के अंदर से BNB खरीदें", metamaskDesc:"Card से · MetaMask app में built-in",
    fastestWay:"💡 सबसे तेज़ तरीका:", fastestWayText:"अगर आपके पास Binance app है — उसमें P2P से BNB खरीदिए (UPI से), फिर MetaMask में withdraw कर दीजिए। पूरा process 5 मिनट में हो जाता है।",
    needHelp:"❓ Help चाहिए?", needHelpText:"हमारे Telegram group में message कीजिए — हम step-by-step guide कर देंगे।",
    helpTelegram:"Telegram पर Help लें",
    merchantTitle:"🏪 दुकानदारों के लिए — Merchant Program",
    merchant1:"0% setup fee", merchant2:"QR Code", merchant2b:"IGC QR पाएँ", merchant3:"Instant payment",
    merchant4:"Early merchant bonus", merchant4b:"पहले 100 को 50,000 IGC", merchantContact:"Merchant बनने के लिए संपर्क करें",
    merchantBenefits:"🎁 Merchant Benefits",
    merchantSteps:"📋 Merchant कैसे बनें — 3 Step",
    merchantStep1:"नीचे \"Merchant बनने के लिए संपर्क करें\" बटन दबाइए",
    merchantStep2:"Telegram पर हमें अपनी दुकान की जानकारी भेजिए",
    merchantStep3:"24 घंटे में आपका QR Code + Merchant ID तैयार हो जाएगा",
    contactTitle:"📞 Contact",
    merchant1b:"0% setup fee — कोई भी upfront charge नहीं",
    merchant2c:"QR Code — IGC QR तुरंत पाएँ",
    merchant3b:"Instant payment — customer से payment सीधे आपके wallet में",
    merchant4c:"Early merchant bonus — पहले 100 merchants को 50,000 IGC",
    whitepaperTitle:"व्हाइटपेपर", read:"📖 पढ़ें", pdf:"⬇ PDF",
    liveChartTitle:"लाइव प्राइस चार्ट",
    dexScreenerChart:"📊 DexScreener Live Chart",
    quickLinks:"🔍 Quick Links",
    contractTitle:"कॉन्ट्रैक्ट एड्रेस", copyAddress:"एड्रेस कॉपी करें", verifiedNote:"✅ Contract verified on BscScan · ✅ No mint function",
    chooseWallet:"🔐 अपना Wallet चुनिए", walletSub:"IGC खरीदने, बेचने और airdrop claim करने के लिए वॉलेट चुनिए। सबसे नीचे दिए विकल्प भी काम करते हैं।",
    mmTag:"सबसे popular · Browser extension + Mobile", twTag:"Binance का official · Mobile पर best",
    wcTag:"300+ wallets को support करता है", cbTag:"Global · नए users के लिए आसान", bwTag:"Binance app में built-in",
    spTag:"Hardware + Mobile wallet", tpTag:"BSC पर multi-chain support", otherWallet:"कोई और wallet? सीधे इसी पेज पर खोलिए",
    otherWalletTag:"Browser में wallet extension होने पर connect होगा", impNote:"💡 ज़रूरी बात:",
    impNoteText:"Wallet popup तभी खुलेगा जब आपने MetaMask / Trust Wallet install किया हो। अगर आप मोबाइल ब्राउज़र में हैं तो ऊपर से किसी भी wallet का option दबाइए — वह ऐप में खुलेगा।",
    securityLabel:"🔒 सुरक्षा:", securityNote:"हम कभी आपका seed phrase या private key नहीं माँगते।",
    noWalletTitle:"🌐 Wallet नहीं मिला", noWalletLead:"इस browser में कोई Web3 wallet नहीं मिला। IGC खरीदने-बेचने के लिए",
    noWalletLeadB:"नीचे से कोई wallet install कीजिए", noWalletLeadC:"— सिर्फ 1 minute में हो जाएगा।",
    installMM:"MetaMask install करें", installMMSub:"Chrome/Edge extension या Mobile app",
    installTW:"Trust Wallet install करें", installTWSub:"Android / iOS — सबसे आसान", installCBSub:"Global · Simple setup",
    tipLabel:"💡 Tip:", tipText:"अगर आप mobile में हैं तो MetaMask या Trust Wallet install करके, उस app के अंदर browser खोलिए और rambhai91221.github.io/Indian-Global-Coin वहाँ खोलिए — तब सब कुछ automatic connect हो जाएगा।",
    gasError:"Gas (BNB) कम है। पहले थोड़ा BNB खरीद लीजिए या ऊपर 'Free Gas' बटन दबाइए।",
    gasSuccess:"✅ गैस मिल गई! अब IGC खरीदें।", gasServerFail:"सर्वर से कनेक्ट नहीं हो पा रहा या आपने रद्द कर दिया",
    signing:"⏳ सिग्नेचर का इंतज़ार...", sendingGas:"⏳ गैस फीस भेजी जा रही है...", gasBtnText:"⛽ Free Gas माँगें (0.001 BNB) — USDT होल्डर्स के लिए",
    walletConnected:"✅ Wallet जुड़ गया!", loginFirst:"पहले Login कीजिए", walletFirst:"पहले वॉलेट जोड़ें",
    walletAlready:"✅ Wallet पहले से जुड़ा है: ", welcomeWallet:"वॉलेट ऐप चुनिए…", noLiquidity:"अभी liquidity नहीं मिली।",
    approve:"Approve कीजिए…", confirm:"वॉलेट में मंज़ूर कीजिए…", sellConfirm:"बिक्री मंज़ूर कीजिए…", waitingConfirm:"कन्फ़र्म होने का इंतज़ार…",
    done:"पूरा हुआ! ✔ ", notEnoughUSDT:"आपके पास इतना USDT नहीं है।", noLiquidityBuy:"अभी liquidity नहीं है, इसलिए खरीद नहीं हो सकती।",
    approveUSDT:"पहले USDT की अनुमति (Approve) दीजिए…", buyConfirm:"अब खरीद मंज़ूर कीजिए…",
    igcGot:"✅ IGC आपके वॉलेट में आ गया! ", sendAmount:"मात्रा डालिए।", copyOk:"कॉपी हो गया ✔",
    codeCopied:"📋 Code copied: ", linkCopied:"🔗 Link copied!", refreshing:"🔄 Refreshing…",
    refShareText:"🎁 मुझे Indian Global Coin (IGC) से 20,000 IGC FREE मिल रहे हैं! तुम भी मेरे referral link से जुड़ो:",
    shareText:"🚀 Indian Global Coin (IGC) — BNB Chain पर नया BEP-20 टोकन! 20,000 IGC FREE:",
    contractCopied:"एड्रेस कॉपी करें", tokenBalance:"बैलेंस: ", mineBtnGo:"अभी Mine कीजिए — ", mineNowText:"Mining हो रही है…",
    mineGot:"⛏️ ", mineGotSuffix:" IGC मिले! अगली mining 24 घंटे बाद", wait:"⏳ Wait करें…",
    lifetimeCapDone:"🎉 Lifetime Cap पूरा हो गया!", lifetimeCapToast:"🎉 आपका Lifetime mining cap पूरा हो गया!",
    claimSuccess:"✅ Claim successful! 20,000 IGC", claimSaved:"✅ आपका claim हो गया! Google Sheet में save हो गया।",
    claimDone:"✔ Claimed", alreadyClaimed:"आप पहले ही claim कर चुके हैं", claimFailed:"Claim failed — फिर कोशिश कीजिए",
    signupOk:"✅ Signup successful!", loginOk:"✅ Login successful!", wrongCred:"Email या Password गलत है",
    emailReg:"यह email पहले से registered है", validEmail:"सही Email डालिए", pwShort:"Password कम से कम 6 अक्षर",
    googleLogin:"✅ Google Login: ", googleFail:"Google login failed", googleRespErr:"Google response error",
    googleClientFirst:"पहले Google Client ID setup कीजिए", googleScriptLoad:"Google script load हो रहा है… फिर try कीजिए",
    loggedOut:"Logged out", rightClickOff:"🚫 Right-click disabled for security", devToolsOff:"🚫 DevTools disabled",
    viewSourceOff:"🚫 View source disabled", printOff:"🚫 Print disabled", copyNotAllowed:"🚫 कॉपी की अनुमति नहीं है",
    needLogin:"पहले Login कीजिए", needWallet:"पहले वॉलेट जोड़ें", needBoth:"पहले Login + Wallet जोड़ें",
    claimLockedText:"🔒 पहले Login + Wallet जोड़ें", claimReadyText:"🎁 20,000 IGC Claim कीजिए", claimLogin:"🔒 पहले Login कीजिए",
    claimWallet:"🔗 पहले वॉलेट जोड़ें", welcomeRef:"🎉 आपको", welcomeRefMid:"ने refer किया है!",
    i18nReady:"भाषा बदल गई: हिंदी",
    usdtSlippageNoteTitle:"⚠️ नोट:", usdtSlippageNoteText:"USDT से खरीदते समय Slippage को 5% से 10% रखें। छोटी मात्रा में खरीदने पर Price Impact ज्यादा हो सकता है।",
    bnbSlippageNoteTitle:"⚠️ नोट:", bnbSlippageNoteText:"अगर आप बड़ी मात्रा में IGC खरीद रहे हैं, तो कृपया Slippage बढ़ाएँ (5% से 10%)। या छोटी मात्रा में खरीदारी करें।",
    sendWaRef:"WhatsApp पर भेजें",
    sendTgRef:"Telegram पर भेजें"
  },
  en: {
    brand:"Indian Global Coin", tagline:"IGC · BNB Smart Chain (BEP-20)", connect:"Connect Wallet",
    heroSub:"🚀 Trusted BEP-20 Token on BNB Smart Chain — From India to the World",
    heroBadge1:"🎁 20,000 IGC FREE",
    heroBadge2:"⛏️ Daily Mining",
    heroBadge3:"🛡️ Contract Verified",
    heroBadge4:"🔒 No Mint Function",
    claimAirdropBtn:"🎁 Claim 20,000 IGC",
    buyNowBtn:"💰 Buy Now",
    goToAirdropPage:"🎁 Go to Claim 20,000 IGC Page →",
    quickTitle:"⚡ Quick Actions — Choose Your Task",
    qcAirdrop:"Airdrop", qcAirdropSub:"Get 20,000 IGC FREE",
    qcMining:"Daily Mining", qcMiningSub:"Earn 100 IGC daily",
    qcBuySell:"Buy / Sell", qcBuySellSub:"With BNB or USDT",
    qcChart:"Live Chart", qcChartSub:"View on DexScreener",
    qcSecurity:"Security", qcSecuritySub:"On-chain verification",
    qcCommunity:"Community", qcCommunitySub:"Telegram · X · WhatsApp",
    qcMerchant:"Merchant", qcMerchantSub:"For Shopkeepers",
    qcWhitepaper:"Whitepaper", qcWhitepaperSub:"Read full details",
    airdropPageTitle:"🎁 IGC Airdrop — 20,000 IGC FREE",
    airdropPageSub:"Only for first 5,000 users · +5,000 IGC bonus per successful referral",
    miningPageTitle:"⛏️ Daily Mining — 100 IGC Daily",
    miningPageSub:"Just 1 click · Every 24 hours · +50 IGC/day per referral",
    buySellPageTitle:"💱 Buy / Sell IGC",
    buySellPageSub:"Directly via PancakeSwap with BNB or USDT — in 30 seconds",
    communityPageSub:"Telegram · X · WhatsApp — All in one place",
    chartPageSub:"DexScreener · PooCoin · BscScan — all in one place",
    merchantPageSub:"Accept IGC payments · 0% setup fee · Instant settlement",
    whitepaperPageSub:"Indian Global Coin — Full technical details, vision and roadmap",
    claimSection:"🎯 Claim Now",
    shareWhitepaper:"📢 Share Whitepaper",
    printPdf:"⬇ Print as PDF",
    badgeAirdrop:"🎁 FREE AIRDROP LIVE", get:"Get", free:"Free!", onlyFirst:"Only for first 5,000 users",
    refWelcome1:"You were referred by", refWelcome2:"! Claim below and get", refWelcome3:".",
    emailPh:"Enter your Email", passPh:"Password (min 6 characters)", or:"— or —", continueGoogle:"Continue with Google",
    switchLogin:"Have an account? Login", switchSignup:"New user? Sign Up", bankEncryption:"Bank-Level Encryption",
    logout:"Logout", myRefs:"My Referrals", bonusIGC:"Bonus IGC", claimedIGC:"Claimed IGC", status:"Status",
    stepsTitle:"3 easy steps to join IGC Airdrop:",
    step1:"Login (with Email/Google above)", step2a:"Add Wallet (click", step2b:"button above)",
    step3a:"Share your Referral Code — for every join", step3b:"5,000 IGC bonus",
    totalPool:"Total Airdrop Pool", seats:"Seats:", perUser:"Per user:", perPerson:"Per user:", yourRefCode:"🎟️ Your Referral Code",
    refDesc:"Share with friends — get 5,000 IGC bonus per join.", loginToSee:"Login to see",
    copyCode:"📋 Copy Code", shareLink:"📤 Share Link", claimLocked:"🔒 Login + Wallet first",
    airdropNote:"⚠️ Note: Airdrop tokens will be sent within 7 days of PancakeSwap listing.",
    badgeMining:"⛏️ DAILY MINING LIVE", mineDaily:"Mine", earn:"daily!", mineSub:"Just 1 click — every 24 hours",
    miningWarn:"🔒 Login + Add Wallet first — then you can start mining", totalMined:"Total Mined",
    dailyRate:"Daily Rate", mineNow100:"Mine Now — 100 IGC", nextMining:"⏳ Next mining in",
    lifetimeProgress:"Lifetime Mining Progress", remaining:"Remaining:", cap:"Cap:", howItWorks:"💡 How it works:",
    mine1:"• Mine once every 24 hours — get 100 IGC", mine2:"• Every successful referral = +50 IGC/day extra",
    mine3:"• Max limit: 1,000 IGC/day", mine4:"• Lifetime Cap: 30,000 IGC per user",
    mine5:"• Mined IGC will be sent to your wallet within 30 days", refBoost:"🚀 Increase mining rate with Referrals!",
    now:"Now:", refs:"Referrals:", miningNote:"⚠️ Note: Mined IGC will be sent to your wallet within 30 days.",
    securityTitle:"🛡️ Security & Transparency", securitySub:"Live blockchain data for IGC — directly from BscScan. Anyone can verify.",
    liveOnChainData:"📊 Live On-Chain Data", securityBadges:"✅ Security Badges",
    totalSupply:"Total Supply", fixedNoMint:"Fixed · No Mint Function", burned:"Burned", permanentlyRemoved:"Permanently Removed",
    holders:"Holders", onBSC:"On BNB Smart Chain", liquidityPool:"Liquidity Pool", pancakeV2:"PancakeSwap V2",
    verified:"✅ Contract Verified", noMint:"✅ No Mint Function", bep20:"✅ BEP-20 Standard", liqLocked:"🔒 Liquidity Locked",
    ownerLocked:"🔒 Owner Tokens Timelocked", antiBot:"🛡️ Anti-Bot Enabled", commitment:"🛡️ Our Commitment:",
    c1:"✅ We never ask for your seed phrase or private key", c2:"✅ All tokens are on public blockchain — nothing hidden",
    c3:"✅ Owner wallet and liquidity pool — both on-chain verified", c4:"✅ Contract is verified on BscScan — no hidden functions",
    viewContract:"📜 View Contract on BscScan", viewOwner:"👤 View Owner Wallet", liveData:"Live data · ", refresh:"🔄 Refresh",
    communityTitle:"💬 Join Our Community", telegramGroup:"Telegram Group", whatsappChannel:"WhatsApp Channel", whitepaper:"Whitepaper",
    officialChannels:"📱 Official Channels",
    communityGuideTitle:"🎯 Community Guidelines",
    guide1:"✅ Don't share any scam / fake links",
    guide2:"✅ Never ask anyone for seed phrase or private key",
    guide3:"✅ Respect everyone — no spam",
    guide4:"✅ Only trust official channels",
    guide5:"✅ Contact admin for any problem",
    shareTitle:"📢 Share with Friends", whatsapp:"💬 WhatsApp", twitter:"𝕏 Twitter", telegram:"✈️ Telegram", copyLink:"🔗 Copy Link",
    openInWallet:"Open in Wallet App", noWalletMsg:"No wallet found in this browser. Open this page in your wallet's browser to trade.",
    buySellTitle:"Buy / Sell IGC", buy:"Buy", sell:"Sell", bnbAmount:"BNB Amount", willGet:"You'll approximately get",
    slippage:"Slippage (%) — keep at least 3", usdtTitle:"💵 Buy IGC with USDT",
    usdtDesc:"Buy IGC directly with USDT. Approve once, then buy directly every time.", usdtAmount:"USDT Amount",
    buyWithUsdt:"Buy IGC with USDT", gasNote:"⛽ About Gas (BNB):",
    gasNoteText:"Each transaction on BSC network needs a little BNB (₹2-5). If wallet has no BNB, buy ₹50 BNB from \"Buy BNB for Gas\" section below — enough for 10-15 transactions.",
    freeGas:"⛽ Get Free Gas (0.001 BNB) — For USDT Holders", freeGasNote:"(Minimum 5 USDT required)",
    buyGasBNB:"Buy BNB for Gas", binanceUPI:"Binance · UPI / P2P / Card", dexTitle:"Buy from Other Places (DEX)",
    pancakeTradeBNB:"PancakeSwap — Trade with BNB", pancakeTradeBNBSub:"Buy or Sell BNB/IGC",
    pancakeTradeUSDT:"PancakeSwap — Trade with USDT", pancakeTradeUSDTSub:"Buy or Sell USDT (BEP-20) / IGC",
    poocoinChart:"View Chart on PooCoin", liveChart:"Live Chart", otherExTitle:"🔄 Buy from Other Exchange / Card",
    otherExSub:"Already have Bitcoin, USDT, ETH or INR on any exchange? Choose your method below and buy IGC.",
    threeStepsTitle:"📖 How to reach IGC from any Exchange — 3 Easy Steps:",
    t3step1:"First buy BNB (from Binance/CoinDCX/WazirX/card) — start with ₹500",
    t3step2:"Send BNB to your Trust Wallet / MetaMask (via withdraw)",
    t3step3a:"Come back to this website and click", t3step3b:"\"Trade Now\"", t3step3c:"— Buy or Sell IGC in 30 seconds ✅",
    buyBNBBinance:"Buy BNB from Binance", binanceDesc:"Card / UPI / P2P · World's largest exchange",
    buyBNBCoinDCX:"Buy BNB from CoinDCX", coindcxDesc:"India's #1 exchange · Directly via UPI",
    buyBNBWazirX:"Buy BNB from WazirX", wazirxDesc:"Indian exchange · Directly from INR",
    buyBNBCoinbase:"Buy BNB from Coinbase", coinbaseDesc:"Global · via Card/Apple Pay",
    buyBNBTransak:"Buy BNB directly via Card / UPI (Transak)", transakDesc:"No exchange · Directly to your wallet",
    buyBNBMetamask:"Buy BNB inside MetaMask", metamaskDesc:"Via Card · Built-in in MetaMask app",
    fastestWay:"💡 Fastest way:", fastestWayText:"If you have Binance app — buy BNB via P2P (using UPI), then withdraw to MetaMask. Whole process takes 5 minutes.",
    needHelp:"❓ Need Help?", needHelpText:"Message us on Telegram group — we'll guide you step-by-step.",
    helpTelegram:"Get Help on Telegram",
    merchantTitle:"🏪 For Shopkeepers — Merchant Program",
    merchant1:"0% setup fee", merchant2:"QR Code", merchant2b:"Get IGC QR", merchant3:"Instant payment",
    merchant4:"Early merchant bonus", merchant4b:"50,000 IGC for first 100", merchantContact:"Contact to become a Merchant",
    merchantBenefits:"🎁 Merchant Benefits",
    merchantSteps:"📋 How to Become Merchant — 3 Steps",
    merchantStep1:"Tap \"Contact to become a Merchant\" button below",
    merchantStep2:"Send us your shop details on Telegram",
    merchantStep3:"Your QR Code + Merchant ID ready within 24 hours",
    contactTitle:"📞 Contact",
    merchant1b:"0% setup fee — no upfront charge",
    merchant2c:"QR Code — Get IGC QR instantly",
    merchant3b:"Instant payment — payment goes directly to your wallet",
    merchant4c:"Early merchant bonus — 50,000 IGC for first 100 merchants",
    whitepaperTitle:"Whitepaper", read:"📖 Read", pdf:"⬇ PDF",
    liveChartTitle:"Live Price Chart",
    dexScreenerChart:"📊 DexScreener Live Chart",
    quickLinks:"🔍 Quick Links",
    contractTitle:"Contract Address", copyAddress:"Copy Address", verifiedNote:"✅ Contract verified on BscScan · ✅ No mint function",
    chooseWallet:"🔐 Choose Your Wallet", walletSub:"Choose a wallet to buy, sell and claim airdrop of IGC. Options at the bottom also work.",
    mmTag:"Most popular · Browser extension + Mobile", twTag:"Binance official · Best on Mobile",
    wcTag:"Supports 300+ wallets", cbTag:"Global · Easy for new users", bwTag:"Built-in in Binance app",
    spTag:"Hardware + Mobile wallet", tpTag:"Multi-chain support on BSC", otherWallet:"Another wallet? Open directly on this page",
    otherWalletTag:"Will connect if browser has wallet extension", impNote:"💡 Important:",
    impNoteText:"Wallet popup will only open if you have installed MetaMask / Trust Wallet. If you're on mobile browser, tap any wallet option above — it will open in the app.",
    securityLabel:"🔒 Security:", securityNote:"We never ask for your seed phrase or private key.",
    noWalletTitle:"🌐 No Wallet Found", noWalletLead:"No Web3 wallet found in this browser. To buy-sell IGC,",
    noWalletLeadB:"install a wallet from below", noWalletLeadC:"— takes just 1 minute.",
    installMM:"Install MetaMask", installMMSub:"Chrome/Edge extension or Mobile app",
    installTW:"Install Trust Wallet", installTWSub:"Android / iOS — easiest", installCBSub:"Global · Simple setup",
    tipLabel:"💡 Tip:", tipText:"If you're on mobile, install MetaMask or Trust Wallet, open browser inside the app, and open rambhai91221.github.io/Indian-Global-Coin there — everything will connect automatically.",
    gasError:"Gas (BNB) is low. Buy some BNB first or tap 'Free Gas' button above.",
    gasSuccess:"✅ Gas received! Now buy IGC.", gasServerFail:"Cannot connect to server or you cancelled",
    signing:"⏳ Waiting for signature...", sendingGas:"⏳ Sending gas fee...", gasBtnText:"⛽ Get Free Gas (0.001 BNB) — For USDT Holders",
    walletConnected:"✅ Wallet connected!", loginFirst:"Please Login first", walletFirst:"Please connect Wallet first",
    walletAlready:"✅ Wallet already connected: ", welcomeWallet:"Choose wallet app…", noLiquidity:"No liquidity found yet.",
    approve:"Approve…", confirm:"Confirm in wallet…", sellConfirm:"Confirm sell…", waitingConfirm:"Waiting for confirmation…",
    done:"Done! ✔ ", notEnoughUSDT:"You don't have enough USDT.", noLiquidityBuy:"No liquidity available, cannot buy now.",
    approveUSDT:"First approve USDT…", buyConfirm:"Now confirm buy…",
    igcGot:"✅ IGC received in your wallet! ", sendAmount:"Enter amount.", copyOk:"Copied ✔",
    codeCopied:"📋 Code copied: ", linkCopied:"🔗 Link copied!", refreshing:"🔄 Refreshing…",
    refShareText:"🎁 I'm getting 20,000 IGC FREE from Indian Global Coin (IGC)! Join with my referral link:",
    shareText:"🚀 Indian Global Coin (IGC) — New BEP-20 token on BNB Chain! 20,000 IGC FREE:",
    contractCopied:"Copy Address", tokenBalance:"Balance: ", mineBtnGo:"Mine Now — ", mineNowText:"Mining…",
    mineGot:"⛏️ ", mineGotSuffix:" IGC received! Next mining after 24 hours", wait:"⏳ Please Wait…",
    lifetimeCapDone:"🎉 Lifetime Cap reached!", lifetimeCapToast:"🎉 Your Lifetime mining cap is complete!",
    claimSuccess:"✅ Claim successful! 20,000 IGC", claimSaved:"✅ Your claim is done! Saved in Google Sheet.",
    claimDone:"✔ Claimed", alreadyClaimed:"You've already claimed", claimFailed:"Claim failed — please try again",
    signupOk:"✅ Signup successful!", loginOk:"✅ Login successful!", wrongCred:"Email or Password is wrong",
    emailReg:"This email is already registered", validEmail:"Enter a valid Email", pwShort:"Password at least 6 characters",
    googleLogin:"✅ Google Login: ", googleFail:"Google login failed", googleRespErr:"Google response error",
    googleClientFirst:"Setup Google Client ID first", googleScriptLoad:"Google script is loading… try again",
    loggedOut:"Logged out", rightClickOff:"🚫 Right-click disabled for security", devToolsOff:"🚫 DevTools disabled",
    viewSourceOff:"🚫 View source disabled", printOff:"🚫 Print disabled", copyNotAllowed:"🚫 Copy not allowed",
    needLogin:"Please Login first", needWallet:"Please connect Wallet first", needBoth:"Login + Add Wallet first",
    claimLockedText:"🔒 Login + Wallet first", claimReadyText:"🎁 Claim 20,000 IGC", claimLogin:"🔒 Login first",
    claimWallet:"🔗 Connect Wallet first", welcomeRef:"🎉 You were referred by", welcomeRefMid:"!",
    i18nReady:"Language changed to English",
    usdtSlippageNoteTitle:"⚠️ Note:", usdtSlippageNoteText:"Keep Slippage between 5% to 10% while buying with USDT. Price Impact may be high for small amounts.",
    bnbSlippageNoteTitle:"⚠️ Note:", bnbSlippageNoteText:"If you are buying a large amount of IGC, please increase Slippage (5% to 10%) or buy in smaller amounts.",
    sendWaRef:"Send on WhatsApp",
    sendTgRef:"Send on Telegram"
  }
};

let currentLang = localStorage.getItem("igc_lang") || "hi";

function t(key){
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || (TRANSLATIONS.hi[key]) || key;
}

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("igc_lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined){
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined){
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });
  const label = document.getElementById("langLabel");
  if(label) label.textContent = (lang === "hi") ? "EN" : "हिं";
  updateLoginUI();
  updateClaimBtn();
  syncBtn();
  updateNavLabels();
}

function updateNavLabels(){
  const map = currentLang === "hi"
    ? {home:"होम", airdrop:"एयरड्रॉप", mining:"माइनिंग", buysell:"खरीदें/बेचें", security:"सुरक्षा", community:"कम्युनिटी", chart:"चार्ट", merchant:"मर्चेंट", whitepaper:"व्हाइटपेपर"}
    : {home:"Home", airdrop:"Airdrop", mining:"Mining", buysell:"Buy/Sell", security:"Security", community:"Community", chart:"Chart", merchant:"Merchant", whitepaper:"Whitepaper"};
  document.querySelectorAll("[data-nav]").forEach(el=>{
    const k = el.getAttribute("data-nav");
    if(map[k]) el.textContent = map[k];
  });
}

on("langToggle","click",() => {
  const next = (currentLang === "hi") ? "en" : "hi";
  applyLang(next);
  toast(t("i18nReady"), "var(--ok)");
});

/* ================== RPC Setup ================== */
const rpc=new ethers.JsonRpcProvider(RPC);
const rRouter=new ethers.Contract(ROUTER,RABI,rpc);
const rToken=new ethers.Contract(IGC,TABI,rpc);
const rFactory=new ethers.Contract(FACTORY,FACTORY_ABI,rpc);
let mode="buy",user=null,signer=null,timer=null,quote=0n;
let currentEmail=null;

function toast(msg,color){
  const el=$("toast");if(!el)return;
  el.textContent=msg;el.style.background=color||"var(--gold)";
  el.style.color=color?"#fff":"#111";el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),3000);
}

const K={MY_CODE:"igc_my_code",REF_BY:"igc_ref_by",EMAIL:"igc_email",PASS:"igc_pass",CLAIMED:"igc_claimed"};

function genCode(){const c="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let s="";for(let i=0;i<6;i++)s+=c[Math.floor(Math.random()*c.length)];return "IGC-"+s;}
function getMyCode(){let c=localStorage.getItem(K.MY_CODE);if(!c){c=genCode();localStorage.setItem(K.MY_CODE,c);}return c;}
function captureRef(){const u=new URL(location.href);const r=u.searchParams.get("ref");if(!r)return null;if(r===getMyCode())return null;if(localStorage.getItem(K.REF_BY))return localStorage.getItem(K.REF_BY);localStorage.setItem(K.REF_BY,r);return r;}

const walletModal = $("walletModal");
const noWalletModal = $("noWalletModal");
function openWalletModal(){if(walletModal){walletModal.classList.add("show");document.body.style.overflow = "hidden";}}
function closeWalletModal(){if(walletModal){walletModal.classList.remove("show");document.body.style.overflow = "";}}
function openNoWalletModal(){if(noWalletModal){noWalletModal.classList.add("show");document.body.style.overflow = "hidden";}}
function closeNoWalletModal(){if(noWalletModal){noWalletModal.classList.remove("show");document.body.style.overflow = "";}}
on("walletClose","click",closeWalletModal);
if(walletModal) walletModal.addEventListener("click", (e)=>{ if(e.target === walletModal) closeWalletModal(); });
on("nwClose","click",closeNoWalletModal);
if(noWalletModal) noWalletModal.addEventListener("click", (e)=>{ if(e.target === noWalletModal) closeNoWalletModal(); });

(function(){
  const baseUrl = location.origin + location.pathname.replace(/\/$/, "") + "/";
  const encodedUrl = encodeURIComponent(baseUrl);
  const cleanHost = baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const mmLink = $("wmMetaMask"); if(mmLink) mmLink.href = "https://metamask.app.link/dapp/" + cleanHost;
  const twLink = $("wmTrust"); if(twLink) twLink.href = "https://link.trustwallet.com/open_url?coin_id=20000714&url=" + encodedUrl;
  const cbLink = $("wmCoinbase"); if(cbLink) cbLink.href = "https://go.cb-w.com/dapp?cb_url=" + encodedUrl;
  const trustFoot = $("trust");
  if(trustFoot){trustFoot.href = "https://link.trustwallet.com/open_url?coin_id=20000714&url=" + encodedUrl;trustFoot.target = "_blank"; trustFoot.rel = "noopener";}
  const mmFoot = $("mm");
  if(mmFoot){mmFoot.href = "https://metamask.app.link/dapp/" + cleanHost;mmFoot.target = "_blank"; mmFoot.rel = "noopener";}
})();

function isMobile(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

document.querySelectorAll(".wallet-item").forEach(el => {
  el.addEventListener("click", async (e) => {
    const wname = el.getAttribute("data-wname") || "wallet";
    const walletType = el.getAttribute("data-wallet");
    if(walletType === "walletconnect"){
      e.preventDefault();
      if(window.ethereum){closeWalletModal();await connect();}
      else{closeWalletModal();openNoWalletModal();}
      return;
    }
    if(window.ethereum && (wname === "MetaMask" || wname === "Trust Wallet")){
      e.preventDefault();closeWalletModal();await connect();return;
    }
    closeWalletModal();
  });
});

on("wOpenInBrowser","click", async (e) => {
  e.preventDefault();e.stopPropagation();
  const hasEth = (typeof window.ethereum !== "undefined" && window.ethereum !== null);
  closeWalletModal();
  if(hasEth){setTimeout(async () => {try { await connect(); } catch(err) { openNoWalletModal(); }}, 250);}
  else{setTimeout(() => { openNoWalletModal(); }, 300);}
});

let isSignup=false;

function updateLoginUI(){
  const titleEl = $("loginTitle");
  if(titleEl) titleEl.textContent = isSignup ? "📝 " + (currentLang==="hi"?"नया अकाउंट बनाइए":"Create New Account") : "🔐 " + (currentLang==="hi"?"Login कीजिए":"Login");
  const btnEl = $("loginBtn");
  if(btnEl) btnEl.textContent = isSignup ? "Sign Up" : "Login";
  const sw = $("switchText");
  if(sw){
    sw.innerHTML = isSignup
      ? (currentLang==="hi"?'अकाउंट है? <a id="switchLink">Login</a>':'Have an account? <a id="switchLink">Login</a>')
      : (currentLang==="hi"?'नया user? <a id="switchLink">Sign Up</a>':'New user? <a id="switchLink">Sign Up</a>');
  }
  setTimeout(()=>{const l=$("switchLink");if(l) l.onclick=()=>{isSignup=!isSignup;updateLoginUI();};},10);
}

on("loginBtn","click",()=>{
  const em=$("emailInput") ? $("emailInput").value.trim() : "";
  const pw=$("passInput") ? $("passInput").value.trim() : "";
  if(!em||!em.includes("@")){toast(t("validEmail"),"#ff6b6b");return}
  if(pw.length<6){toast(t("pwShort"),"#ff6b6b");return}
  const savedEmail=localStorage.getItem(K.EMAIL);
  const savedPass=localStorage.getItem(K.PASS);
  if(isSignup){
    if(savedEmail){toast(t("emailReg"),"#ff6b6b");return}
    localStorage.setItem(K.EMAIL,em);localStorage.setItem(K.PASS,pw);
    currentEmail=em;toast(t("signupOk"));showDashboard();
  }else{
    if(em!==savedEmail||pw!==savedPass){toast(t("wrongCred"),"#ff6b6b");return}
    currentEmail=em;toast(t("loginOk"));showDashboard();
  }
});

let googleReady=false;
function initGoogleSignIn(){
  if(!window.google || !window.google.accounts) return false;
  if(GOOGLE_CLIENT_ID.includes("YOUR_CLIENT_ID")) return false;
  try{
    google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:handleGoogleCredential,auto_select:false,cancel_on_tap_outside:true,use_fedcm_for_prompt:true});
    googleReady=true;return true;
  }catch(e){return false;}
}
function handleGoogleCredential(response){
  try{
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    const em = payload.email;const name = payload.name || "";
    if(!em){toast(t("googleFail"),"#ff6b6b");return}
    currentEmail = em;
    localStorage.setItem(K.EMAIL, em);localStorage.setItem(K.PASS, "google_oauth");localStorage.setItem("igc_gname", name);
    toast(t("googleLogin") + em);showDashboard();
    sendToSheet("googleLogin",{email:em, wallet:user||"", googleLogin:true, name:name});
  }catch(e){toast(t("googleRespErr"),"#ff6b6b");}
}
on("googleBtn","click",()=>{
  if(GOOGLE_CLIENT_ID.includes("YOUR_CLIENT_ID")){toast(t("googleClientFirst"),"#ff6b6b");return}
  if(!googleReady){initGoogleSignIn();}
  if(googleReady && window.google && google.accounts){
    google.accounts.id.prompt((notification)=>{
      if(notification.isNotDisplayed() || notification.isSkippedMoment()){
        try{
          const client = google.accounts.oauth2.initTokenClient({
            client_id: GOOGLE_CLIENT_ID,scope: "openid email profile",
            callback: (resp)=>{
              if(resp && resp.access_token){
                fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:"Bearer "+resp.access_token}})
                .then(r=>r.json()).then(info=>{
                  currentEmail = info.email;
                  localStorage.setItem(K.EMAIL, info.email);localStorage.setItem(K.PASS, "google_oauth");localStorage.setItem("igc_gname", info.name||"");
                  toast(t("googleLogin") + info.email);showDashboard();
                  sendToSheet("googleLogin",{email:info.email, wallet:user||"", googleLogin:true, name:info.name||""});
                }).catch(()=>toast("Google userinfo error","#ff6b6b"));
              }
            }
          });
          client.requestAccessToken();
        }catch(e){toast(t("googleFail"),"#ff6b6b");}
      }
    });
  } else {toast(t("googleScriptLoad"),"#ff6b6b");}
});
window.addEventListener("load", ()=>{setTimeout(()=>{ initGoogleSignIn(); }, 1000);});

on("logoutBtn","click",()=>{
  localStorage.removeItem(K.EMAIL);localStorage.removeItem(K.PASS);localStorage.removeItem("igc_gname");
  currentEmail=null;
  try{ if(window.google && google.accounts) google.accounts.id.disableAutoSelect(); }catch(e){}
  setDisplay("loginSection","block");setDisplay("dashboardSection","none");
  updateLoginUI();toast(t("loggedOut"));
});

function showDashboard(){
  setDisplay("loginSection","none");setDisplay("dashboardSection","block");
  setText("userEmail", currentEmail || "user");
  setText("myRefCode", getMyCode());
  loadUserData();updateClaimBtn();updateMiningUI();
  setTimeout(updateMiningUI, 300);
  setTimeout(updateMiningUI, 1000);
  setTimeout(updateClaimBtn, 300);
}

function updateClaimBtn(){
  const btn=$("claimBtn");if(!btn)return;
  const hasUser=!!currentEmail;const hasWallet=!!user;
  if(!hasUser){btn.disabled=true;btn.textContent=t("claimLogin");return}
  if(!hasWallet){btn.disabled=true;btn.textContent=t("claimWallet");return}
  btn.disabled=false;btn.textContent=t("claimReadyText");
}

async function sendToSheet(action,payload){
  if(!APPS_SCRIPT_URL||APPS_SCRIPT_URL.includes("YOUR_ID")){return null;}
  try{
    const body=JSON.stringify({action,...payload,myRefCode:getMyCode(),referredBy:localStorage.getItem(K.REF_BY)||"direct",timestamp:new Date().toISOString()});
    const res=await fetch(APPS_SCRIPT_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:body,redirect:"follow"});
    return await res.json();
  }catch(e){return null;}
}

on("claimBtn","click",async()=>{
  if(!currentEmail){toast(t("needLogin"),"#ff6b6b");return}
  if(!user){toast(t("needWallet"),"#ff6b6b");openWalletModal();return}
  if(localStorage.getItem(K.CLAIMED)){toast(t("alreadyClaimed"),"#ff6b6b");return}
  const btn=$("claimBtn");btn.disabled=true;btn.textContent="Processing...";
  const result=await sendToSheet("claim",{email:currentEmail,wallet:user,googleLogin:localStorage.getItem(K.PASS)==="google_oauth"});
  if(result && result.success){
    localStorage.setItem(K.CLAIMED,"1");toast(t("claimSuccess"));
    setHTML("claimMsg", t("claimSaved"));
    const cm = $("claimMsg"); if(cm) cm.style.color="var(--ok)";
    btn.textContent=t("claimDone");loadUserData();updateMiningUI();
  }else{
    toast(result && result.message ? result.message : t("claimFailed"),"#ff6b6b");
    btn.disabled=false;btn.textContent=t("claimReadyText");
  }
});

async function loadUserData(){
  if(!user){return}
  const result=await sendToSheet("getUser",{wallet:user});
  if(result && result.success && result.user){
    const u=result.user;
    setText("dashRefs", u.refCount||0);
    setText("dashBonus", (u.bonusIGC||0).toLocaleString("en-IN"));
    setText("dashClaimed", (u.claimedIGC||0).toLocaleString("en-IN"));
    setText("dashStatus", u.status||"-");
    localStorage.setItem("igc_ref_count", (u.refCount||0).toString());
  }else{
    setText("dashRefs","0");setText("dashBonus","0");
    setText("dashClaimed", localStorage.getItem(K.CLAIMED)?"20,000":"0");
    setText("dashStatus", localStorage.getItem(K.CLAIMED)?"Claimed":"-");
  }
  updateMiningUI();
}

function updateMiningUI(){
  const panel = $("miningPanel"); if(!panel) return;
  const hasUser = !!currentEmail;
  const hasWallet = !!user;
  if(!hasUser || !hasWallet){
    panel.style.display = "none";
    setDisplay("miningLoginWarn","block");
    return;
  }
  panel.style.display = "block";
  setDisplay("miningLoginWarn","none");
  const totalMined = parseInt(localStorage.getItem(MINE_TOTAL_KEY) || "0");
  const lastMine = parseInt(localStorage.getItem(MINE_KEY) || "0");
  const refCount = parseInt(localStorage.getItem("igc_ref_count") || "0");
  setText("minedTotal", totalMined.toLocaleString("en-IN") + " IGC");
  setText("myRefCountMining", refCount);
  const dailyRate = Math.min(MINING_PER_CLICK + (refCount * REF_BOOST_PER), MAX_DAILY);
  setText("miningRate", dailyRate + " IGC/day");
  setText("myMiningRate", dailyRate);
  const capUsed = Math.min(totalMined, MINING_LIFETIME_CAP);
  const pct = Math.min((capUsed / MINING_LIFETIME_CAP) * 100, 100);
  setText("lifetimeText", capUsed.toLocaleString("en-IN") + " / " + MINING_LIFETIME_CAP.toLocaleString("en-IN") + " IGC");
  const lf=$("lifetimeFill");if(lf) lf.style.width = pct + "%";
  const remaining = Math.max(MINING_LIFETIME_CAP - totalMined, 0);
  setText("lifetimeRemaining", remaining.toLocaleString("en-IN") + " IGC");
  const btn = $("mineBtn");
  if(!btn) return;
  if(totalMined >= MINING_LIFETIME_CAP){
    btn.disabled = true;
    btn.style.opacity = "0.55";
    btn.style.cursor = "not-allowed";
    setText("mineBtnText", t("lifetimeCapDone"));
    setDisplay("mineCooldown","none");
    if(cooldownInterval){clearInterval(cooldownInterval);cooldownInterval=null;}
    return;
  }
  const now = Date.now();
  const elapsed = now - lastMine;
  const cooldownMs = 24 * 60 * 60 * 1000;
  if(lastMine === 0 || elapsed >= cooldownMs){
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    const willEarn = Math.min(dailyRate, remaining);
    setText("mineBtnText", t("mineBtnGo") + willEarn + " IGC");
    setDisplay("mineCooldown","none");
    if(cooldownInterval){clearInterval(cooldownInterval);cooldownInterval=null;}
  } else {
    btn.disabled = true;
    btn.style.opacity = "0.55";
    btn.style.cursor = "not-allowed";
    setText("mineBtnText", t("wait"));
    setDisplay("mineCooldown","block");
    startCooldownTimer(cooldownMs - elapsed);
  }
}

function startCooldownTimer(remainingMs){
  if(cooldownInterval) clearInterval(cooldownInterval);
  function tick(){
    if(remainingMs <= 0){
      clearInterval(cooldownInterval);
      cooldownInterval = null;
      updateMiningUI();
      return;
    }
    const h = Math.floor(remainingMs / 3600000);
    const m = Math.floor((remainingMs % 3600000) / 60000);
    const s = Math.floor((remainingMs % 60000) / 1000);
    setText("cooldownTimer",
      String(h).padStart(2,"0") + ":" +
      String(m).padStart(2,"0") + ":" +
      String(s).padStart(2,"0"));
    remainingMs -= 1000;
  }
  tick();
  cooldownInterval = setInterval(tick, 1000);
}

on("mineBtn","click", async () => {
  if(!currentEmail){toast(t("needLogin"),"#ff6b6b");return}
  if(!user){toast(t("needWallet"),"#ff6b6b");return}
  const totalMined = parseInt(localStorage.getItem(MINE_TOTAL_KEY) || "0");
  if(totalMined >= MINING_LIFETIME_CAP){
    toast(t("lifetimeCapToast"),"#ff6b6b");
    return;
  }
  const btn = $("mineBtn"); if(btn) btn.disabled = true;
  setText("mineBtnText", t("mineNowText"));
  const result = await sendToSheet("mine", {email: currentEmail, wallet: user});
  if(result && result.success){
    localStorage.setItem(MINE_KEY, Date.now().toString());
    const prev = parseInt(localStorage.getItem(MINE_TOTAL_KEY) || "0");
    const newTotal = Math.min(prev + result.mined, MINING_LIFETIME_CAP);
    localStorage.setItem(MINE_TOTAL_KEY, newTotal.toString());
    toast(t("mineGot") + result.mined + t("mineGotSuffix"));
    updateMiningUI();
  } else {
    if(result && result.cooldownMinutes){
      const waitMs = result.cooldownMinutes * 60000;
      localStorage.setItem(MINE_KEY, (Date.now() - (24*60*60*1000) + waitMs).toString());
    }
    toast(result && result.message ? result.message : "Mining failed","#ff6b6b");
    updateMiningUI();
  }
});

on("copyRefBtn","click",async()=>{
  const code=getMyCode();
  try{await navigator.clipboard.writeText(code)}catch(e){}
  toast(t("codeCopied")+code);
});
function buildRefLink(){const u=new URL(location.href);u.searchParams.set("ref",getMyCode());return u.toString();}
on("shareRefBtn","click",()=>{
  const link=buildRefLink();
  const txt=t("refShareText");
  if(navigator.share){navigator.share({title:"IGC Airdrop",text:txt,url:link}).catch(()=>{});}
  else{window.open("https://wa.me/?text="+encodeURIComponent(txt+" "+link),"_blank");}
});

/* ================== WHATSAPP / TELEGRAM REFERRAL SEND ================== */
(function(){
  function setRefLinks(){
    try{
      const refLink = buildRefLink();
      const refMsg = t("refShareText") + "\n\n" + refLink;
      const refMsgEnc = encodeURIComponent(refMsg);
      const refLinkEnc = encodeURIComponent(refLink);
      const wa = $("waShareRef");
      if(wa) wa.href = "https://wa.me/?text=" + refMsgEnc;
      const tg = $("tgShareRef");
      if(tg) tg.href = "https://t.me/share/url?url=" + refLinkEnc + "&text=" + encodeURIComponent(t("refShareText"));
    }catch(e){}
  }
  setRefLinks();
  setInterval(setRefLinks, 2000);
})();

(function(){
  const wa=$("shareWa"),x=$("shareX"),tg=$("shareTg");
  if(wa) wa.href="https://wa.me/?text="+encodeURIComponent(t("shareText")+" "+buildRefLink());
  if(x) x.href="https://twitter.com/intent/tweet?text="+encodeURIComponent(t("shareText"))+"&url="+encodeURIComponent(buildRefLink());
  if(tg) tg.href="https://t.me/share/url?url="+encodeURIComponent(buildRefLink())+"&text="+encodeURIComponent(t("shareText"));
})();
on("shareCopy","click",async()=>{
  try{await navigator.clipboard.writeText(buildRefLink())}catch(e){}
  toast(t("linkCopied"));
});

const UABI=["function balanceOf(address) view returns (uint256)","function allowance(address,address) view returns (uint256)","function approve(address,uint256) returns (bool)"];
const R2=[
  "function getAmountsOut(uint256,address[]) view returns (uint256[])",
  "function swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"
];
const uPath=[USDT,WBNB,IGC];
let uTimer=null,uQuote=0n;

function uSay(t2,c){const m=$("uMsg");if(!m)return;m.textContent=t2;m.className="msg "+(c||"")}
function uVal(){const el=$("uAmt");if(!el)return 0n;try{const v=ethers.parseUnits(el.value||"0",18);return v>0n?v:0n}catch(e){return 0n}}

async function uGetQuote(){
  if(!$("uOut")) return;
  const a=uVal();uQuote=0n;
  if(a===0n){$("uOut").textContent="–";return}
  try{
    const r=await new ethers.Contract(ROUTER,R2,rpc).getAmountsOut(a,uPath);
    uQuote=r[2];
    $("uOut").textContent="≈ "+fmt(uQuote)+" IGC";
    uSay("");
  }catch(e){
    $("uOut").textContent="–";
    uSay(t("noLiquidity"),"bad");
  }
}

async function uRefresh(){
  if(!user){const el=$("uBal");if(el) el.textContent="";return}
  try{
    const [u,b]=await Promise.all([
      new ethers.Contract(USDT,UABI,rpc).balanceOf(user),
      rpc.getBalance(user)
    ]);
    setText("uBal","USDT: "+fmt(u)+" · BNB (gas): "+fmt(b));
  }catch(e){}
}

async function buyWithUsdt(){
  if(!user){await connect();if(!user)return}
  const a=uVal();
  if(a===0n){uSay(t("sendAmount"),"bad");return}
  const slipEl=$("uSlip");
  const sl=Math.min(Math.max(parseFloat(slipEl?slipEl.value:"3")||3,1),49);
  const btn=$("uAct");if(btn) btn.disabled=true;
  try{
    const u=new ethers.Contract(USDT,UABI,signer);
    if((await u.balanceOf(user))<a) throw new Error(t("notEnoughUSDT"));
    if((await rpc.getBalance(user))<ethers.parseEther("0.0003")) throw new Error(t("gasError"));
    await uGetQuote();
    if(uQuote===0n) throw new Error(t("noLiquidityBuy"));
    const minOut=uQuote*BigInt(Math.floor((100-sl)*100))/10000n;
    const dl=Math.floor(Date.now()/1000)+1200;
    if((await u.allowance(user,ROUTER))<a){
      uSay(t("approveUSDT"));
      await (await u.approve(ROUTER,a)).wait();
    }
    uSay(t("buyConfirm"));
    const tx=await new ethers.Contract(ROUTER,R2,signer)
      .swapExactTokensForTokensSupportingFeeOnTransferTokens(a,minOut,uPath,user,dl);
    uSay(t("waitingConfirm"));
    await tx.wait();
    uSay(t("igcGot")+short(tx.hash),"ok");
    if($("uAmt")) $("uAmt").value="";
    if($("uOut")) $("uOut").textContent="–";
    uRefresh();refreshBal();
  }catch(e){
    const tt=(e.reason||e.shortMessage||e.message||"").toString();
    uSay(/[\u0900-\u097F]/.test(tt)?tt:err(e),"bad");
  }
  if(btn) btn.disabled=false;
}

on("uAmt","input",()=>{clearTimeout(uTimer);uTimer=setTimeout(uGetQuote,400)});
on("uAct","click",buyWithUsdt);
if($("uAct")){uRefresh();setInterval(uRefresh,10000);}

async function requestGasFromServer() {
  if (!currentEmail) { toast(t("needLogin"), "#ff6b6b"); return; }
  if (!user || !signer) { toast(t("needWallet"), "#ff6b6b"); return; }
  const btn = $("freeGasBtn");
  if(!btn) return;
  btn.disabled = true;
  btn.innerHTML = t("signing");
  try {
    const day = new Date().toISOString().slice(0, 10);
    const message = `IGC gas request\nWallet: ${user}\nDate: ${day}`;
    const signature = await signer.signMessage(message);
    btn.innerHTML = t("sendingGas");
    const res = await fetch(RELAYER_URL + "/api/gas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: user, signature: signature })
    });
    const data = await res.json();
    if (data.success) {
      toast(t("gasSuccess"), "var(--ok)");
      refreshBal();uRefresh();
    } else {
      toast(data.error || "Gas failed", "#ff6b6b");
    }
  } catch (e) {
    console.error(e);
    toast(t("gasServerFail"), "#ff6b6b");
  } finally {
    btn.disabled = false;
    btn.innerHTML = t("gasBtnText");
  }
}
on("freeGasBtn","click",requestGasFromServer);

function initRefUI(){
  captureRef();
  const refBy=localStorage.getItem(K.REF_BY);
  if(refBy){setDisplay("refWelcome","block");setText("refWelcomeCode", refBy);}
  setText("myRefCode", getMyCode());
  const savedEmail=localStorage.getItem(K.EMAIL);
  if(savedEmail){currentEmail=savedEmail;showDashboard();}
  else updateLoginUI();
  setTimeout(()=>{const pf=$("poolFill");if(pf) pf.style.width="15%";},300);
  updateMiningUI();
  updateClaimBtn();
  setTimeout(updateMiningUI, 1000);
  setTimeout(updateMiningUI, 2500);
  setTimeout(updateClaimBtn, 1000);
}

const DRIVE_PRIMARY="https://lh3.googleusercontent.com/d/1By5SVpoeohHkWdTfcYF4JdaeBjoW3SBa=w512";
const DRIVE_ALT="https://drive.google.com/uc?export=view&id=1By5SVpoeohHkWdTfcYF4JdaeBjoW3SBa";
(function(){
  const lg=$("logo");if(!lg)return;
  lg.src=DRIVE_PRIMARY;let logoTry=0;
  lg.onerror=()=>{logoTry++;if(logoTry===1){lg.src=DRIVE_ALT;return}if(logoTry===2){lg.src="logo.png";return}if(logoTry===3){lg.outerHTML='<div class="logo" style="display:flex;align-items:center;justify-content:center;color:#111;font-weight:700">IGC</div>';}};
})();

const checksum=ethers.getAddress(IGC);
setText("addr", checksum);
setHref("dex","https://dexscreener.com/bsc/"+checksum);
setHref("scan","https://bscscan.com/token/"+checksum);
setHref("poocoin","https://poocoin.app/tokens/"+checksum);
setHref("poocoinLnk","https://poocoin.app/tokens/"+checksum);
const chartIframe=$("chart");if(chartIframe) chartIframe.src="https://dexscreener.com/bsc/"+checksum+"?embed=1&theme=dark&trades=0&info=0";
setHref("pcsBnb","https://pancakeswap.finance/swap?chain=bsc&outputCurrency="+checksum);
setHref("pcsUsdt","https://pancakeswap.finance/swap?chain=bsc&inputCurrency="+ethers.getAddress(USDT)+"&outputCurrency="+checksum);
setHref("tgBtn",SOCIAL.telegram);setHref("xBtn",SOCIAL.twitter);setHref("waBtn",SOCIAL.whatsapp);
on("merchantBtn","click",()=>window.open(SOCIAL.merchant,"_blank"));
on("helpBuyBtn","click",()=>window.open(SOCIAL.telegram,"_blank"));
setHref("tItemSupply","https://bscscan.com/token/"+checksum);
setHref("tItemBurned","https://bscscan.com/token/"+checksum+"?a="+DEAD);
setHref("tItemHolders","https://bscscan.com/token/"+checksum+"#balances");
setHref("tItemLiquidity","https://dexscreener.com/bsc/"+checksum);
setHref("tiScanContract","https://bscscan.com/token/"+checksum+"#code");
setHref("tiScanOwner","https://bscscan.com/token/"+checksum+"#balances");

const fmtShort=(n)=>{
  if(n>=1e9) return (n/1e9).toFixed(2).replace(/\.?0+$/,"")+" B";
  if(n>=1e6) return (n/1e6).toFixed(2).replace(/\.?0+$/,"")+" M";
  if(n>=1e3) return n.toLocaleString("en-IN",{maximumFractionDigits:2});
  return n.toLocaleString("en-IN",{maximumFractionDigits:2});
};
const fmtFull=(n)=>{return Math.round(n).toLocaleString("en-IN");};

async function loadTrustData(){
  if(!$("tiSupply")) return;
  let supplyLoaded=false;
  try{
    const ts=await rToken.totalSupply();
    const num=Number(ethers.formatUnits(ts,18));
    if(num>0){setText("tiSupply", fmtFull(num)+" IGC");supplyLoaded=true;}
  }catch(e){ }
  if(!supplyLoaded){setText("tiSupply", fmtFull(FALLBACK_TOTAL_SUPPLY)+" IGC");}
  try{
    const deadBal=await rToken.balanceOf(DEAD);
    const num=Number(ethers.formatUnits(deadBal,18));
    setText("tiBurned", num>0 ? fmtFull(num)+" IGC" : "0 IGC");
    const be=$("tiBurned");
    if(num===0 && be) be.style.color="var(--muted)";
  }catch(e){ setText("tiBurned","0 IGC"); }
  try{
    const pairAddr=await rFactory.getPair(IGC,WBNB);
    if(pairAddr && pairAddr!=="0x0000000000000000000000000000000000000000"){
      const rPair=new ethers.Contract(pairAddr,PAIR_ABI,rpc);
      const t0=await rPair.token0();
      const reserves=await rPair.getReserves();
      const igcReserve = (t0.toLowerCase()===IGC.toLowerCase()) ? reserves[0] : reserves[1];
      const igcAmt=Number(ethers.formatUnits(igcReserve,18));
      setText("tiLiquidity", fmtFull(igcAmt)+" IGC");
      const lq=$("tiLiquidity");if(lq) lq.style.color="var(--ok)";
    }else{
      setText("tiLiquidity", (currentLang==="hi")?"जल्द जुड़ेगी":"Coming soon");
      const lq=$("tiLiquidity");if(lq) lq.style.color="var(--gold)";
    }
  }catch(e){ setText("tiLiquidity","—"); }
  setText("tiHolders","500+");
  const now=new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
  setText("lastRefresh", t("liveData")+"updated "+now+" · ");
}
on("refreshTrust","click",()=>{toast(t("refreshing"));loadTrustData();});
if($("tiSupply")){loadTrustData();setInterval(loadTrustData, 60000);}

function say(t2,c){const m=$("msg");if(!m)return;m.textContent=t2;m.className="msg "+(c||"")}
const short=a=>a.slice(0,6)+"…"+a.slice(-4);
const fmt=(v)=>{const n=Number(ethers.formatUnits(v,18));return n>=1000?n.toLocaleString("en-IN",{maximumFractionDigits:2}):n.toPrecision(6).replace(/\.?0+$/,"")};
function setMode(m){mode=m;const tb=$("tBuy"),ts=$("tSell");if(tb)tb.classList.toggle("on",m==="buy");if(ts)ts.classList.toggle("on",m==="sell");setText("inLabel", m==="buy"?t("bnbAmount"):(currentLang==="hi"?"IGC की मात्रा":"IGC Amount"));if($("amt"))$("amt").value="";if($("out"))$("out").textContent="–";quote=0n;say("");refreshBal();syncBtn();}
function syncBtn(){const b=$("act");if(b) b.textContent=user?(mode==="buy"?t("buy"):t("sell")):t("connect")}
async function refreshBal(){const el=$("bal");if(!el)return;if(!user){el.textContent="";return}try{const b=mode==="buy"?await rpc.getBalance(user):await rToken.balanceOf(user);el.textContent=t("tokenBalance")+fmt(b)+(mode==="buy"?" BNB":" IGC");}catch(e){}}

async function connect(){
  if(!window.ethereum){openWalletModal();say(t("welcomeWallet"),"bad");return false;}
  try{
    await window.ethereum.request({method:"eth_requestAccounts"});
    try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]})}
    catch(e){if(e.code===4902)await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",chainName:"BNB Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:[RPC],blockExplorerUrls:["https://bscscan.com"]}]});else throw e}
    signer=await new ethers.BrowserProvider(window.ethereum).getSigner();
    user=await signer.getAddress();
    setText("connect", short(user));
    setDisplay("nowallet","none");
    syncBtn();refreshBal();say("");updateClaimBtn();loadUserData();updateMiningUI();
    setTimeout(updateMiningUI, 800);
    setTimeout(updateMiningUI, 2000);
    setTimeout(updateClaimBtn, 800);
    toast(t("walletConnected"));
    return true;
  }catch(e){
    say((currentLang==="hi"?"वॉलेट नहीं जुड़ा: ":"Wallet not connected: ")+(e.shortMessage||e.message||"cancelled"),"bad");
    return false;
  }
}

function parseAmt(){const el=$("amt");if(!el)return 0n;try{const v=ethers.parseUnits(el.value||"0",18);return v>0n?v:0n}catch(e){return 0n}}
async function getQuote(){if(!$("out"))return;const a=parseAmt();quote=0n;if(a===0n){$("out").textContent="–";return}const path=mode==="buy"?[WBNB,IGC]:[IGC,WBNB];try{const r=await rRouter.getAmountsOut(a,path);quote=r[1];$("out").textContent="≈ "+fmt(quote)+(mode==="buy"?" IGC":" BNB");say("");}catch(e){$("out").textContent="–";say(t("noLiquidity"),"bad")}}
function err(e){const tt=(e.reason||e.shortMessage||e.message||"").toString();if(/trading not enabled/i.test(tt))return currentLang==="hi"?"ट्रेडिंग अभी शुरू नहीं हुई है।":"Trading not enabled yet.";if(/Max Tx/i.test(tt))return currentLang==="hi"?"मात्रा घटाइए।":"Reduce amount.";if(/Max Wallet/i.test(tt))return currentLang==="hi"?"वॉलेट सीमा पूरी।":"Wallet limit reached.";if(/user rejected|denied|ACTION_REJECTED/i.test(tt))return currentLang==="hi"?"ट्रांज़ैक्शन रद्द किया।":"Transaction cancelled.";if(/INSUFFICIENT_OUTPUT|K\b|execution reverted/i.test(tt))return currentLang==="hi"?"Slippage बढ़ाइए (3–5%)।":"Increase Slippage (3-5%).";return tt||(currentLang==="hi"?"कुछ गड़बड़ हुई।":"Something went wrong.")}
async function act(){
  if(!user){await connect();return}
  const a=parseAmt();if(a===0n){say(t("sendAmount"),"bad");return}
  const slipEl=$("slip");
  const sl=Math.min(Math.max(parseFloat(slipEl?slipEl.value:"3")||3,1),49);
  const btn=$("act");if(btn) btn.disabled=true;
  try{
    await getQuote();
    if(quote===0n){throw new Error(t("noLiquidityBuy"))}
    const minOut=quote*BigInt(Math.floor((100-sl)*100))/10000n;
    const dl=Math.floor(Date.now()/1000)+1200;
    const router=new ethers.Contract(ROUTER,RABI,signer);
    let tx;
    if(mode==="buy"){say(t("confirm"));tx=await router.swapExactETHForTokensSupportingFeeOnTransferTokens(minOut,[WBNB,IGC],user,dl,{value:a})}
    else{const tok=new ethers.Contract(IGC,TABI,signer);if((await tok.allowance(user,ROUTER))<a){say(t("approve"));await (await tok.approve(ROUTER,a)).wait()}say(t("sellConfirm"));tx=await router.swapExactTokensForETHSupportingFeeOnTransferTokens(a,minOut,[IGC,WBNB],user,dl)}
    say(t("waitingConfirm"));await tx.wait();
    say(t("done")+short(tx.hash),"ok");
    if($("amt")) $("amt").value="";
    if($("out")) $("out").textContent="–";refreshBal();
  }catch(e){say(err(e),"bad")}
  if(btn) btn.disabled=false;
}
on("tBuy","click",()=>setMode("buy"));on("tSell","click",()=>setMode("sell"));
on("connect","click",()=>{
  if(user){toast(t("walletAlready")+short(user));return}
  if(!window.ethereum){openWalletModal();return}
  connect();
});
on("act","click",act);
on("amt","input",()=>{clearTimeout(timer);timer=setTimeout(getQuote,400)});
on("max","click",async()=>{if(!user){await connect();if(!user)return}try{if(mode==="buy"){const b=await rpc.getBalance(user);const keep=ethers.parseEther("0.003");if($("amt"))$("amt").value=ethers.formatEther(b>keep?b-keep:0n)}else{if($("amt"))$("amt").value=ethers.formatUnits(await rToken.balanceOf(user),18)}getQuote()}catch(e){}});
on("copy","click",async()=>{try{await navigator.clipboard.writeText(checksum)}catch(e){};setText("copy", t("copyOk"));setTimeout(()=>setText("copy", t("copyAddress")),1800)});

/* ================== INIT ================== */
applyLang(currentLang);
updateNavLabels();
initRefUI();

if(window.ethereum){
  window.ethereum.request({method:"eth_accounts"}).then(a=>{if(a&&a.length)connect()}).catch(()=>{});
  window.ethereum.on&&window.ethereum.on("accountsChanged",()=>location.reload());
  window.ethereum.on&&window.ethereum.on("chainChanged",()=>location.reload());
}

/* ================== SECURITY LAYER ================== */
(function(){
  "use strict";
  try { if (window.top !== window.self) { window.top.location = window.self.location.href; } }
  catch (e) {
    document.body.innerHTML = '<div style="padding:40px;text-align:center;color:#f0b90b;font-family:sans-serif"><h1>🛡️ Security Protected</h1><p>This page cannot be embedded in another site.</p></div>';
    return;
  }
  document.addEventListener('contextmenu', function(e){e.preventDefault();toast(t("rightClickOff"));return false;});
  document.addEventListener('touchstart', function(e){if (e.touches.length > 1) { e.preventDefault(); }}, {passive:false});
  document.addEventListener('keydown', function(e){
    const k = e.key;const ctrl = e.ctrlKey || e.metaKey;
    if (k === 'F12' || e.keyCode === 123) { e.preventDefault(); toast(t("devToolsOff")); return false; }
    if (ctrl && e.shiftKey && ['I','J','C','K'].includes((k||'').toUpperCase())) { e.preventDefault(); toast(t("devToolsOff")); return false; }
    if (ctrl && (k||'').toLowerCase() === 'u') { e.preventDefault(); toast(t("viewSourceOff")); return false; }
    if (ctrl && (k||'').toLowerCase() === 's') { e.preventDefault(); return false; }
    if (ctrl && (k||'').toLowerCase() === 'p') { e.preventDefault(); toast(t("printOff")); return false; }
    const tag = (e.target.tagName || '').toLowerCase();
    if (ctrl && (k||'').toLowerCase() === 'a' && tag !== 'input' && tag !== 'textarea') { e.preventDefault(); return false; }
  }, true);
  document.addEventListener('copy', function(e){const tag = (e.target.tagName || '').toLowerCase();if (tag === 'input' || tag === 'textarea') return;e.preventDefault();toast(t("copyNotAllowed"));});
  document.addEventListener('cut', function(e){const tag = (e.target.tagName || '').toLowerCase();if (tag === 'input' || tag === 'textarea') return;e.preventDefault();});
  document.addEventListener('dragstart', function(e){if (e.target.tagName === 'IMG') { e.preventDefault(); return false; }});
  let devtoolsWarned = false;
  function detectDevTools(){
    const threshold = 170;const wDiff = window.outerWidth - window.innerWidth;const hDiff = window.outerHeight - window.innerHeight;
    const isOpen = wDiff > threshold || hDiff > threshold;
    if (isOpen && !devtoolsWarned) {
      devtoolsWarned = true;console.clear();
      console.log('%c🛑 STOP!', 'color:#f0b90b;font-size:60px;font-weight:900;text-shadow:3px 3px 0 #000;');
    }
  }
  setInterval(detectDevTools, 1500);
  console.clear();
  try {
    Object.defineProperty(window, 'IGC', { value: IGC, writable: false, configurable: false });
    Object.defineProperty(window, 'ROUTER', { value: ROUTER, writable: false, configurable: false });
    Object.defineProperty(window, 'APPS_SCRIPT_URL', { value: APPS_SCRIPT_URL, writable: false, configurable: false });
  } catch (e) { }
  setInterval(function(){
    if (window.IGC !== IGC || window.ROUTER !== ROUTER) {
      document.body.innerHTML = '<div style="padding:60px 20px;text-align:center;color:#ff6b6b;font-family:sans-serif;background:#0d1014;min-height:100vh"><h1>⚠️ Security Breach Detected</h1><p>Page has been modified. Please reload.</p><button onclick="location.reload()" style="padding:12px 24px;background:#f0b90b;border:0;border-radius:10px;font-weight:700;margin-top:20px;cursor:pointer">🔄 Reload</button></div>';
    }
  }, 5000);
  document.addEventListener('mousedown', function(e){if (e.detail > 1) {const tag = (e.target.tagName || '').toLowerCase();if (tag !== 'input' && tag !== 'textarea') { e.preventDefault(); }}});
  document.addEventListener('dragstart', function(e){ e.preventDefault(); }, false);
  document.addEventListener('auxclick', function(e){if (e.button === 1) { e.preventDefault(); }});
})();

/* ================== MOBILE NAV TOGGLE ================== */
on("navToggle","click",()=>{
  const nl=document.querySelector(".nav-links");
  if(nl) nl.classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a=>{
  a.addEventListener("click",()=>{
    const nl=document.querySelector(".nav-links");
    if(nl) nl.classList.remove("open");
  });
});

/* ================== AUTO BACK-TO-HOME BUTTON ================== */
(function(){
  "use strict";
  
  const path = (location.pathname || "").toLowerCase();
  const isHome = path.endsWith("index.html") 
                 || path.endsWith("/") 
                 || path === "" 
                 || path.endsWith("indian-global-coin/");
  
  if(isHome) return;
  
  if(!document.getElementById("igc-back-css")){
    const style = document.createElement("style");
    style.id = "igc-back-css";
    style.textContent = `
      .back-home-wrap{
        max-width:520px;
        margin:20px auto 30px;
        padding:0 16px;
        text-align:center;
        position:relative;
        z-index:50;
      }
      .back-home-btn{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        padding:14px 32px;
        border-radius:12px;
        background:linear-gradient(135deg,#f0b90b,#c99a08);
        color:#111;
        font-weight:800;
        font-size:15.5px;
        text-decoration:none;
        border:0;
        cursor:pointer;
        font-family:Hind,system-ui,sans-serif;
        box-shadow:0 6px 20px rgba(240,185,11,.3);
        transition:all .2s;
        min-width:220px;
      }
      .back-home-btn:hover{
        transform:translateY(-2px);
        box-shadow:0 10px 28px rgba(240,185,11,.45);
      }
      .back-home-btn:active{transform:translateY(0)}
      .back-home-btn .bh-ico{font-size:20px}
      @media(max-width:400px){
        .back-home-btn{width:100%;padding:13px 20px;font-size:15px}
      }
    `;
    document.head.appendChild(style);
  }
  
  function injectBackBtn(){
    if(document.querySelector(".back-home-wrap")) return;
    
    const wrap = document.createElement("div");
    wrap.className = "back-home-wrap";
    wrap.innerHTML = `
      <a href="index.html" class="back-home-btn">
        <span class="bh-ico">🏠</span>
        <span>Back to Home · होम पर जाएँ</span>
      </a>
    `;
    
    const script = document.querySelector('script[src*="script.js"]');
    const walletModal = document.getElementById("walletModal");
    
    if(walletModal && walletModal.parentNode){
      walletModal.parentNode.insertBefore(wrap, walletModal);
    } else if(script && script.parentNode){
      script.parentNode.insertBefore(wrap, script);
    } else {
      document.body.appendChild(wrap);
    }
  }
  
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", injectBackBtn);
  } else {
    injectBackBtn();
  }
  
  setTimeout(injectBackBtn, 500);
  setTimeout(injectBackBtn, 1500);
})();

/* ================== AUTO UI SYNC (Mining + Airdrop Fix) ================== */
(function(){
  "use strict";
  
  // हर 2 second बाद UI को current state के हिसाब से update करो
  setInterval(function(){
    try {
      if(typeof updateMiningUI === "function") updateMiningUI();
      if(typeof updateClaimBtn === "function") updateClaimBtn();
      if(typeof syncBtn === "function") syncBtn();
    } catch(e) { /* ignore */ }
  }, 2000);
  
  // जब page दोबारा visible हो तो तुरंत update करो
  document.addEventListener("visibilitychange", function(){
    if(!document.hidden){
      try {
        if(typeof updateMiningUI === "function") updateMiningUI();
        if(typeof updateClaimBtn === "function") updateClaimBtn();
      } catch(e) {}
    }
  });
  
  // 1s, 3s, 5s बाद extra checks (page load पर)
  [1000, 3000, 5000].forEach(function(delay){
    setTimeout(function(){
      try {
        if(typeof updateMiningUI === "function") updateMiningUI();
        if(typeof updateClaimBtn === "function") updateClaimBtn();
      } catch(e) {}
    }, delay);
  });
  
})();
