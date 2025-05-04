
import React from "react";
import { Code, FileCode, MessageSquareCode, CodeXml } from "lucide-react";
import { motion } from "framer-motion";

interface CodeElementsProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  className?: string;
}

const CodeElements: React.FC<CodeElementsProps> = ({
  count = 12,
  colors = ["text-theme-highlight", "text-theme-teal", "text-theme-lightest"],
  minSize = 8,
  maxSize = 16,
  className = "",
}) => {
  const codeIconVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2,
      }
    }
  };

  // Create an array of code icons with random positions
  const elements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 5,
    // Choose a random code-related icon
    iconType: Math.floor(Math.random() * 4)
  }));

  const getIconComponent = (iconType: number, size: number, className: string) => {
    switch (iconType) {
      case 0:
        return <Code size={size} className={className} />;
      case 1:
        return <FileCode size={size} className={className} />;
      case 2:
        return <MessageSquareCode size={size} className={className} />;
      case 3:
        return <CodeXml size={size} className={className} />;
      default:
        return <Code size={size} className={className} />;
    }
  };

  return (
    <div className={`pointer-events-none absolute inset-0 -z-5 ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0.3 }}
          animate="animate"
          variants={codeIconVariants}
          transition={{ delay: element.delay }}
          className="absolute"
          style={{
            top: element.top,
            left: element.left,
          }}
        >
          {getIconComponent(element.iconType, element.size, `${element.color} opacity-70`)}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeElements;
