import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary border-y border-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="orange-overlay overflow-hidden">
              <img
                src="https://picsum.photos/seed/studio-work/800/1000"
                alt="Elite Studio Work"
                className="w-full h-auto bw-image grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary p-8 hidden md:flex flex-col justify-end">
              <span className="text-4xl font-black text-secondary">10+</span>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-8 leading-none">
              Crafting <span className="text-primary">Cinematic</span> Stories
            </h2>
            <p className="text-lg text-accent/70 mb-8 leading-relaxed">
              Elite Studio is a premier creative agency dedicated to capturing the essence of your most significant moments. We blend technical precision with artistic vision to deliver high-end video and photography services.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-black mb-2">Expertise</h4>
                <ul className="space-y-2 text-sm uppercase tracking-wider font-bold">
                  <li>Wedding Shoots</li>
                  <li>Event Coverage</li>
                  <li>Cinematic Videography</li>
                  <li>Photography</li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-black mb-2">Philosophy</h4>
                <p className="text-sm text-accent/60">
                  Every frame tells a story. We make sure yours is unforgettable.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <a href="#contact" className="text-primary font-black uppercase tracking-widest flex items-center gap-2 group">
                Learn More About Us 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
