import { ArrowUpRight, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-secondary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#home" className="text-3xl font-black tracking-tighter text-primary">
            ELITE STUDIO
          </a>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 border border-accent/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-accent/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-accent/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-accent/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-accent/40">
          <p>© 2026 Elite Studio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
