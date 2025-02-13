const express = require("express");
const cors = require("cors"); // Import CORS

const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Middleware to parse JSON requests

app.post("/api", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required!" });
    }

    res.json({
        message: "Data received successfully!",
        receivedData: { name, email }
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
