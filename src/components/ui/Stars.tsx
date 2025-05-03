
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface StarsProps {
  count?: number;
  size?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  className?: string;
}

const Stars: React.FC<StarsProps> = ({
  count = 12,
  colors = ["text-theme-highlight", "text-theme-teal", "text-theme-lightest"],
  minSize = 8,
  maxSize = 16,
  className = "",
}) => {
  const starVariants = {
    shine: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2,
      }
    }
  };

  // Create an array of stars with random positions
  const stars = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 5,
    filled: Math.random() > 0.5
  }));

  return (
    <div className={`absolute inset-0 -z-5 ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.3 }}
          animate="shine"
          variants={starVariants}
          transition={{ delay: star.delay }}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          <Star 
            size={star.size} 
            className={`${star.color} opacity-70`} 
            fill={star.filled ? "currentColor" : "none"}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Stars;
