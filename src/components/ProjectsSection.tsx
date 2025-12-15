import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import decorativePattern from "@/assets/decorative-pattern.jpg";

const projects = [
  {
    title: "EcoTrack — Carbon Footprint Dashboard",
    description: "A personal sustainability tracker that visualizes your carbon footprint through beautiful data visualizations. Built with React and D3.js, featuring real-time API integrations.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=500&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Bloomify — Plant Care App",
    description: "Mobile-first web app helping plant parents care for their green friends with watering reminders and care guides.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=375&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "StudyFlow — Focus Timer",
    description: "A minimalist Pomodoro timer with ambient sounds and productivity analytics for students.",
    tags: ["Vue.js", "Web Audio API", "Charts"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=375&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Wanderlust — Travel Journal",
    description: "A digital travel journal with interactive maps, photo galleries, and trip planning features.",
    tags: ["Next.js", "Mapbox", "Prisma"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=375&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 opacity-10 pointer-events-none">
        <img src={decorativePattern} alt="" className="w-full" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wide text-sm uppercase">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of projects that showcase my journey in building thoughtful, 
            user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
