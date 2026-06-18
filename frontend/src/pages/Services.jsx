import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, Brain, Code, Rocket, Award, Users, 
  Sparkles, ChevronDown, ChevronUp, 
  Zap, Cpu, BookOpen, Target, Star, Clock
} from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      id: 1,
      icon: Brain,
      title: 'AI Fundamentals',
      description: 'Learn the core concepts of artificial intelligence and machine learning.',
      color: 'from-indigo-500 to-purple-500',
      detailedInfo: {
        overview: 'Our AI Fundamentals program introduces students to the exciting world of artificial intelligence. Through hands-on projects and interactive learning, students understand how AI works and how it\'s shaping our world.',
        whatYouLearn: [
          'Introduction to AI and its applications',
          'Machine learning basics and algorithms',
          'Natural Language Processing (NLP)',
          'Computer Vision concepts',
          'Building simple AI models'
        ],
        duration: '4 Weeks',
        projects: [
          'Build a chatbot using Python',
          'Create an image recognition system',
          'Develop a recommendation engine',
          'Train a simple neural network'
        ],
        prerequisites: 'Basic computer knowledge, curiosity to learn',
        careerPath: 'AI Developer, Data Scientist, Machine Learning Engineer'
      }
    },
    {
      id: 2,
      icon: Bot,
      title: 'Robotics Programming',
      description: 'Build and program robots using cutting-edge technology and sensors.',
      color: 'from-purple-500 to-pink-500',
      detailedInfo: {
        overview: 'Dive into the world of robotics where students learn to build and program real robots. From simple movements to complex autonomous systems, this program covers it all.',
        whatYouLearn: [
          'Robot anatomy and components',
          'Sensor integration and calibration',
          'Motor control and movement',
          'Obstacle avoidance algorithms',
          'Autonomous navigation'
        ],
        duration: '5 Weeks',
        projects: [
          'Build a line-following robot',
          'Create an obstacle-avoidance bot',
          'Develop a voice-controlled robot',
          'Build a robotic arm'
        ],
        prerequisites: 'Basic electronics knowledge, interest in building things',
        careerPath: 'Robotics Engineer, Automation Specialist, Mechatronics Engineer'
      }
    },
    {
      id: 3,
      icon: Code,
      title: 'Python Programming',
      description: 'Master Python programming for AI and robotics applications.',
      color: 'from-cyan-500 to-blue-500',
      detailedInfo: {
        overview: 'Python is the most popular language for AI and robotics. This program takes students from beginner to intermediate level, focusing on practical applications in AI and robotics.',
        whatYouLearn: [
          'Python syntax and fundamentals',
          'Data structures and algorithms',
          'Object-oriented programming',
          'Libraries for AI (NumPy, Pandas, TensorFlow)',
          'Integration with robotics platforms'
        ],
        duration: '6 Weeks',
        projects: [
          'Build a calculator application',
          'Create a data analysis tool',
          'Develop a simple game',
          'Build an AI-powered application'
        ],
        prerequisites: 'Basic computer literacy, logical thinking',
        careerPath: 'Python Developer, Software Engineer, Data Analyst'
      }
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Project-Based Learning',
      description: 'Work on real-world projects that solve actual problems.',
      color: 'from-emerald-500 to-teal-500',
      detailedInfo: {
        overview: 'Our project-based learning approach ensures students apply theoretical knowledge to real-world challenges. Each project is designed to build problem-solving skills and creativity.',
        whatYouLearn: [
          'Project planning and management',
          'Problem identification and analysis',
          'Solution design and implementation',
          'Testing and debugging',
          'Presentation and documentation'
        ],
        duration: '4 Weeks',
        projects: [
          'Smart home automation system',
          'AI-powered health monitor',
          'Robotic assistant for elderly',
          'Environmental monitoring system'
        ],
        prerequisites: 'Completion of at least one foundation program',
        careerPath: 'Project Manager, Solutions Architect, Innovation Lead'
      }
    },
    {
      id: 5,
      icon: Award,
      title: 'Certification',
      description: 'Earn recognized certificates that showcase your skills.',
      color: 'from-amber-500 to-orange-500',
      detailedInfo: {
        overview: 'Our certification program validates your skills and knowledge in AI and robotics. These certificates are recognized by industry leaders and can boost your academic and career prospects.',
        whatYouLearn: [
          'Comprehensive skill assessment',
          'Portfolio development',
          'Industry-standard practices',
          'Professional documentation',
          'Interview preparation'
        ],
        duration: '2 Weeks',
        projects: [
          'Build a complete project portfolio',
          'Create professional documentation',
          'Practice technical interviews',
          'Develop a personal brand'
        ],
        prerequisites: 'Completion of required coursework',
        careerPath: 'Certified AI Specialist, Robotics Professional'
      }
    },
    {
      id: 6,
      icon: Users,
      title: 'Mentorship',
      description: 'Get guidance from industry experts and experienced mentors.',
      color: 'from-rose-500 to-pink-500',
      detailedInfo: {
        overview: 'Our mentorship program connects students with industry experts who provide personalized guidance, career advice, and real-world insights into AI and robotics careers.',
        whatYouLearn: [
          'Career guidance and planning',
          'Industry insights and trends',
          'Networking opportunities',
          'Personalized feedback',
          'Professional development'
        ],
        duration: 'Ongoing',
        projects: [
          'Career roadmap development',
          'Professional networking',
          'Industry project collaboration',
          'Personal brand building'
        ],
        prerequisites: 'Enrolled in any Kidrove program',
        careerPath: 'Mentorship opens doors to various career paths'
      }
    },
  ]

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id)
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

  return (
    <div className="pt-20 min-h-screen overflow-x-hidden">
      {/* Hero Section with Particles */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        {/* Floating Particles */}
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
              <span className="text-xs sm:text-sm text-indigo-300 font-medium">Our Services</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Comprehensive programs designed to build future-ready skills in 
              AI, Robotics, and Programming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 gradient-border group cursor-pointer transition-all duration-300"
                onClick={() => toggleService(service.id)}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color}/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-indigo-400 text-sm font-medium">
                  {expandedService === service.id ? 'Show Less' : 'Learn More'}
                  {expandedService === service.id ? (
                    <ChevronUp size={16} className="transition-transform" />
                  ) : (
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  )}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                            <Sparkles size={14} className="text-indigo-400" />
                            Overview
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {service.detailedInfo.overview}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                            <BookOpen size={14} className="text-indigo-400" />
                            What You'll Learn
                          </h4>
                          <ul className="space-y-1">
                            {service.detailedInfo.whatYouLearn.map((item, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="text-indigo-400 mt-0.5">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                              <Clock size={14} className="text-indigo-400" />
                              Duration
                            </h4>
                            <p className="text-gray-400 text-sm">{service.detailedInfo.duration}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                              <Target size={14} className="text-indigo-400" />
                              Prerequisites
                            </h4>
                            <p className="text-gray-400 text-sm">{service.detailedInfo.prerequisites}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                            <Rocket size={14} className="text-indigo-400" />
                            Projects
                          </h4>
                          <ul className="space-y-1">
                            {service.detailedInfo.projects.map((project, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">◆</span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="glass-card rounded-xl p-3 border border-indigo-500/20">
                          <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                            <Star size={14} className="text-amber-400" />
                            Career Path
                          </h4>
                          <p className="text-indigo-300 text-sm">{service.detailedInfo.careerPath}</p>
                        </div>

                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-sm font-semibold transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            document.getElementById('registration')?.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            })
                          }}
                        >
                          Enroll Now
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-12 gradient-border relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative z-10">
              <motion.h2
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              >
                Ready to Start Your <span className="text-gradient">Journey?</span>
              </motion.h2>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Join thousands of young innovators already learning with Kidrove.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-indigo-500/25"
                >
                  Enroll Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 glass rounded-full font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services