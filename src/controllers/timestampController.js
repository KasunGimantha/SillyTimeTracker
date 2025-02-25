const fs = require("fs");
const path = require("path");
const { formatTime } = require("../utils/timeFormatter");

const TIMESTAMP_FILE = path.join(__dirname, "../../timestamp.json");

function loadTimestamp() {
    if (fs.existsSync(TIMESTAMP_FILE)) {
        return JSON.parse(fs.readFileSync(TIMESTAMP_FILE)).timestamp;
    }
    return null;
}

function saveTimestampToFile(timestamp) {
    fs.writeFileSync(TIMESTAMP_FILE, JSON.stringify({ timestamp }));
}

exports.getTimestamp = (req, res) => {
    const lastTimestamp = loadTimestamp();
    res.json({ timestamp: lastTimestamp });
};

exports.saveTimestamp = (req, res) => {
    const timestamp = Date.now();
    saveTimestampToFile(timestamp);
    res.json({ message: "Timestamp saved", timestamp });
};

exports.timeSinceLastSession = (req, res) => {
    const lastTimestamp = loadTimestamp();
    if (!lastTimestamp) {
        return res.json({ message: "No previous session detected" });
    }

    const elapsedTime = Date.now() - lastTimestamp;
    res.json({ message: "Time since last session", elapsedTime: formatTime(elapsedTime) });
};
