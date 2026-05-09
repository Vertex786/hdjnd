import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Quantum Pay",
    category: "Fintech App",
    image: "https://picsum.photos/seed/quantum/1000/1200?grayscale",
    large: true
  },
  {
    title: "Vanguard Studio",
    category: "Corporate Branding",
    image: "https://picsum.photos/seed/vanguard/1000/1200?grayscale",
    large: false
  },
  {
    title: "Nebula OS",
    category: "Interface Design",
    image: "https://picsum.photos/seed/nebula/1000/1200?grayscale",
    large: false
  },
  {
    title: "Elysium Real Estate",
    category: "Luxury Platform",
    image: "https://picsum.photos/seed/elysium/1000/1200?grayscale",
    large: true
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Selected Work
          </motion.p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight">Recent Projects.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`group cursor-pointer ${project.large ? 'md:row-span-2' : ''}`}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-white">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <p className="text-sm text-indigo-400 font-semibold mb-2 uppercase tracking-wider">{project.category}</p>
              <h3 className="text-3xl font-bold group-hover:text-indigo-400 transition-colors tracking-tight">{project.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-10 py-5 rounded-full border border-white/20 font-bold hover:bg-white hover:text-black transition-all flex items-center group">
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
