import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  linkText: string;
  index: number;
}

const HighlightCard = ({
  title,
  description,
  icon: Icon,
  link,
  linkText,
  index,
}: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={link}
        className="group block bg-card rounded-2xl p-6 border border-border/50 hover-lift h-full"
      >
        <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
          <Icon className="w-5 h-5 text-forest group-hover:text-accent-foreground transition-colors duration-300" />
        </div>
        
        <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-forest-light transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
          {linkText}
          <ArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  );
};

export default HighlightCard;
