import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  Mail, Phone, MapPin, Send, Clock, 
  Loader2, CheckCircle, Sparkles,
  Twitter, Linkedin, Youtube, Github
} from 'lucide-react'
import { submitEnquiry } from '../api'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError('')
    try {
      const response = await submitEnquiry({
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided'
      })
      
      setSuccess(true)
      reset()
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.25 + 0.05
  }))

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@kidrove.com', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India', color: 'from-amber-500 to-orange-500' },
    { icon: Clock, label: 'Working Hours', value: 'Mon-Fri: 9:00 AM - 6:00 PM', color: 'from-emerald-500 to-teal-500' },
  ]

  return (
    <div className="pt-20 min-h-screen overflow-x-hidden">
      {/* Hero Section with Particles */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-indigo-400"
              style={{
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 border border-white/5"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} sm:size={16} className="text-cyan-400" />
              </motion.div>
              <span className="text-xs sm:text-sm text-indigo-300 font-medium">Contact Us</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Have questions? We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                We're here to help and answer any questions you might have.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon size={18} sm:size={20} className="text-indigo-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{item.label}</h4>
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-white font-semibold text-sm mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Twitter, Linkedin, Youtube, Github].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
                    >
                      <Icon size={18} className="text-gray-400 hover:text-indigo-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 sm:p-8 gradient-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>
              
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Message Sent Successfully!</p>
                      <p className="text-green-400/70 text-xs">We'll get back to you soon.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    type="text"
                    className="w-full px-4 py-2.5 sm:py-3 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-2.5 sm:py-3 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    {...register('phone', {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                    type="tel"
                    className="w-full px-4 py-2.5 sm:py-3 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 text-sm sm:text-base"
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    rows="4"
                    className="w-full px-4 py-2.5 sm:py-3 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 resize-none text-sm sm:text-base"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} sm:size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} sm:size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-xs mt-3">
                  We'll never share your information with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact