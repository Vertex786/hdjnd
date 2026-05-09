import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black text-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-sm font-semibold mb-6 uppercase tracking-wider"
          >
            Digital Innovation Agency
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-gradient">
              Future Proof
            </span> <br />
            Experiences.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
            Nexus is a creative studio at the intersection of design and technology, crafting digital products that move the needle.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold flex items-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-full text-lg font-bold flex items-center hover:bg-white/10 transition-colors"
            >
              <Play className="mr-2 fill-white" size={20} />
              View Showreel
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative group">
            <img 
              src="https://picsum.photos/seed/agency-hero/1200/900?grayscale" 
              alt="Digital Abstract" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Floating cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold">99%</div>
              <div>
                <p className="text-sm font-bold">Client Satisfaction</p>
                <p className="text-xs text-gray-400">Global standard quality</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
