import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative overflow-hidden">
        <FloralAccent position="top-right" size="lg" />

        <div className="container mx-auto px-6">
          <PageHeader
            label="Portfolio"
            title="My Projects"
            description="Full-stack applications and AI-powered tools built with modern technologies. From hackathon wins to production-ready solutions."
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 pb-12"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>

          <BotanicalDivider variant="branch" className="pb-16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
