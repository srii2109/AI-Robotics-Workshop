import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, Rocket, ChevronDown, 
  Users, Calendar, Globe, ArrowRight,
  Bot, Zap, Cpu, Brain
} from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Auto rotation for robot
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360)
    }, 50)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const scrollToDetails = () => {
    document.getElementById('details')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero bg-grid-pattern px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8 border border-white/10 mx-auto lg:mx-0"
          >
            <Sparkles size={16} className="text-cyan-400 flex-shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm text-indigo-300 font-medium">
              Summer 2026 · Limited Seats Available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-white">AI &</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-300 animate-gradient">
              Robotics Workshop
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
          >
            Build the future with AI and robotics. A 4-week hands-on journey 
            for young innovators aged 8–14.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-10"
          >
            {[
              { icon: Users, label: '8–14 Years' },
              { icon: Calendar, label: '4 Weeks' },
              { icon: Globe, label: 'Online' }
            ].map((item, index) => (
              <div
                key={index}
                className="glass px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 border border-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon size={14} className="text-indigo-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <button
              onClick={scrollToForm}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-300 animate-gradient rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enroll Now
                <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-300 animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={scrollToDetails}
              className="px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5 text-sm sm:text-base"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Robot Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center relative"
          style={{
            perspective: '1000px',
          }}
        >
          <motion.div
            className="relative w-[400px] h-[400px]"
            animate={{
              rotateY: rotation,
              rotateX: mousePosition.y * 0.3,
              rotateZ: mousePosition.x * 0.2,
            }}
            transition={{ duration: 0.1 }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Robot Body - Main */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative w-64 h-80">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                
                {/* Robot Head */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20 border border-indigo-500/30 backdrop-blur-sm"
                  animate={{
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Eyes */}
                  <div className="flex justify-center gap-4 mt-4">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </div>
                  {/* Antenna */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-indigo-400/50">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-indigo-400 mx-auto -mt-1"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Robot Body */}
                <motion.div
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-40 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 border border-indigo-500/30 backdrop-blur-sm"
                  animate={{
                    rotateX: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Chest Display */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-10 rounded-lg bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center">
                    <motion.div
                      className="flex gap-1"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <div className="w-1 h-3 bg-cyan-400 rounded-full" />
                      <div className="w-1 h-5 bg-cyan-400 rounded-full" />
                      <div className="w-1 h-4 bg-cyan-400 rounded-full" />
                      <div className="w-1 h-2 bg-cyan-400 rounded-full" />
                    </motion.div>
                  </div>
                  {/* Heart beat */}
                  <motion.div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-pink-400/50 font-mono"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    ❤ AI
                  </motion.div>
                </motion.div>

                {/* Arms */}
                <motion.div
                  className="absolute top-24 -left-8 w-6 h-32 rounded-full bg-gradient-to-b from-indigo-400/20 to-purple-400/20 border border-indigo-500/30 backdrop-blur-sm"
                  animate={{
                    rotate: [0, 20, 0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-24 -right-8 w-6 h-32 rounded-full bg-gradient-to-b from-indigo-400/20 to-purple-400/20 border border-indigo-500/30 backdrop-blur-sm"
                  animate={{
                    rotate: [0, -20, 0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Legs */}
                <motion.div
                  className="absolute bottom-0 left-4 w-8 h-20 rounded-full bg-gradient-to-b from-purple-400/20 to-indigo-400/20 border border-indigo-500/30 backdrop-blur-sm"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-4 w-8 h-20 rounded-full bg-gradient-to-b from-purple-400/20 to-indigo-400/20 border border-indigo-500/30 backdrop-blur-sm"
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Icons around robot */}
            {[
              { icon: Bot, delay: 0, x: -80, y: -40 },
              { icon: Brain, delay: 0.5, x: 80, y: -20 },
              { icon: Zap, delay: 1, x: -60, y: 80 },
              { icon: Cpu, delay: 1.5, x: 70, y: 70 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute glass rounded-full p-2 border border-white/10"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(${item.x}px, ${item.y}px)`,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut",
                }}
              >
                <item.icon size={24} className="text-indigo-400" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-400/50 hidden sm:block"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}

export default Hero