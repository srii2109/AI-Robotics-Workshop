// frontend/src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-dark/95 border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">Kidrove</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the future with AI & Robotics education for young innovators.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">About Us</Link>
              <Link to="/services" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Services</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Blog</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-indigo-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                <span>info@kidrove.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-indigo-400 flex-shrink-0" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-colors">
                <Twitter size={18} className="text-gray-400 hover:text-indigo-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-colors">
                <Linkedin size={18} className="text-gray-400 hover:text-indigo-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-colors">
                <Youtube size={18} className="text-gray-400 hover:text-indigo-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-colors">
                <Github size={18} className="text-gray-400 hover:text-indigo-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Kidrove. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer