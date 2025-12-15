import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Trophy, Users, Code, Heart, ExternalLink } from "lucide-react";

const involvements = [
  {
    category: "Leadership",
    items: [
      {
        title: "President",
        organization: "Women in Computer Science",
        period: "2023 - Present",
        description: "Leading a 200+ member organization focused on supporting women and non-binary students in tech. Organizing workshops, mentorship programs, and industry panels.",
        icon: Users,
        link: "https://example.com",
      },
      {
        title: "Technical Lead",
        organization: "Codebase",
        period: "2022 - 2023",
        description: "Managed a team of 8 developers building pro-bono software for local nonprofits. Delivered 3 projects helping organizations digitize operations.",
        icon: Code,
      },
    ],
  },
  {
    category: "Hackathons",
    items: [
      {
        title: "1st Place Winner",
        organization: "TreeHacks 2024",
        period: "February 2024",
        description: "Built an AI-powered accessibility tool that generates alt-text for images in real-time. Won first place among 200+ teams.",
        icon: Trophy,
        highlight: true,
      },
      {
        title: "Best Design Award",
        organization: "CalHacks 9.0",
        period: "October 2023",
        description: "Created a mental health journaling app with mood tracking and AI-generated prompts. Recognized for exceptional UI/UX design.",
        icon: Trophy,
      },
      {
        title: "Finalist",
        organization: "HackMIT",
        period: "September 2023",
        description: "Developed a platform connecting food-insecure students with campus meal sharing programs. Top 10 out of 300+ submissions.",
        icon: Trophy,
      },
    ],
  },
  {
    category: "Community",
    items: [
      {
        title: "Mentor",
        organization: "Code Nation",
        period: "2022 - Present",
        description: "Teaching web development to high school students from underserved communities. Weekly sessions covering HTML, CSS, JavaScript, and React.",
        icon: Heart,
      },
      {
        title: "Workshop Organizer",
        organization: "Design@Berkeley",
        period: "2023 - Present",
        description: "Planning and hosting design workshops on topics like design systems, accessibility, and prototyping tools.",
        icon: Users,
      },
    ],
  },
];

const ExtracurricularsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6">
        <PageHeader
          label="Involvement"
          title="Beyond the Classroom"
          description="The communities, competitions, and causes that fuel my growth and give back to others."
        />

        <div className="max-w-5xl mx-auto pb-24 space-y-16">
          {involvements.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h2 className="font-display text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                {section.category}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.title + item.organization}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`group bg-card rounded-2xl p-6 border hover-lift ${
                      item.highlight
                        ? "border-accent/50 bg-gradient-to-br from-card to-gold-muted/10"
                        : "border-border/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${
                        item.highlight ? "bg-accent text-accent-foreground" : "bg-sage-light"
                      }`}>
                        <item.icon size={20} className={item.highlight ? "" : "text-forest"} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-display text-lg font-semibold text-primary">
                            {item.title}
                          </h3>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors"
                              aria-label={`Visit ${item.organization}`}
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-forest-light font-medium text-sm mb-1">
                          {item.organization}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          {item.period}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExtracurricularsPage;
