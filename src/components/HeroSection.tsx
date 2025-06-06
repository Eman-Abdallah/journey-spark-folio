import React, { useEffect, useState, useRef } from "react";
import { ArrowDown, Code, Sparkles, Server, Star, BrainCircuit } from "lucide-react";
import Typewriter from "./ui/Typewriter";
import { motion } from "framer-motion";
import CodeElements from "./ui/CodeElements";
const HeroSection = () => {
  const specializations = [
    "Full-Stack ", 
    "Angular Expert", 
    ".NET Developer", 
    "UI/UX Designer", 
    "AI Enthusiast",
  ];
  
  const floatingVariants = {
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  
  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.9, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 overflow-hidden">
            {/* Animated code elements background using our new component */}
            <CodeElements 
        count={10} 
        colors={["text-theme-highlight", "text-theme-lightest", "text-theme-teal"]} 
        minSize={10}
        maxSize={16}
      />

      <div className="container-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl hero-sm"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles size={18} className="text-theme-highlight" />
            </motion.div>
            <p className="text-theme-highlight font-mono">Hi, my name is</p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-2 text-theme-lightest relative"
          >
            Eman Shaltout
            <motion.div 
              className="absolute -right-8 -top-8 opacity-20 hidden md:block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Star size={36} className="text-theme-highlight" fill="currentColor" />
            </motion.div>
            
            {/* Additional star decoration */}
            <motion.div 
              className="absolute -left-12 bottom-2 opacity-30 hidden md:block"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              <Star size={20} className="text-theme-highlight" fill="currentColor" />
            </motion.div>
          </motion.h1>

          <div className="h-[56px] md:h-[72px] flex items-center mb-6">
            <Typewriter 
              text={specializations}
              speed={80}
              waitTime={1800}
              deleteSpeed={50}
              cursorChar="|"
              className="text-4xl md:text-6xl font-bold text-theme-slate inline-block"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl text-theme-lightest max-w-lg mb-8 desc-text relative"
          >
            I craft impactful, accessible web applications with a strong focus on performance and user experience. 
            Specializing in Angular, .NET, and SQL Server — driven by a deep passion for clean code, modern design, and AI-powered innovation.
            <motion.span 
              className="absolute -left-6 top-1/2 h-12 w-1 bg-gradient-to-b from-theme-highlight to-transparent rounded-full hidden md:block"
              animate={{
                height: ["3rem", "3.5rem", "3rem"],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-theme-darkPink transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </a>
            <a href="#contact" className="btn-outline relative overflow-hidden group">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-theme-highlight bg-opacity-10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex gap-6 mt-10"
          >
            <motion.div 
              className="flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                
                animate="float"
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="rounded-full p-1 bg-theme-highlight/10"
                >
                  <Code size={20} className="text-theme-highlight" />
                </motion.div>
              </motion.div>
              <span className="text-theme-lightest">Frontend</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate="float"
                
                transition={{ delay: 1 }}
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="rounded-full p-1 bg-theme-highlight/10"
                >
                  <Server size={20} className="text-theme-highlight" />
                </motion.div>
              </motion.div>
              <span className="text-theme-lightest">Backend</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate="float"
               
                transition={{ delay: 1 }}
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="rounded-full p-1 bg-theme-highlight/10"
                >
                  <BrainCircuit size={20} className="text-theme-highlight" />
                </motion.div>
              </motion.div>
              <span className="text-theme-lightest">AI</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} className="text-theme-highlight" />
      </motion.a>
      
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "7rem", opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="w-px bg-theme-slate mx-auto"
        ></motion.div>
        
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          href="https://github.com/Eman-Abdallah" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-theme-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all"
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </motion.a>
        
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          href="https://www.linkedin.com/in/eman-abdallah-739971230" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-theme-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all"
          whileHover={{ scale: 1.15, rotate: -5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </motion.a>
        
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "7rem", opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="w-px bg-theme-slate mx-auto"
        ></motion.div>
      </div>

      {/* Enhanced floating shapes with animation */}
      <motion.div 
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-theme-highlight/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 bg-theme-teal/10 rounded-full blur-lg hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      ></motion.div>
      
      {/* Additional code icon in the bottom right corner */}
      <motion.div 
        className="absolute bottom-24 right-24 hidden md:block"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Code size={24} className="text-theme-highlight opacity-50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
