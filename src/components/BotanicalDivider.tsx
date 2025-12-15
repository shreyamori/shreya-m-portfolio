import { motion } from "framer-motion";

interface BotanicalDividerProps {
  variant?: "leaves" | "branch" | "minimal";
  className?: string;
}

const BotanicalDivider = ({ variant = "leaves", className = "" }: BotanicalDividerProps) => {
  if (variant === "branch") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`flex items-center justify-center py-8 ${className}`}
      >
        <svg
          width="200"
          height="40"
          viewBox="0 0 200 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sage"
        >
          <path
            d="M20 20C40 20 50 10 70 15C90 20 100 25 130 20C160 15 180 20 180 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="45" cy="12" rx="8" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-30 45 12)" />
          <ellipse cx="55" cy="18" rx="7" ry="4" fill="currentColor" opacity="0.4" transform="rotate(20 55 18)" />
          <ellipse cx="110" cy="22" rx="8" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-15 110 22)" />
          <ellipse cx="125" cy="18" rx="6" ry="4" fill="currentColor" opacity="0.4" transform="rotate(25 125 18)" />
          <ellipse cx="155" cy="16" rx="7" ry="4" fill="currentColor" opacity="0.35" transform="rotate(-20 155 16)" />
          <circle cx="100" cy="20" r="3" className="fill-gold" opacity="0.6" />
        </svg>
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`flex items-center justify-center gap-4 py-6 ${className}`}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-sage" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
          <path
            d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21C12 21 16 17 16 12C16 7 12 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 8C12 8 10 10 10 12C10 14 12 16 12 16"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-sage" />
      </motion.div>
    );
  }

  // Default: leaves
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center py-10 ${className}`}
    >
      <svg
        width="160"
        height="48"
        viewBox="0 0 160 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-forest"
      >
        {/* Left leaves */}
        <path
          d="M30 24C30 24 20 18 10 24C20 30 30 24 30 24Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M40 20C40 20 32 12 22 16C30 24 40 20 40 20Z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M45 28C45 28 38 34 28 32C35 26 45 28 45 28Z"
          fill="currentColor"
          opacity="0.15"
        />
        
        {/* Center stem and flower */}
        <line x1="50" y1="24" x2="110" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="80" cy="24" r="6" className="fill-gold" opacity="0.2" />
        <circle cx="80" cy="24" r="3" className="fill-gold" opacity="0.4" />
        <circle cx="80" cy="24" r="1.5" className="fill-accent" />
        
        {/* Petals */}
        <ellipse cx="74" cy="20" rx="4" ry="2" className="fill-gold" opacity="0.15" transform="rotate(-45 74 20)" />
        <ellipse cx="86" cy="20" rx="4" ry="2" className="fill-gold" opacity="0.15" transform="rotate(45 86 20)" />
        <ellipse cx="74" cy="28" rx="4" ry="2" className="fill-gold" opacity="0.15" transform="rotate(45 74 28)" />
        <ellipse cx="86" cy="28" rx="4" ry="2" className="fill-gold" opacity="0.15" transform="rotate(-45 86 28)" />
        
        {/* Right leaves */}
        <path
          d="M130 24C130 24 140 18 150 24C140 30 130 24 130 24Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M120 20C120 20 128 12 138 16C130 24 120 20 120 20Z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M115 28C115 28 122 34 132 32C125 26 115 28 115 28Z"
          fill="currentColor"
          opacity="0.15"
        />
      </svg>
    </motion.div>
  );
};

export default BotanicalDivider;
