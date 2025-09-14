require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const leadRoutes = require('./routes/LeadRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', leadRoutes);

// Catch-all 404
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route not found' });
});

app.listen(6006, () => console.log('App Listening on Port 6006'));
