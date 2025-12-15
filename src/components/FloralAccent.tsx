interface FloralAccentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const FloralAccent = ({ 
  position = "top-right", 
  size = "md",
  className = "" 
}: FloralAccentProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  };

  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
    "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
    "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
    "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
  };

  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  };

  return (
    <div 
      className={`absolute pointer-events-none ${positionClasses[position]} ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${rotations[position]} text-sage opacity-20`}
      >
        {/* Organic branch with leaves */}
        <path
          d="M10 190C40 160 60 140 80 100C100 60 120 40 160 20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Leaves along the branch */}
        <ellipse cx="40" cy="155" rx="15" ry="8" fill="currentColor" opacity="0.4" transform="rotate(-50 40 155)" />
        <ellipse cx="55" cy="135" rx="12" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-40 55 135)" />
        <ellipse cx="70" cy="115" rx="14" ry="7" fill="currentColor" opacity="0.35" transform="rotate(-35 70 115)" />
        <ellipse cx="90" cy="85" rx="12" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-30 90 85)" />
        <ellipse cx="110" cy="60" rx="13" ry="6" fill="currentColor" opacity="0.35" transform="rotate(-25 110 60)" />
        <ellipse cx="135" cy="40" rx="11" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-20 135 40)" />
        
        {/* Small buds/flowers */}
        <circle cx="60" cy="125" r="4" className="fill-gold" opacity="0.3" />
        <circle cx="100" cy="75" r="5" className="fill-gold" opacity="0.25" />
        <circle cx="145" cy="30" r="4" className="fill-gold" opacity="0.3" />
      </svg>
    </div>
  );
};

export default FloralAccent;
