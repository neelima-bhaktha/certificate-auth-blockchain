const express = require("express");
const router = express.Router();

const {
  issue,
  verify,
} = require("../controllers/certificateController");

router.post("/issue", issue);
router.get("/verify/:id", verify);

module.exports = router;