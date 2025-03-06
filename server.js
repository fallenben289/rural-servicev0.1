require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const NOCO_DB_URL = process.env.NOCO_DB_URL;
const NOCO_DB_API_KEY = process.env.NOCO_DB_API_KEY;

// API Route to handle email subscription
app.post("/subscribe", async (req, res) => {
    const { email, name } = req.body;

    try {
        const response = await axios.post(NOCO_DB_URL, 
            { email, name }, 
            {
                headers: {
                    "xc-token": NOCO_DB_API_KEY  // ✅ Correct header
                }
            }
        );

        res.status(200).json({ message: "Subscription successful!", data: response.data });
    } catch (error) {
        console.error("NocoDB Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Error subscribing" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
