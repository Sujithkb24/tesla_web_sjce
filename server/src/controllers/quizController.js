const QuizRegistration = require('../models/QuizRegistration');

exports.registerQuizParticipant = async (req, res) => {
  try {
    const {
      name,
      email,
      contactNumber,
      usn,
      branch,
      year,
      attendedBefore
    } = req.body;

    console.log('Quiz Registration Data:', req.body);

    // Manual validation
    if (!name?.trim() || !email?.trim() || !contactNumber?.trim() || 
        !usn?.trim() || !branch || year === undefined || attendedBefore === undefined) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check if USN already exists
    const existingUSN = await QuizRegistration.findOne({ usn: usn.toUpperCase().trim() });
    if (existingUSN) {
      return res.status(400).json({
        success: false,
        message: 'This USN is already registered for the quiz'
      });
    }

    // Create new registration
    const newRegistration = new QuizRegistration({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      contactNumber: contactNumber.trim(),
      usn: usn.toUpperCase().trim(),
      branch,
      year: parseInt(year),
      attendedBefore: Boolean(attendedBefore)
    });

    const savedRegistration = await newRegistration.save();

    console.log('Quiz Registration Success:', savedRegistration);

    res.status(201).json({
      success: true,
      message: 'Successfully registered for the quiz!',
      data: savedRegistration
    });

  } catch (error) {
    console.error('Quiz Registration Error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map(err => err.message)
        .join(', ');
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'This USN is already registered'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await QuizRegistration.find()
      .sort({ createdAt: -1 })
      .select('-__v'); // Hide version field

    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('Get All Registrations Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching registrations'
    });
  }
};

exports.getParticipantById = async (req, res) => {
  try {
    const { id } = req.params;
    const participant = await QuizRegistration.findById(id);

    if (!participant) {
      return res.status(404).json({
        success: false,
        message: 'Participant not found'
      });
    }

    res.status(200).json({
      success: true,
      data: participant
    });
  } catch (error) {
    console.error('Get Participant Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching participant'
    });
  }
};

exports.checkUSN = async (req, res) => {
  try {
    const { usn } = req.params;
    const existing = await QuizRegistration.findOne({ usn: usn.toUpperCase() });

    res.status(200).json({
      success: true,
      exists: !!existing,
      message: existing ? 'USN already registered' : 'USN available'
    });
  } catch (error) {
    console.error('Check USN Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error checking USN'
    });
  }
};
