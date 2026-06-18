import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'Do children need prior coding experience?',
    answer: 'No, prior coding experience is not required. This workshop is designed for beginners and will cover everything from the basics. Our expert mentors will guide students through every step of the learning journey.',
    category: 'Prerequisites'
  },
  {
    question: 'Are sessions recorded?',
    answer: 'Yes, all live sessions are recorded and made available to participants within 24 hours. Students can review the recordings anytime to reinforce their learning and catch up on missed sessions.',
    category: 'Schedule'
  },
  {
    question: 'What software is required?',
    answer: 'Students will need a computer with internet access and a web browser. All required software and tools will be provided free of cost during the first session. We\'ll guide you through the complete setup process.',
    category: 'Technical'
  },
  {
    question: 'Will there be a certificate?',
    answer: 'Yes, every participant who completes the workshop will receive a certificate of completion from Kidrove, which can be a valuable addition to their portfolio.',
    category: 'Certification'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 border border-white/5">
            <HelpCircle size={14} sm:size={16} className="text-indigo-400" />
            <span className="text-xs sm:text-sm text-indigo-300 font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5 hidden sm:block">
                    {faq.category}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg text-white font-semibold group-hover:text-indigo-300 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                  </div>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 mb-3 sm:mb-4" />
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ