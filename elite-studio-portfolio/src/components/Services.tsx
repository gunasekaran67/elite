import { motion } from 'motion/react';
import { Camera, Video, Calendar, Scissors } from 'lucide-react';

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing timeless moments of your special day with high-end artistic precision.",
    icon: <Camera size={40} />,
  },
  {
    title: "Cinematic Videography",
    description: "Professional film production that tells your story through a cinematic lens.",
    icon: <Video size={40} />,
  },
  {
    title: "Event Coverage",
    description: "Comprehensive coverage for corporate events, parties, and large-scale gatherings.",
    icon: <Calendar size={40} />,
  },
  {
    title: "Editing & Post Production",
    description: "Expert color grading, sound design, and narrative editing for a polished finish.",
    icon: <Scissors size={40} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl mb-4">Our <span className="text-primary">Services</span></h2>
          <div className="w-24 h-2 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-accent/10 hover:border-primary transition-all group relative overflow-hidden"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-accent/60 leading-relaxed">
                {service.description}
              </p>
              
              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
