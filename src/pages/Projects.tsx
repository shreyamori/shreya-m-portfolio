import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoTrack — Carbon Footprint Dashboard",
    description: "A personal sustainability tracker that visualizes your carbon footprint through beautiful data visualizations. Built with React and D3.js, featuring real-time API integrations for transportation, diet, and energy usage tracking.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=500&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Bloomify — Plant Care App",
    description: "Mobile-first web app helping plant parents care for their green friends with smart watering reminders, care guides, and a community plant swap feature.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=375&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "StudyFlow — Focus Timer",
    description: "A minimalist Pomodoro timer with ambient sounds, productivity analytics, and integration with Spotify for focus playlists.",
    tags: ["Vue.js", "Web Audio API", "Charts"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=375&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Wanderlust — Travel Journal",
    description: "A digital travel journal with interactive maps, photo galleries, trip planning, and sharing features for adventure enthusiasts.",
    tags: ["Next.js", "Mapbox", "Prisma"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=375&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "CodeBuddy — Pair Programming Platform",
    description: "Real-time collaborative coding platform with video chat, shared terminals, and AI-powered code suggestions for remote pair programming.",
    tags: ["React", "WebRTC", "Socket.io", "OpenAI"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=375&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "MealPrep AI",
    description: "Smart meal planning app that generates weekly recipes based on dietary preferences, budget, and available ingredients.",
    tags: ["Python", "FastAPI", "React", "GPT-4"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=375&fit=crop",
    githubUrl: "https://github.com",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6">
        <PageHeader
          label="Portfolio"
          title="My Projects"
          description="A collection of projects that showcase my journey in building thoughtful, user-centered digital experiences."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 pb-24"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
