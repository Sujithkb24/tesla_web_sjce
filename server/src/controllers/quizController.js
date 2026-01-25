const QuizRegistration = require('../models/QuizRegistration');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

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

    // Send confirmation email
    try {
      console.log('📧 Attempting to send email to:', savedRegistration.email);
      const emailResult = await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: savedRegistration.email,
        subject: '🎉 Registration Confirmed - Tesla SJCE Monthly Quiz',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000; color: #fff; padding: 20px; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #c9a154; margin: 0; font-size: 28px;">Tesla SJCE</h1>
              <p style="color: #c9a154; margin: 5px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Department of Electrical and Electronics Engineering</p>
            </div>
            
            <div style="background-color: #111; padding: 20px; border-radius: 8px; border: 1px solid #c9a154; margin-bottom: 20px;">
              <h2 style="color: #c9a154; margin: 0 0 15px 0; font-size: 24px;">🎉 Registration Confirmed!</h2>
              <p style="margin: 10px 0; font-size: 16px;">Hi <strong>${savedRegistration.name}</strong>,</p>
              <p style="margin: 10px 0; line-height: 1.6;">Thank you for registering for our <strong>Monthly Recurring Quiz</strong> on <strong>Emerging Technologies in EV's</strong>!</p>
              
              <div style="background-color: #222; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #c9a154; margin: 0 0 10px 0; font-size: 18px;">Quiz Details:</h3>
                <p style="margin: 5px 0;"><strong>Date:</strong> 28th JAN, 2026</p>
                <p style="margin: 5px 0;"><strong>Time:</strong> 7:00 PM</p>
                <p style="margin: 5px 0;"><strong>Mode:</strong> Online (Slido)</p>
                <p style="margin: 5px 0;"><strong>USN:</strong> ${savedRegistration.usn}</p>
              </div>
              
              <p style="margin: 20px 0; line-height: 1.6;">Join our WhatsApp group for updates and important announcements:</p>
              <a href="https://chat.whatsapp.com/L78MTLXlmiDGy3Ir83fPeH" style="display: inline-block; background-color: #c9a154; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 0;">Join WhatsApp Group</a>
              
              <p style="margin: 20px 0 0 0; line-height: 1.6; font-size: 14px; color: #ccc;">E-certificates will be provided to participants scoring 50% and above.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="margin: 0; font-size: 12px; color: #666;">Best regards,<br>Tesla SJCE Team</p>
            </div>
          </div>
        `,
      });
      console.log('📧 Confirmation email sent successfully to:', savedRegistration.email, 'Result:', emailResult);
    } catch (emailError) {
      console.error('❌ Failed to send confirmation email:', emailError.message, emailError);
      // Don't fail the registration if email fails
    }

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
