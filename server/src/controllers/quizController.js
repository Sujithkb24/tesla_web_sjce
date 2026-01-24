const QuizRegistration = require('../models/QuizRegistration');

exports.registerQuizParticipant = async (req, res, next) => {
  try {
    const {
      name, email, contactNumber, usn, branch, year, attendedBefore
    } = req.body;

    console.log('📝 Quiz Registration Data:', req.body);

    // Validation
    if (!name?.trim() || !email?.trim() || !contactNumber?.trim() || 
        !usn?.trim() || !branch || year === undefined || attendedBefore === undefined) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(contactNumber.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Phone number must be 10 digits'
      });
    }

    // Check duplicate USN
    const existingUSN = await QuizRegistration.findOne({ 
      usn: usn.toUpperCase().trim() 
    });
    if (existingUSN) {
      return res.status(400).json({
        success: false,
        message: 'This USN is already registered for the quiz'
      });
    }

    // Create registration
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
    console.log('✅ Quiz Registration Success:', savedRegistration._id);

    res.status(201).json({
      success: true,
      message: 'Successfully registered for the quiz!',
      data: {
        id: savedRegistration._id,
        name: savedRegistration.name,
        usn: savedRegistration.usn
      }
    });

  } catch (error) {
    console.error('❌ Quiz Registration Error:', error);
    next(error); // Pass to global error handler
  }
};

exports.getAllRegistrations = async (req, res, next) => {
  try {
    const registrations = await QuizRegistration.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('Get registrations error:', error);
    next(error);
  }
};

exports.getParticipantById = async (req, res, next) => {
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
    console.error('Get participant error:', error);
    next(error);
  }
};

exports.checkUSN = async (req, res, next) => {
  try {
    const { usn } = req.params;
    const existing = await QuizRegistration.findOne({ 
      usn: usn.toUpperCase().trim() 
    });

    res.status(200).json({
      success: true,
      exists: !!existing,
      message: existing ? 'USN already registered' : 'USN available'
    });
  } catch (error) {
    console.error('Check USN error:', error);
    next(error);
  }
};
