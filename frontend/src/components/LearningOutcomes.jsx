import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, Bot, Code, Lightbulb, Target,
  Sparkles, CheckCircle, ArrowRight 
} from 'lucide-react'

const outcomes = [
  { 
    icon: Brain, 
    title: 'AI Fundamentals',
    description: 'Understand artificial intelligence concepts and its real-world applications',
    color: 'from-indigo-500 to-purple-500'
  },
  { 
    icon: Bot, 
    title: 'Robotics Basics',
    description: 'Learn robotics principles, sensors, and automation techniques',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Code, 
    title: 'Hands-on Projects',
    description: 'Build real AI-powered projects from scratch',
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    icon: Lightbulb, 
    title: 'Problem Solving',
    description: 'Develop logical thinking and creative problem-solving skills',
    color: 'from-amber-500 to-orange-500'
  },
  { 
    icon: Target, 
    title: 'Programming Skills',
    description: 'Gain practical experience in coding and software development',
    color: 'from-emerald-500 to-teal-500'
  },
]

const LearningOutcomes = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Learning <span className="text-gradient">Outcomes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            What your child will achieve in this transformative journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="glass-card rounded-2xl p-6 sm:p-8 group gradient-border relative overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${outcome.color}/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20`}>
                  <outcome.icon className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors">
                  {outcome.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {outcome.description}
                </p>
                
                {/* Expandable content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium">Included in workshop</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-gray-500 text-xs">
                      <span>Click to {expandedIndex === index ? 'collapse' : 'learn more'}</span>
                      <ArrowRight size={12} className={`transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <Sparkles className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 text-indigo-400/10 group-hover:text-indigo-400/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningOutcomes