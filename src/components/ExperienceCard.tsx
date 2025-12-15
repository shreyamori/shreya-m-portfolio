import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
  index: number;
}

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  achievements,
  logo,
  index,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
      
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-sage-light border-4 border-background flex items-center justify-center overflow-hidden z-10">
            {logo ? (
              <img src={logo} alt={company} className="w-10 h-10 object-contain" />
            ) : (
              <Building2 className="w-6 h-6 text-forest" />
            )}
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover-lift">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
                {title}
              </h3>
              <p className="text-forest-light font-medium">{company}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {location}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{description}</p>

          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
