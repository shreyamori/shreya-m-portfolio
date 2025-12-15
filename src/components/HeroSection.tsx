import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/30 blob-shape animate-blob-morph opacity-50" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold-muted/20 blob-shape-2 animate-blob-morph opacity-40" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-accent font-medium mb-4 tracking-wide">Hello, I'm</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary mb-6 leading-tight">
              Sarah<br />
              <span className="text-forest-light">Rodriguez</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 leading-relaxed">
              Computer Science student crafting thoughtful digital experiences. 
              Passionate about design systems, accessibility, and the spaces where 
              technology meets human creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-forest-light transition-all duration-300 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                About Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-sage-light rounded-full transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-sage-light rounded-full transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-sage-light rounded-full transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/40 to-gold-muted/30 organic-border blur-2xl" />
              <img
                src={heroImage}
                alt="Cozy workspace with matcha latte"
                className="relative w-full max-w-lg mx-auto organic-border object-cover aspect-[4/3] shadow-xl"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-float shadow-lg">
                <span className="text-accent-foreground font-display text-sm text-center leading-tight font-medium">
                  Open to<br />Work
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
