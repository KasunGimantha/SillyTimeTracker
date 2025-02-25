const express = require("express");
const cors = require("cors");

const timestampRoutes = require("./src/routes/timestampRoutes");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.json());
app.use(cors());

app.use("/api", timestampRoutes);

app.listen(PORT, () => console.log(`SillyTavern Session Tracker API running on port ${PORT}`));
