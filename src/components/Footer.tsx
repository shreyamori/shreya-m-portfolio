import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-semibold">
            SR<span className="text-gold">.</span>
          </div>
          
          <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
            © {currentYear} Sarah Rodriguez. Made with 
            <Heart size={14} className="text-gold fill-gold" /> 
            in San Francisco
          </p>
          
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-primary-foreground/70 hover:text-gold transition-colors">
              About
            </a>
            <a href="#projects" className="text-primary-foreground/70 hover:text-gold transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-gold transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
