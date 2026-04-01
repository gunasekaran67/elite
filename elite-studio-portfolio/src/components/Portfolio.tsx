import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { X, ArrowRight, Play, Camera as CameraIcon } from 'lucide-react';

const categories = ['All', 'Weddings', 'Events', 'Reels / Shorts'];

const projects = [
  { 
    id: 1, 
    title: 'The Royal Wedding', 
    category: 'Weddings', 
    image: 'https://i.ibb.co/hJ3YJYz7/DSC-2449.jpg',
    description: 'A grand celebration of love and tradition, captured with cinematic elegance and high-end photography.',
    tags: ['Cinematic', 'Traditional', 'Grand'],
    stats: { shots: '2500+', duration: '45m Film' }
  },
  { 
    id: 2, 
    title: 'Tech Summit 2025', 
    category: 'Events', 
    image: 'https://picsum.photos/seed/event1/800/600',
    description: 'Documenting the future of technology through high-energy event coverage and speaker highlights.',
    tags: ['Corporate', 'High-Tech', 'Dynamic'],
    stats: { shots: '1200+', duration: '15m Recap' }
  },
  { 
    id: 3, 
    title: 'Urban Lifestyle Reel', 
    category: 'Reels / Shorts', 
    image: 'https://picsum.photos/seed/reel1/800/600',
    description: 'Fast-paced, edgy content designed for the modern social media landscape.',
    tags: ['Edgy', 'Fast', 'Trendy'],
    stats: { shots: '500+', duration: '60s Reel' }
  },
  { 
    id: 4, 
    title: 'Coastal Love Story', 
    category: 'Weddings', 
    image: 'https://i.ibb.co/1G1SKJrN/c.avif',
    description: 'An intimate beachside wedding captured with natural light and romantic storytelling.',
    tags: ['Intimate', 'Natural', 'Romantic'],
    stats: { shots: '1800+', duration: '30m Film' }
  },
  { 
    id: 5, 
    title: 'Music Festival Highlights', 
    category: 'Events', 
    image: 'https://picsum.photos/seed/event2/800/600',
    description: 'Capturing the raw energy and vibrant atmosphere of a massive summer music festival.',
    tags: ['Vibrant', 'Energy', 'Live'],
    stats: { shots: '3000+', duration: '20m Highlights' }
  },
  { 
    id: 6, 
    title: 'Fashion Week Short', 
    category: 'Reels / Shorts', 
    image: 'https://picsum.photos/seed/reel2/800/600',
    description: 'High-fashion aesthetics condensed into a powerful short-form visual experience.',
    tags: ['Luxury', 'Style', 'Visual'],
    stats: { shots: '800+', duration: '90s Short' }
  },
];

function TiltCard({ project, onClick }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative aspect-[4/3] overflow-hidden bg-accent/5 cursor-pointer perspective-1000"
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-2">{project.category}</span>
          <h3 className="text-2xl text-secondary mb-4">{project.title}</h3>
          <div className="w-12 h-1 bg-secondary"></div>
          <p className="mt-4 text-secondary text-xs font-bold uppercase tracking-widest">View Project ↗</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  activeCategory === cat ? 'bg-primary border-primary text-secondary dope-skew' : 'border-accent/10 text-accent hover:border-primary hover:dope-skew'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <TiltCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail "New Page" View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-secondary overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 1.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="min-h-screen flex flex-col"
            >
              {/* Header */}
              <div className="p-8 flex justify-between items-center sticky top-0 bg-secondary/80 backdrop-blur-xl z-10 border-b border-accent/5">
                <span className="text-primary font-black tracking-tighter text-2xl">ELITE STUDIO</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 bg-primary text-secondary flex items-center justify-center hover:bg-accent transition-all rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-grow max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-sm">{selectedProject.category}</span>
                    <h2 className="text-6xl md:text-9xl leading-none mt-4">{selectedProject.title}</h2>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-accent/70 leading-relaxed max-w-xl"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="px-4 py-2 border border-accent/20 text-xs font-bold uppercase tracking-widest dope-skew">
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 gap-8 pt-8 border-t border-accent/10"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest text-accent/40 font-bold mb-2">Total Shots</p>
                      <p className="text-3xl font-black">{selectedProject.stats.shots}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-accent/40 font-bold mb-2">Final Cut</p>
                      <p className="text-3xl font-black">{selectedProject.stats.duration}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-8"
                  >
                    <button className="bg-primary text-secondary px-12 py-6 text-xl font-black uppercase tracking-tighter flex items-center gap-4 hover:bg-accent transition-all group">
                      Watch Film <Play size={24} fill="currentColor" />
                    </button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="relative"
                >
                  <div className="orange-overlay dope-skew overflow-hidden shadow-2xl">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary flex items-center justify-center rounded-full animate-spin-slow">
                    <CameraIcon size={40} className="text-secondary" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
