const mongoose = require('mongoose');

const quizRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ]
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
      match: [/^[0-9]{10}$/, 'Phone number must be exactly 10 digits']
    },
    usn: {
      type: String,
      required: [true, 'USN is required'],
      trim: true,
      uppercase: true,
      unique: true
    },
    branch: {
      type: String,
      required: [true, 'Branch is required'],
      enum: {
        values: ['CSE', 'ISE', 'CSBS', 'ECE', 'EIE', 'IP', 'MECH', 'CIVIL', 'EEE','Other'],
        message: 'Branch must be one of the supported options'
      }
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      enum: [1, 2, 3, 4]
    },
    attendedBefore: {
      type: Boolean,
      required: [true, 'Please answer the question'],
      default: false
    },
    submittedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const QuizRegistration = mongoose.model('QuizRegistration', quizRegistrationSchema);

module.exports = QuizRegistration;
