const express = require("express");
const router = express.Router();
const { getTimestamp, saveTimestamp, timeSinceLastSession } = require("../controllers/timestampController");

router.get("/get-timestamp", getTimestamp);
router.post("/save-timestamp", saveTimestamp);
router.get("/time-since-last-session", timeSinceLastSession);

module.exports = router;
