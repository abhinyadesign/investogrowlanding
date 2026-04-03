import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[+]?[\d\s\-()]{7,15}$/, 'Please provide a valid phone number'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
    },
    interest: {
      type: String,
      required: [true, 'Interest is required'],
      enum: ['Office Space', 'Retail Shop', 'Restaurant Space', 'Investment', 'Other'],
    },
    budget: {
      type: String,
      required: [true, 'Budget is required'],
      enum: [
        'Below ₹50 Lakh',
        '₹50L – ₹1 Crore',
        '₹1 Crore – ₹2 Crore',
        '₹2 Crore – ₹5 Crore',
        'Above ₹5 Crore',
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in hot-reload environments
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;
