const express = require('express');
const mongoose = require('mongoose');
const corsAnywhere = require('cors-anywhere');
const holidayRoutes = require('./routes/holidayRoutes');

const app = express();

app.use(express.json());

// Setup CORS Anywhere server
const host = '0.0.0.0'; // Listen on all network interfaces
const port = 8080; // Port number for the proxy server

const server = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
});
server.listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = 'baf0b635ed05bdbf28929f41a909859df15c8342549e4d8a1a091a10714870e0';
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

app.use(apiKeyMiddleware);

mongoose.connect('mongodb+srv://gurjeet:eupL6VitHuzsaItm@cluster0.vrfntvb.mongodb.net/grid21', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/holidays', holidayRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
