import { motion } from "framer-motion";
import { MapPin, Coffee, BookOpen, Camera } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const interests = [
  { icon: Coffee, label: "Matcha enthusiast" },
  { icon: BookOpen, label: "Always learning" },
  { icon: Camera, label: "Travel photography" },
  { icon: MapPin, label: "Based in San Francisco" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold-muted/40 to-sage/30 blob-shape-2 blur-3xl opacity-60" />
            <img
              src={profilePhoto}
              alt="Shreya Sree Morishetty - Software Engineer"
              className="relative w-full max-w-md mx-auto blob-shape object-cover aspect-square shadow-xl"
            />
            {/* Decorative elements */}
            <div
              className="absolute top-8 -left-4 w-16 h-16 border-2 border-accent rounded-full animate-float"
              style={{ animationDelay: "-2s" }}
            />
            <div className="absolute -bottom-4 right-12 w-8 h-8 bg-forest rounded-full animate-float" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-medium tracking-wide text-sm uppercase">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6">
              A curious mind with
              <br />
              <span className="text-forest-light">a love for craft</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a senior Computer Science student at UC Berkeley with a
                minor in Design. My journey into tech started with a simple
                curiosity about how apps are built — and quickly evolved into a
                passion for creating meaningful digital experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring local coffee shops
                with my camera, tending to my growing collection of houseplants,
                or getting lost in a good sci-fi novel. I believe the best
                technology feels invisible and human.
              </p>
              <p>
                Currently seeking internship opportunities where I can
                contribute to products that make people's lives a little better.
              </p>
            </div>

            {/* Interest Pills */}
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 text-sm text-foreground hover-lift"
                >
                  <interest.icon size={16} className="text-accent" />
                  <span>{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
