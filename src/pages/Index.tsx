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
    description:
      "Full-stack applications and AI-powered tools built with modern technologies. From hackathon wins to production-ready solutions.",
    icon: Code2,
    link: "/projects",
    linkText: "View projects",
  },
  {
    title: "Experience",
    description:
      "Building impactful software at JPMorgan Chase, Dandilyonn, and CAS. Creating tools that scale to thousands of users.",
    icon: Briefcase,
    link: "/experience",
    linkText: "See my journey",
  },
  {
    title: "Leadership",
    description:
      "Leading teams, raising funds, and driving initiatives that create real impact in communities and organizations.",
    icon: Users,
    link: "/extracurriculars",
    linkText: "Explore involvement",
  },
  {
    title: "Blog",
    description:
      "Thoughts on building software, working with AI, and the journey of becoming a better engineer.",
    icon: BookOpen,
    link: "/blog",
    linkText: "Read posts",
  },
  {
    title: "Fun Stuff",
    description:
      "The hobbies, interests, and adventures that keep me inspired outside of code.",
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
        <section className="py-24 bg-cozy relative overflow-hidden">
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
              <span className="text-accent font-medium tracking-wide text-sm uppercase">
                Explore
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">
                What I'm About
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                A glimpse into my work, experiences, and the things that make me
                tick.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <HighlightCard
                  key={highlight.title}
                  {...highlight}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <BotanicalDivider variant="minimal" />

        {/* Value Proposition */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="font-display text-xl md:text-2xl text-primary mb-6">
                Why Work With Me?
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div className="p-6 bg-card rounded-lg border border-border/50">
                  <p className="font-medium text-primary mb-2 text-base">
                    Impact-Driven
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Built tools that cut operational time by
                  </p>
                  <p className="text-2xl font-semibold text-accent mb-1">80%</p>
                  <p className="text-xs text-muted-foreground">
                    scales to 4,500+ users
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border/50">
                  <p className="font-medium text-primary mb-2 text-base">
                    Full-Stack
                  </p>
                  <p className="text-muted-foreground mb-2">
                    React, Java, Python, AI/ML
                  </p>
                  <p className="text-2xl font-semibold text-accent mb-1">5+</p>
                  <p className="text-xs text-muted-foreground">
                    technologies mastered
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border/50">
                  <p className="font-medium text-primary mb-2 text-base">
                    Collaborative
                  </p>
                  <p className="text-muted-foreground mb-2">Worked with</p>
                  <p className="text-2xl font-semibold text-accent mb-1">25+</p>
                  <p className="text-xs text-muted-foreground">
                    stakeholders across teams
                  </p>
                </div>
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
