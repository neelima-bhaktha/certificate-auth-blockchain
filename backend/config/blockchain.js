require("dotenv").config();
const { Web3 } = require("web3");

const contractABI = require("./CertificateRegistry.json");

const web3 = new Web3(process.env.RPC_URL);

// Get first Ganache account for transactions
let account;

const init = async () => {
  const accounts = await web3.eth.getAccounts();
  account = accounts[0];
};

const contract = new web3.eth.Contract(
  contractABI.abi,
  process.env.CONTRACT_ADDRESS
);

module.exports = {
  web3,
  contract,
  init,
  getAccount: () => account
};