import { motion } from 'motion/react';

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '350+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Awards Won', value: '25+' },
];

export default function Stats() {
  return (
    <section className="py-24 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-black mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
