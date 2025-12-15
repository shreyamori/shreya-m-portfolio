export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "MuseMatch",
    description:
      "Full-stack MVP built in 24 hours for Lower Manhattan Cultural Council. Features alumni matching, event recommendations, and real-time updates. Ranked top-tier among 20+ teams.",
    tags: ["React", "TailwindCSS", "Express", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shreyamori",
    featured: true,
  },
  {
    title: "Connexus",
    description:
      "Full-stack web app using GPT-4o to generate personalized academic explanations based on student interests and grade level. Includes user authentication, personalized learning pathways, and AI-driven content generation.",
    tags: ["Python", "JavaScript", "Flask", "React", "OpenAI API"],
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=375&fit=crop",
    githubUrl: "https://github.com/shreyamori",
    featured: true,
  },
];
