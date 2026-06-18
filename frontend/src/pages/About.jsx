import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, Award, Target, Rocket, Sparkles,
  Brain, Bot, Code, Lightbulb, Heart,
  Star, Shield, Clock, Globe,
  CheckCircle, ArrowRight,
  GraduationCap, BookOpen, Zap,
  Cpu, TrendingUp, BarChart
} from 'lucide-react'

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null)

  const stats = [
    { 
      icon: Users, 
      value: '5,000+', 
      label: 'Students Trained',
      description: 'Young minds empowered with AI & Robotics skills',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      icon: Award, 
      value: '98%', 
      label: 'Satisfaction Rate',
      description: 'Parents and students love our programs',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      icon: Target, 
      value: '50+', 
      label: 'Workshops Conducted',
      description: 'Successful workshops across multiple cohorts',
      color: 'from-amber-500 to-orange-500',
      gradient: 'from-amber-500/20 to-orange-500/20'
    },
    { 
      icon: Star, 
      value: '4.9', 
      label: 'Average Rating',
      description: 'Rated by thousands of happy students',
      color: 'from-emerald-500 to-teal-500',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
  ]

  const missionPoints = [
    {
      icon: Brain,
      title: 'AI Education for All',
      description: 'Making artificial intelligence accessible and understandable for every child.',
      delay: 0
    },
    {
      icon: Bot,
      title: 'Hands-on Robotics',
      description: 'Providing practical robotics experience that builds confidence and creativity.',
      delay: 0.1
    },
    {
      icon: Code,
      title: 'Future-Ready Skills',
      description: 'Equipping students with programming and problem-solving skills for tomorrow.',
      delay: 0.2
    },
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'Creating a love for learning that extends beyond the classroom.',
      delay: 0.3
    },
  ]

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Every child deserves access to quality STEM education.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency and commitment to our students.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We constantly evolve our programs to stay at the forefront.',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  const milestones = [
    { year: '2020', event: 'Founded Kidrove', icon: Rocket },
    { year: '2021', event: 'First workshop with 50 students', icon: Users },
    { year: '2022', event: 'Expanded to robotics programs', icon: Bot },
    { year: '2023', event: 'Advanced AI & ML curriculum', icon: Brain },
    { year: '2024', event: '5,000+ students across 20+ countries', icon: Globe },
    { year: '2025', event: 'Signature AI & Robotics Workshop', icon: Award },
  ]

  // Floating particles for hero
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1
  }))

  return (
    <div className="pt-20 min-h-screen overflow-x-hidden">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        {/* Animated Background - Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
          
          {/* Floating Particles */}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
              <span className="text-xs sm:text-sm text-indigo-300 font-medium">About Kidrove</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED, #06B6D4)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Kidrove
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              We're on a mission to empower the next generation of innovators with AI and Robotics 
              education. Our programs are designed to inspire, educate, and transform young minds.
            </motion.p>

            {/* Stats with Enhanced Animations */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="glass-card rounded-xl p-3 sm:p-4 text-center border border-white/5 hover:border-indigo-500/20 transition-all group relative overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    animate={{
                      scale: hoveredStat === index ? 1 : 0.8,
                      opacity: hoveredStat === index ? 1 : 0,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        scale: hoveredStat === index ? 1.1 : 1,
                        rotate: hoveredStat === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section with Floating Icons */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative floating icons */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {[Brain, Bot, Code, Heart].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 25}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <Icon size={60} className="text-indigo-400" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Mission</span>
              </h2>
            </motion.div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              We believe every child deserves the opportunity to become a creator of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: point.delay, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                >
                  <point.icon size={22} className="text-indigo-400" />
                </motion.div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 group-hover:text-indigo-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Animated Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card rounded-2xl p-5 sm:p-6 text-center border border-white/5 hover:border-indigo-500/20 transition-all group"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color}/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                >
                  <value.icon size={24} className="text-indigo-400" />
                </motion.div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline with Connected Animation */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Timeline connecting line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-cyan-500/30 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              From our founding to today, here's how we've grown.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all group relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-indigo-400">{index + 1}</span>
                </motion.div>
                
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <milestone.icon size={20} className="text-indigo-400" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-2xl font-bold text-indigo-400"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {milestone.year}
                    </motion.div>
                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Pulsing Animation */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-12 gradient-border relative overflow-hidden"
          >
            {/* Animated background circles */}
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
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Join Our <span className="text-gradient">Community</span>
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Be part of a growing community of young innovators who are shaping the future 
                with AI and Robotics.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  Get Started
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
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
              
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-400 text-xs">
                {[
                  { icon: CheckCircle, label: '5K+ Students' },
                  { icon: CheckCircle, label: '98% Satisfaction' },
                  { icon: CheckCircle, label: '50+ Workshops' },
                  { icon: CheckCircle, label: '20+ Countries' },
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className="flex items-center gap-1"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <item.icon size={12} className="text-emerald-400" />
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About