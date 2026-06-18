import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null)

  const posts = [
    {
      id: 1,
      title: 'Why AI Education Matters for Kids',
      excerpt: 'Discover how AI education is shaping the future of learning and why every child should learn AI basics.',
      content: `
        <p class="mb-4">Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming every aspect of our lives.</p>
        <h4 class="text-white font-semibold mt-6 mb-3">The AI Literacy Gap</h4>
        <p class="mb-4">Studies show that while children are growing up surrounded by AI-powered technologies, very few understand how they work.</p>
        <h4 class="text-white font-semibold mt-6 mb-3">Building Future-Ready Skills</h4>
        <p class="mb-4">Learning AI basics helps children develop critical thinking, problem-solving, and computational thinking skills.</p>
        <div class="glass-card rounded-xl p-4 mt-4 border border-indigo-500/20">
          <p class="text-indigo-300 text-sm">💡 Key Takeaway: AI education is not just about learning to code—it's about understanding how technology shapes our world.</p>
        </div>
      `,
      author: 'Dr. Sarah Johnson',
      date: 'June 15, 2026',
      readTime: '5 min read',
      category: 'Education',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Top 5 Robotics Projects for Beginners',
      excerpt: 'Get started with robotics with these fun and educational projects perfect for young learners.',
      content: `
        <p class="mb-4">Robotics is one of the most exciting fields in STEM education.</p>
        <h4 class="text-white font-semibold mt-6 mb-3">1. Line Follower Robot</h4>
        <p class="mb-4">Build a robot that follows a black line on white paper.</p>
        <h4 class="text-white font-semibold mt-6 mb-3">2. Obstacle Avoidance Bot</h4>
        <p class="mb-4">Create a robot that detects obstacles and changes direction.</p>
        <div class="glass-card rounded-xl p-4 mt-4 border border-cyan-500/20">
          <p class="text-cyan-300 text-sm">🔧 Pro Tip: Start with simple projects and gradually increase complexity.</p>
        </div>
      `,
      author: 'Prof. Mike Chen',
      date: 'June 12, 2026',
      readTime: '7 min read',
      category: 'Robotics',
      image: '🤖'
    },
    {
      id: 3,
      title: 'The Future of AI in Education',
      excerpt: 'Exploring how artificial intelligence is transforming the educational landscape for students worldwide.',
      content: `
        <p class="mb-4">Artificial Intelligence is revolutionizing education in ways we couldn't have imagined.</p>
        <h4 class="text-white font-semibold mt-6 mb-3">Personalized Learning Paths</h4>
        <p class="mb-4">AI algorithms can analyze a student's learning style to create customized learning paths.</p>
        <div class="glass-card rounded-xl p-4 mt-4 border border-purple-500/20">
          <p class="text-purple-300 text-sm">🌟 Future Vision: The classroom of the future will be a blend of AI-powered tools and human expertise.</p>
        </div>
      `,
      author: 'Emma Wilson',
      date: 'June 10, 2026',
      readTime: '6 min read',
      category: 'AI',
      image: '🌟'
    },
  ]

  const toggleReadMore = (id) => {
    setExpandedPost(expandedPost === id ? null : id)
  }

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.25 + 0.05
  }))

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
              <span className="text-xs sm:text-sm text-indigo-300 font-medium">Our Blog</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Insights, tips, and stories from the world of AI, Robotics, and education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 sm:p-8 gradient-border group cursor-pointer transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400"
                  >
                    {post.category}
                  </motion.span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="text-4xl sm:text-5xl"
                  >
                    {post.image}
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div 
                          className="text-gray-300 prose prose-invert max-w-none text-sm sm:text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User size={14} />
                    {post.author}
                  </div>
                  <button
                    onClick={() => toggleReadMore(post.id)}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium group"
                  >
                    {expandedPost === post.id ? (
                      <>
                        Show Less
                        <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-12 gradient-border"
          >
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
              Subscribe to Our <span className="text-gradient">Newsletter</span>
            </motion.h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get the latest updates on AI and Robotics education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-400 focus:outline-none text-white placeholder-gray-500 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-indigo-500/25 whitespace-nowrap text-sm"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog