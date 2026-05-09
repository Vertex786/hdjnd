import { motion } from 'motion/react';
import { Palette, Code, Smartphone, BarChart3, Globe, Zap } from 'lucide-react';

const services = [
  {
    title: "Brand Strategy & Design",
    description: "Defining your identity through strategic positioning and stunning visual narratives across all touchpoints.",
    icon: <Palette className="text-indigo-400" size={32} />,
    color: "bg-indigo-500/10"
  },
  {
    title: "Web & Mobile Development",
    description: "Engineering robust, scalable, and high-performance digital solutions using the latest tech stacks.",
    icon: <Code className="text-purple-400" size={32} />,
    color: "bg-purple-500/10"
  },
  {
    title: "User Experience (UX)",
    description: "Creating intuitive interfaces that solve complex problems and delight users at every interaction.",
    icon: <Smartphone className="text-blue-400" size={32} />,
    color: "bg-blue-500/10"
  },
  {
    title: "Digital Marketing",
    description: "Scaling your reach through data-driven campaigns, SEO, and result-oriented growth strategies.",
    icon: <BarChart3 className="text-emerald-400" size={32} />,
    color: "bg-emerald-500/10"
  },
  {
    title: "Global Infrastructure",
    description: "Setting up secure and highly available cloud environments tailored for global scale applications.",
    icon: <Globe className="text-orange-400" size={32} />,
    color: "bg-orange-500/10"
  },
  {
    title: "AI & Automation",
    description: "Leveraging cutting-edge AI to automate workflows and unlock new possibilities for your business.",
    icon: <Zap className="text-yellow-400" size={32} />,
    color: "bg-yellow-500/10"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4"
            >
              What we do
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              Specialized in <br /> 
              <span className="text-gray-500 italic">High-Performance</span> Solutions.
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-2 text-lg">
            We merge creativity with technical precision to deliver transformative digital experiences that empower modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
