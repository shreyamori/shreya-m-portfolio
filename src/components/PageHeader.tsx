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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-20 pt-32 pb-12"
    >
      <span className="text-accent font-medium tracking-widest text-xs uppercase">
        {label}
      </span>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-5">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-lg mx-auto text-lg font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default PageHeader;
