
import React, { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  text: string[];
  speed?: number;
  className?: string;
  waitTime?: number;
  deleteSpeed?: number;
  cursorChar?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 70,
  className = "",
  waitTime = 1500,
  deleteSpeed = 40,
  cursorChar = "_"
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Ref to track if component is mounted
  const isMounted = useRef(true);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (isMounted.current) {
        setShowCursor(prev => !prev);
      }
    }, 500);
    
    return () => {
      clearInterval(cursorInterval);
      isMounted.current = false;
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (!text.length) return;
    
    const currentTextToType = text[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < currentTextToType.length) {
        // Still typing
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setCurrentText(currentTextToType.slice(0, currentText.length + 1));
          }
        }, speed);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setIsTyping(false);
          }
        }, waitTime);
      }
    } else {
      if (currentText.length > 0) {
        // Currently deleting
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setCurrentText(currentText.slice(0, currentText.length - 1));
          }
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next text
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setIsTyping(true);
            setCurrentIndex((currentIndex + 1) % text.length);
          }
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, text, speed, waitTime, deleteSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
        {cursorChar}
      </span>
    </span>
  );
};

export default Typewriter;
