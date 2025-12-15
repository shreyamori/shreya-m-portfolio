export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "JPMorgan Chase",
    location: "Columbus, OH",
    period: "June 2025 – Present",
    description:
      "Building full-stack generative AI tools to streamline branch operations and improve efficiency.",
    achievements: [
      "Built full-stack generative AI tool with React, Java, Spring Boot, and Chase's LLM suite API, cutting branch action plan drafting time by 80%",
      "Designed for potential rollout to 4,500+ branches, significantly scaling operational efficiency",
      "Achieved 75% test coverage through test-driven development and CI/CD best practices",
      "Partnered with 25+ stakeholders in Agile environment, refining usability and delivering intuitive workflows",
    ],
  },
  {
    title: "Mobile App Developer Intern",
    company: "Dandilyonn",
    location: "Fremont, CA",
    period: "June 2024 – August 2024",
    description:
      "Developed mobile application enabling peer networking and predictive assignment planning for students.",
    achievements: [
      "Built mobile app using React Native, TypeScript, and Google Firebase with peer networking features",
      "Created class database leveraging linear regression model to predict assignment durations",
      "Improved UX through 25+ usability tests, leading to 'Best Overall App' award out of 10 teams",
    ],
  },
  {
    title: "Technology Intern",
    company: "CAS",
    location: "Columbus, OH",
    period: "May 2024 – August 2024",
    description:
      "Rebuilt critical web application and led kiosk initiative supporting AI-powered retrosynthesis tools.",
    achievements: [
      "Rebuilt 80% of critical web application using React, TypeScript, Java, and PostgreSQL, transitioning to scalable microservices architecture",
      "Supported AI-powered retrosynthesis tools for 200+ users",
      "Led CAS Tools kiosk initiative, awarded to only 3 of 25 interns, now used in 5+ global offices",
      "Increased employee engagement by ~15% through kiosk implementation",
    ],
  },
];
