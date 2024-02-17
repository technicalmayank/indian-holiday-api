// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const holidayRoutes = require('./routes/holidayRoutes');

// Initialize Express app
const app = express();

// Define middleware to parse JSON bodies
app.use(express.json());

// Middleware to validate API key
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key']; // Assuming API key is passed in the 'x-api-key' header
  const validApiKey = 'baf0b635ed05bdbf28929f41a909859df15c8342549e4d8a1a091a10714870e0'; // Replace 'your_static_api_key' with your actual API key
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next(); // Move to the next middleware
};

// Apply API key middleware to all routes
app.use(apiKeyMiddleware);

// Connect to MongoDB database
mongoose.connect('mongodb+srv://gurjeet:eupL6VitHuzsaItm@cluster0.vrfntvb.mongodb.net/grid21', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/api/holidays', holidayRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
