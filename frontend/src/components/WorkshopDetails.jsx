import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, Calendar, Globe, CreditCard, Clock,
  Sparkles, Info 
} from 'lucide-react'

const details = [
  { 
    icon: Users, 
    label: 'Age Group', 
    value: '8–14 Years',
    description: 'Perfect for young innovators',
    color: 'from-blue-500 to-indigo-500'
  },
  { 
    icon: Calendar, 
    label: 'Duration', 
    value: '4 Weeks',
    description: '16 sessions of immersive learning',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Globe, 
    label: 'Mode', 
    value: 'Online',
    description: 'Learn from anywhere, anytime',
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    icon: CreditCard, 
    label: 'Fee', 
    value: '₹2,999',
    description: 'Inclusive of all materials',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: Clock, 
    label: 'Start Date', 
    value: '15 July 2026',
    description: 'Limited seats available',
    color: 'from-orange-500 to-red-500'
  },
]

const WorkshopDetails = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="details" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Workshop <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Everything you need to know about this transformative learning experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card rounded-2xl p-5 sm:p-6 text-center group gradient-border relative cursor-pointer"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color}/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300`}>
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.label}</p>
              <p className="text-white font-bold text-base sm:text-lg mb-1">{item.value}</p>
              <p className="text-gray-500 text-xs">{item.description}</p>
              
              {/* Interactive tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8
                }}
                className="absolute -top-2 -right-2"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Info size={12} className="text-indigo-400" />
                </div>
              </motion.div>
              
              <Sparkles className="absolute top-2 sm:top-3 right-2 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 text-indigo-400/20 group-hover:text-indigo-400/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopDetails