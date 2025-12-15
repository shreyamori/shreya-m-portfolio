import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-display text-xl font-semibold">
            SSM<span className="text-gold">.</span>
          </Link>

          <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
            © {currentYear} Shreya Sree Morishetty. Made with
            <Heart size={14} className="text-gold fill-gold" />
            in Columbus
          </p>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/projects"
              className="text-primary-foreground/70 hover:text-gold transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="text-primary-foreground/70 hover:text-gold transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-primary-foreground/70 hover:text-gold transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
