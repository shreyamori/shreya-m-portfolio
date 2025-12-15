import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ExperienceCard from "@/components/ExperienceCard";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { experiences } from "@/data/experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative overflow-hidden">
        <FloralAccent position="top-left" size="md" />
        <FloralAccent position="bottom-right" size="lg" />

        <div className="container mx-auto px-6">
          <PageHeader
            label="Career"
            title="Work Experience"
            description="Building impactful software at scale. 3 internships at top companies, creating tools that cut operational time by 80% and scale to thousands of users."
          />

          <div className="max-w-4xl mx-auto space-y-12 pb-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company + experience.period}
                {...experience}
                index={index}
              />
            ))}
          </div>

          <BotanicalDivider variant="minimal" className="pb-16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
