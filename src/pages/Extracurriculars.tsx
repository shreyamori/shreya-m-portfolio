import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { involvements } from "@/data/extracurriculars";

const ExtracurricularsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative overflow-hidden">
        <FloralAccent position="top-right" size="lg" />

        <div className="container mx-auto px-6">
          <PageHeader
            label="Involvement"
            title="Beyond the Classroom"
            description="The communities, competitions, and causes that fuel my growth and give back to others."
          />

          <div className="max-w-5xl mx-auto pb-16 space-y-20">
            {involvements.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h2 className="font-display text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                  <svg
                    width="32"
                    height="16"
                    viewBox="0 0 32 16"
                    className="text-muted-foreground/30"
                  >
                    <ellipse
                      cx="8"
                      cy="8"
                      rx="6"
                      ry="4"
                      fill="currentColor"
                      opacity="0.4"
                      transform="rotate(-20 8 8)"
                    />
                    <ellipse
                      cx="20"
                      cy="8"
                      rx="5"
                      ry="3"
                      fill="currentColor"
                      opacity="0.3"
                      transform="rotate(15 20 8)"
                    />
                    <circle
                      cx="28"
                      cy="8"
                      r="2"
                      className="fill-gold"
                      opacity="0.5"
                    />
                  </svg>
                  {section.category}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.title + item.organization}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`group bg-card rounded-lg p-8 border hover-lift ${
                        item.highlight
                          ? "border-accent/50 bg-gradient-to-br from-card to-gold-muted/10"
                          : "border-border/50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full ${
                            item.highlight
                              ? "bg-accent text-accent-foreground"
                              : "bg-sage-light"
                          }`}
                        >
                          <item.icon
                            size={20}
                            className={item.highlight ? "" : "text-foreground"}
                          />
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
                          <p className="text-muted-foreground font-medium text-sm mb-1">
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

          <BotanicalDivider variant="leaves" className="pb-16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExtracurricularsPage;
