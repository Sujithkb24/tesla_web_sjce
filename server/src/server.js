require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// ✅ CORRECT IMPORT
const quizRoutes = require('./routes/quizRoutes');

const app = express();

// Middleware
app.use(cors({
    origin: "*", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// ✅ Database connection
connectDB();

// ✅ MOUNT ROUTES PROPERLY
app.use('/api/quiz', quizRoutes); // ✅ quizRoutes object

// Test route to verify server works
app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'Server is running!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}`);
  console.log(`🔗 Quiz API: http://localhost:${PORT}/api/quiz/register`);
  console.log(`🧪 Test: http://localhost:${PORT}/api/test`);
});
