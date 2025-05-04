
import React from "react";
import { motion } from "framer-motion";
import { Triangle, Circle, Square, Hexagon } from "lucide-react";

export type ShapeType = "waves" | "circles" | "triangles" | "squares" | "hexagons" | "dots" | "grid";

interface ShapeBackgroundProps {
  type: ShapeType;
  color?: string;
  secondaryColor?: string;
  className?: string;
  count?: number;
}

const ShapeBackground: React.FC<ShapeBackgroundProps> = ({
  type,
  color = "text-theme-highlight/20",
  secondaryColor = "text-theme-lightest/10",
  className = "",
  count = 10
}) => {
  // Create random positions for the shapes
  const shapes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * 16) + 8,
    rotate: Math.floor(Math.random() * 360),
    delay: Math.random() * 5,
    scale: Math.random() * 0.5 + 0.5,
    color: Math.random() > 0.5 ? color : secondaryColor
  }));

  const renderShapes = () => {
    switch (type) {
      case "waves":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg width="100%" height="100%" className="absolute inset-0">
              {[1, 2, 3].map((i) => (
                <motion.path
                  key={i}
                  d={`M-100,${40 * i} C150,${80 * i} 350,${20 * i} 500,${50 * i} L500,500 L0,500 Z`}
                  className={i % 2 === 0 ? color : secondaryColor}
                  initial={{ opacity: 0.7, y: 20 }}
                  animate={{ 
                    opacity: [0.5, 0.7, 0.5], 
                    y: [20, 10, 20],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 10 + i * 2,
                    ease: "easeInOut"
                  }}
                  fill="currentColor"
                  fillOpacity="0.2"
                />
              ))}
            </svg>
          </div>
        );
      
      case "circles":
        return shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ top: shape.top, left: shape.left }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [shape.scale, shape.scale * 1.1, shape.scale],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4 + shape.delay,
              delay: shape.delay
            }}
          >
            <Circle size={shape.size} className={shape.color} />
          </motion.div>
        ));
      
      case "triangles":
        return shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ top: shape.top, left: shape.left }}
            initial={{ opacity: 0, rotate: shape.rotate }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              rotate: [shape.rotate, shape.rotate + 15, shape.rotate]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5 + shape.delay,
              delay: shape.delay
            }}
          >
            <Triangle size={shape.size} className={shape.color} />
          </motion.div>
        ));
      
      case "squares":
        return shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ top: shape.top, left: shape.left }}
            initial={{ opacity: 0, rotate: shape.rotate }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              rotate: [shape.rotate, shape.rotate + 20, shape.rotate]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6 + shape.delay,
              delay: shape.delay
            }}
          >
            <Square size={shape.size} className={shape.color} />
          </motion.div>
        ));
      
      case "hexagons":
        return shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ top: shape.top, left: shape.left }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [shape.scale, shape.scale * 1.1, shape.scale],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7 + shape.delay,
              delay: shape.delay
            }}
          >
            <Hexagon size={shape.size} className={shape.color} />
          </motion.div>
        ));
      
      case "dots":
        return shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ top: shape.top, left: shape.left }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [shape.scale, shape.scale * 1.2, shape.scale],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4 + shape.delay,
              delay: shape.delay
            }}
          >
            <div 
              className={`rounded-full ${shape.color}`}
              style={{ width: shape.size / 2, height: shape.size / 2 }}
            ></div>
          </motion.div>
        ));
        
      case "grid":
        const gridCells = 12;
        const cellSize = 100 / gridCells;
        
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg width="100%" height="100%" className="absolute inset-0">
              {Array.from({ length: gridCells + 1 }).map((_, i) => (
                <React.Fragment key={`grid-${i}`}>
                  <motion.line 
                    x1={`${i * cellSize}%`}
                    y1="0%"
                    x2={`${i * cellSize}%`}
                    y2="100%"
                    stroke="currentColor"
                    strokeWidth="1"
                    className={i % 2 === 0 ? color : secondaryColor}
                    initial={{ opacity: 0.1 }}
                    animate={{ 
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3 + i % 3,
                      delay: i * 0.2
                    }}
                  />
                  
                  {/* Horizontal lines */}
                  {i < gridCells && (
                    <motion.line 
                      x1="0%"
                      y1={`${i * cellSize}%`}
                      x2="100%"
                      y2={`${i * cellSize}%`}
                      stroke="currentColor"
                      strokeWidth="1"
                      className={i % 2 === 0 ? secondaryColor : color}
                      initial={{ opacity: 0.1 }}
                      animate={{ 
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 3 + i % 3,
                        delay: i * 0.3
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {renderShapes()}
    </div>
  );
};

export default ShapeBackground;
