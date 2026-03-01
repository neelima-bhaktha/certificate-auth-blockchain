const {
  issueCertificate,
  verifyCertificate,
} = require("../services/certificateService");

// POST /issue
const issue = async (req, res) => {
  try {
    const { certificateId, certificateHash } = req.body;

    if (!certificateId || !certificateHash) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const receipt = await issueCertificate(certificateId, certificateHash);

    res.status(200).json({
      message: "Certificate issued successfully",
      transactionHash: receipt.transactionHash,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET /verify/:id
const verify = async (req, res) => {
  try {
    const certificateId = req.params.id;

    const hash = await verifyCertificate(certificateId);

    res.status(200).json({
      certificateId,
      storedHash: hash,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  issue,
  verify,
};