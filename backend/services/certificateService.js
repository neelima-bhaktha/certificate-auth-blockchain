const { contract, getAccount } = require("../config/blockchain");

// Issue certificate on blockchain
const issueCertificate = async (certificateId, certificateHash) => {
  const account = getAccount();

  const receipt = await contract.methods
    .issueCertificate(certificateId, certificateHash)
    .send({ from: account });

  return receipt;
};

// Verify certificate from blockchain
const verifyCertificate = async (certificateId) => {
  const hash = await contract.methods
    .verifyCertificate(certificateId)
    .call();

  return hash;
};

module.exports = {
  issueCertificate,
  verifyCertificate,
};