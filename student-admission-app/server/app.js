const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Configure CORS explicitly
app.use(cors({
  origin: ['https://student-admission-app-2-0.onrender.com', 'http://localhost:5173'], // Allow frontend and local dev
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
  credentials: false, // Set to true if using cookies/auth (optional)
}));

app.use(express.json());
app.use('/api', studentRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
