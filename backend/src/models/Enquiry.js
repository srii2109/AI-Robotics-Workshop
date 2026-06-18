import mongoose from 'mongoose'

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    trim: true,
    default: 'Not provided'
  },
  message: {
    type: String,
    trim: true,
    default: ''
  },
  type: {
    type: String,
    enum: ['enquiry', 'contact'],
    default: 'enquiry'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

enquirySchema.index({ email: 1 })
enquirySchema.index({ createdAt: -1 })
enquirySchema.index({ type: 1 })

export default mongoose.model('Enquiry', enquirySchema)