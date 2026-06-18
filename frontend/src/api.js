import axios from 'axios'

const API_URL = '/api'

export const submitEnquiry = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/enquiry`, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    })
    return response.data
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message || 
                     error.response.data.errors?.[0] || 
                     'Something went wrong'
      throw new Error(message)
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.')
    } else {
      throw new Error('An unexpected error occurred.')
    }
  }
}

// Optional: Submit contact form message
export const submitContactMessage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    })
    return response.data
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message || 
                     error.response.data.errors?.[0] || 
                     'Something went wrong'
      throw new Error(message)
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.')
    } else {
      throw new Error('An unexpected error occurred.')
    }
  }
}