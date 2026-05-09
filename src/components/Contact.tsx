import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Lets Connect
            </motion.p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-12">Talk to us.</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                  <a href="mailto:hello@nexus.studio" className="text-2xl font-medium hover:text-indigo-400 transition-colors">hello@nexus.studio</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Visit Us</p>
                  <p className="text-2xl font-medium">101 Creative Plaza, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-2xl font-medium hover:text-emerald-400 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-indigo-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-indigo-500 outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-indigo-500 outline-none transition-colors appearance-none">
                  <option className="bg-neutral-900">Web Design</option>
                  <option className="bg-neutral-900">Mobile Development</option>
                  <option className="bg-neutral-900">Branding</option>
                  <option className="bg-neutral-900">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Message</label>
                <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-indigo-500 outline-none transition-colors resize-none"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-5 rounded-xl font-bold flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
