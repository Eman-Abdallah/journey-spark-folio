import React from "react";
import { Wrench, Monitor, FolderGit2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const ProjectElements = ({ count = 12 }) => {
  const colors = ["text-blue-400", "text-green-300", "text-indigo-300", "text-yellow-300"];
  const minSize = 14;
  const maxSize = 28;

  const projectIcons = [Wrench, Monitor, FolderGit2, Rocket];

  const elements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 4,
    icon: projectIcons[Math.floor(Math.random() * projectIcons.length)],
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-5">
      {elements.map((el) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={el.id}
            initial={{ opacity: 0.2 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: el.delay }}
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

export default ProjectElements;
