const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// POST: Register for quiz
router.post('/register', quizController.registerQuizParticipant);

// GET: Get all registrations
router.get('/', quizController.getAllRegistrations);

// GET: Get participant by ID
router.get('/:id', quizController.getParticipantById);

// GET: Check if USN already registered
router.get('/check-usn/:usn', quizController.checkUSN);

module.exports = router;
