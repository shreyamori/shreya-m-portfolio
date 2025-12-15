import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const PageHeader = ({ label, title, description }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 pt-32 pb-8"
    >
      <span className="text-accent font-medium tracking-wide text-sm uppercase">
        {label}
      </span>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mt-3 mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default PageHeader;
