const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // Enables `req.body`
const PORT = 5000;

// Import the router files
const userRoutes = require('./routes/userRoutes.js');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
