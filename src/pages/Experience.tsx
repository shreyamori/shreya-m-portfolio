import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Stripe",
    location: "San Francisco, CA",
    period: "Summer 2024",
    description: "Worked on the Payments team to improve checkout conversion rates and developer experience.",
    achievements: [
      "Built a new React component library reducing checkout integration time by 40%",
      "Implemented A/B testing framework for payment form optimizations",
      "Collaborated with design team on accessibility improvements, achieving WCAG 2.1 AA compliance",
      "Presented findings to leadership, leading to roadmap prioritization changes",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Figma",
    location: "San Francisco, CA",
    period: "Summer 2023",
    description: "Contributed to the Design Systems team, building tools for designers and developers.",
    achievements: [
      "Developed new plugin APIs enabling third-party design token management",
      "Improved component browser performance by 25% through virtualization",
      "Created documentation and tutorials used by 10,000+ plugin developers",
      "Participated in design critiques and user research sessions",
    ],
  },
  {
    title: "Research Assistant",
    company: "UC Berkeley HCI Lab",
    location: "Berkeley, CA",
    period: "2022 - 2023",
    description: "Conducted research on human-AI interaction patterns in creative tools.",
    achievements: [
      "Co-authored paper on AI-assisted design workflows accepted to CHI 2023",
      "Built prototype tools for studying designer-AI collaboration",
      "Ran user studies with 50+ participants analyzing interaction patterns",
      "Presented research at lab seminars and departmental showcases",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "UC Berkeley CS Department",
    location: "Berkeley, CA",
    period: "Fall 2022",
    description: "TA for CS 61A: Structure and Interpretation of Computer Programs.",
    achievements: [
      "Led weekly discussion sections for 30+ students",
      "Held office hours helping students debug projects and understand concepts",
      "Developed supplementary practice problems and study guides",
      "Received 4.8/5 student satisfaction rating",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6">
        <PageHeader
          label="Career"
          title="Work Experience"
          description="Building products and learning from amazing teams across tech."
        />

        <div className="max-w-4xl mx-auto space-y-8 pb-24">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company + experience.period} {...experience} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
