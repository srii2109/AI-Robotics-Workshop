import { validationResult } from 'express-validator'
import Enquiry from '../models/Enquiry.js'

export const submitEnquiry = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map(err => err.msg)
      })
    }

    const { name, email, phone } = req.body

    try {
      const existingEnquiry = await Enquiry.findOne({ email })
      if (existingEnquiry) {
        return res.status(400).json({
          success: false,
          message: 'An enquiry with this email already exists'
        })
      }
    } catch (dbError) {
      console.log('⚠️ Database check skipped:', dbError.message)
    }

    const enquiry = new Enquiry({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      type: 'enquiry' // Add type to distinguish
    })

    try {
      await enquiry.save()
      
      res.status(201).json({
        success: true,
        message: '🎉 Enquiry submitted successfully!',
        data: {
          id: enquiry._id,
          name: enquiry.name,
          email: enquiry.email
        }
      })
    } catch (saveError) {
      console.log('⚠️ Database save failed:', saveError.message)
      res.status(201).json({
        success: true,
        message: '✅ Enquiry received (demo mode - data not saved)',
        data: {
          name,
          email,
          phone
        }
      })
    }
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please try again.'
    })
  }
}

// New: Submit contact form message
export const submitContact = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map(err => err.msg)
      })
    }

    const { name, email, message, phone } = req.body

    // Create contact enquiry
    const contact = new Enquiry({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone || 'Not provided',
      message: message.trim(),
      type: 'contact' // Differentiate from workshop enquiry
    })

    try {
      await contact.save()
      
      res.status(201).json({
        success: true,
        message: '📩 Message sent successfully! We\'ll get back to you soon.',
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email
        }
      })
    } catch (saveError) {
      console.log('⚠️ Database save failed:', saveError.message)
      res.status(201).json({
        success: true,
        message: '✅ Message received (demo mode - data not saved)',
        data: {
          name,
          email,
          message
        }
      })
    }
  } catch (error) {
    console.error('Error submitting contact:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    })
  }
}