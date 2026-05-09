import { motion } from 'motion/react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">N</div>
              <span className="text-white font-bold text-2xl tracking-tight">NEXUS</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
              Elevating brands through strategic digital experiences and high-end engineering.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Journal</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-all block">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1 font-mono">May 2026</span>
                  Future of AI in Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all block">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1 font-mono">Apr 2026</span>
                  Building Modern Interfaces
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 Nexus Digital Ltd. All rights reserved.</p>
          <div className="flex gap-10 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
