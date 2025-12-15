import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HighlightCard from "@/components/HighlightCard";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { Briefcase, Code2, Users, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Projects",
    description: "Web apps, mobile experiences, and creative experiments that showcase my technical skills.",
    icon: Code2,
    link: "/projects",
    linkText: "View projects",
  },
  {
    title: "Experience",
    description: "Internships and work experience building real products with amazing teams.",
    icon: Briefcase,
    link: "/experience",
    linkText: "See my journey",
  },
  {
    title: "Involvement",
    description: "Hackathons, clubs, and communities where I learn, lead, and give back.",
    icon: Users,
    link: "/extracurriculars",
    linkText: "Explore involvement",
  },
  {
    title: "Blog",
    description: "Thoughts on tech, design, and the journey of becoming a better engineer.",
    icon: BookOpen,
    link: "/blog",
    linkText: "Read posts",
  },
  {
    title: "Fun Stuff",
    description: "The hobbies, interests, and adventures that keep me inspired outside of code.",
    icon: Sparkles,
    link: "/fun",
    linkText: "Get to know me",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        <BotanicalDivider variant="leaves" />
        
        {/* Highlights Section */}
        <section className="py-20 bg-cozy relative overflow-hidden">
          <FloralAccent position="top-right" size="lg" />
          <FloralAccent position="bottom-left" size="md" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-medium tracking-wide text-sm uppercase">Explore</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">
                What I'm About
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                A glimpse into my work, experiences, and the things that make me tick.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <HighlightCard key={highlight.title} {...highlight} index={index} />
              ))}
            </div>
          </div>
        </section>

        <BotanicalDivider variant="minimal" />

        {/* Personal Note Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="font-display text-2xl md:text-3xl text-primary leading-relaxed italic">
                "I believe the best technology feels invisible — it connects people, 
                solves real problems, and leaves space for human creativity to flourish."
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-accent" />
                <span className="text-sm text-muted-foreground">Sarah Rodriguez</span>
                <span className="w-8 h-px bg-accent" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
