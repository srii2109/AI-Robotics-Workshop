import express from 'express'
import { body } from 'express-validator'
import { submitEnquiry, submitContact } from '../controllers/enquiryController.js'

const router = express.Router()

// Validation rules for enquiry
const validateEnquiry = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long')
    .trim()
    .escape(),
  
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail()
    .trim(),
  
  body('phone')
    .notEmpty().withMessage('Phone number is required')
    .isLength({ min: 10, max: 10 }).withMessage('Phone number must be exactly 10 digits')
    .matches(/^[0-9]+$/).withMessage('Phone number must contain only digits')
    .trim()
]

// Validation rules for contact form
const validateContact = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long')
    .trim()
    .escape(),
  
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail()
    .trim(),
  
  body('message')
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
    .trim()
    .escape()
]

// Routes
router.post('/enquiry', validateEnquiry, submitEnquiry)
router.post('/contact', validateContact, submitContact)

// GET route for testing
router.get('/enquiry', (req, res) => {
  res.json({
    success: true,
    message: 'API is working! Use POST to submit enquiries.'
  })
})

export default router