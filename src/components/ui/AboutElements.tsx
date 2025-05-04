import React from "react";
import { User, Smile, HeartHandshake, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const AboutElements = ({ count = 10 }) => {
  const colors = ["text-purple-300", "text-pink-400", "text-orange-300", "text-indigo-200"];
  const minSize = 14;
  const maxSize = 26;

  const aboutIcons = [User, Smile, HeartHandshake, BookOpen];

  const elements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 3,
    icon: aboutIcons[Math.floor(Math.random() * aboutIcons.length)],
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-5">
      {elements.map((el) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={el.id}
            initial={{ opacity: 0.3 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, delay: el.delay }}
            className="absolute"
            style={{ top: el.top, left: el.left }}
          >
            <Icon size={el.size} className={`${el.color} opacity-70`} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutElements;
