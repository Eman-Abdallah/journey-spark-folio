import React from "react";
import { Circle, Heart, Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactElements = ({ count = 10 }) => {
  const colors = ["text-pink-300", "text-sky-300", "text-teal-200", "text-yellow-200"];
  const minSize = 12;
  const maxSize = 24;

  const contactIcons = [Circle, Heart, Star, MessageSquare];

  const elements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 3,
    icon: contactIcons[Math.floor(Math.random() * contactIcons.length)],
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-5">
      {elements.map((el) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={el.id}
            initial={{ opacity: 0.3 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 4, delay: el.delay }}
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

export default ContactElements;
