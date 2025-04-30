
import { useEffect, useRef } from "react";
import { ArrowDown, Code, Database, Server } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    
    const startAnimation = () => {
      let iteration = 0;
      const originalText = "Full-Stack Developer";
      
      if (titleRef.current) {
        clearInterval(interval as NodeJS.Timeout);
        
        interval = setInterval(() => {
          if (titleRef.current) {
            titleRef.current.innerText = originalText
              .split("")
              .map((letter, index) => {
                if (letter === " " || letter === "-") return letter;
                if (index < iteration) {
                  return originalText[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");
            
            if (iteration >= originalText.length) {
              clearInterval(interval as NodeJS.Timeout);
            }
            
            iteration += 1 / 2;
          }
        }, 40);
      }
    };
    
    // Run animation on load
    startAnimation();
    
    // Run animation on hover
    titleRef.current?.addEventListener("mouseover", startAnimation);
    
    return () => {
      if (interval) clearInterval(interval);
      titleRef.current?.removeEventListener("mouseover", startAnimation);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6">
      <div className="container-lg">
        <div className="max-w-3xl animate-fadeIn">
          <p className="text-theme-highlight mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-theme-lightest">
            Eman Shaltout
          </h1>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-theme-slate mb-6"
          >
            Full-Stack Developer
          </h2>
          <p className="text-xl text-theme-slate max-w-lg mb-8">
            I build exceptional and accessible digital experiences for the web. 
            Specializing in Angular, .NET, and SQL Server with a passion for creating beautiful and functional applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className="flex gap-6 mt-10">
            <div className="flex items-center gap-2">
              <Code size={20} className="text-theme-highlight" />
              <span className="text-theme-slate">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <Server size={20} className="text-theme-highlight" />
              <span className="text-theme-slate">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-theme-highlight" />
              <span className="text-theme-slate">Database</span>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} className="text-theme-highlight" />
      </a>
      
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <div className="h-28 w-px bg-theme-slate mx-auto"></div>
        <a 
          href="https://github.com/Eman-Abdallah" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-theme-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a 
          href="https://linkedin.com/in/eman-shaltot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-theme-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <div className="h-28 w-px bg-theme-slate mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
