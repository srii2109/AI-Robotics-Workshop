import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, Mail, Phone, Loader2, CheckCircle, 
  Send, Rocket, Sparkles, Shield 
} from 'lucide-react'
import { submitEnquiry } from '../api'

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError('')
    try {
      const response = await submitEnquiry(data)
      setSuccess(true)
      reset()
      setTimeout(() => setSuccess(false), 6000)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="registration" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 gradient-border relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-purple-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1 border border-white/5 mb-3 sm:mb-4">
                <Rocket size={12} sm:size={14} className="text-cyan-400" />
                <span className="text-xs sm:text-sm text-indigo-300 font-medium">Limited Seats</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Enroll <span className="text-gradient">Now</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Secure your spot in the AI & Robotics Summer Workshop
              </p>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} sm:size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold text-sm sm:text-base">Successfully Enrolled!</p>
                      <p className="text-green-400/70 text-xs sm:text-sm">We'll contact you soon with details.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/20"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={16} sm:size={18} />
                  <input
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs sm:text-sm text-red-400"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={16} sm:size={18} />
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 text-sm sm:text-base"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs sm:text-sm text-red-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={16} sm:size={18} />
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                    className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 text-sm sm:text-base"
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs sm:text-sm text-red-400"
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-300 animate-gradient rounded-xl font-semibold text-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 size={16} sm:size={20} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} sm:size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Enroll Now
                      <Sparkles size={14} sm:size={16} className="group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-300 animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                <Shield size={12} sm:size={14} className="text-indigo-400" />
                <span>Your information is secure and private</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationForm