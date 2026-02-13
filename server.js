const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Placeholder for Pix data
let pixData = [];

// Route to manage Pix data
app.get('/pix', (req, res) => {
    res.json(pixData);
});

app.post('/pix', (req, res) => {
    const pix = req.body;
    pixData.push(pix);
    res.status(201).json(pix);
});

// Mock token generation
app.get('/generate-token', (req, res) => {
    const token = Math.random().toString(36).substring(2, 15);
    res.json({ token });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});