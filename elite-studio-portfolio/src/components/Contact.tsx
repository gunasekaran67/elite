import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-8 leading-none">
              Let's <span className="text-primary">Work</span> Together
            </h2>
            <p className="text-accent/60 mb-12 text-lg">
              Ready to bring your vision to life? Whether it's a wedding, a corporate event, or a creative project, we're here to capture it perfectly.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent/5 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent/40">Email Us</p>
                  <p className="text-xl font-bold">gunasakar712@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent/5 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent/40">Call Us</p>
                  <p className="text-xl font-bold">7867091424</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent/5 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent/40">Our Studio</p>
                  <p className="text-xl font-bold">Creative Hub, Suite 101</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-accent/5 p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-secondary border border-accent/10 p-4 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-secondary border border-accent/10 p-4 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project"
                  className="w-full bg-secondary border border-accent/10 p-4 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-secondary py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
