import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary perspective-1000">
      {/* Floating 3D-like Elements */}
      <motion.div 
        animate={{ 
          rotateY: [0, 20, 0],
          rotateX: [0, 10, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 border-2 border-primary/20 dope-skew hidden lg:block"
      />
      <motion.div 
        animate={{ 
          rotateY: [0, -20, 0],
          rotateX: [0, -10, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-48 h-48 border-2 border-primary/10 dope-skew hidden lg:block"
      />

      {/* Background Glows */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center preserve-3d">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="slam-in"
        >
          <h1 className="text-[15vw] md:text-[12vw] leading-[0.75] mb-4 drop-shadow-2xl">
            ELITE <br />
            <span className="text-primary outline-text">STUDIO</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative inline-block"
        >
          <p className="text-lg md:text-3xl font-black tracking-[0.4em] uppercase mb-12 bg-accent text-secondary px-4 py-2 dope-skew">
            Visual Revolution
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="inline-flex items-center gap-4 bg-primary text-secondary px-12 py-6 text-2xl font-black uppercase tracking-tighter orange-glow group"
          >
            Explore Now
            <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
