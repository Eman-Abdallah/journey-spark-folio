
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="bg-theme-lightBlue">
      <div className="container-lg">
        <h2 className="section-title">About Me</h2>
        
        <div ref={sectionRef} className="opacity-0 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-4">
              Hello! I'm Eman, a passionate Frontend Developer with expertise in creating beautiful and responsive web experiences. My journey in web development started with a curiosity about how websites work and evolved into a career creating engaging digital interfaces.
            </p>
            
            <p className="text-lg mb-4">
              With a strong foundation in Angular and modern frontend technologies, I've worked on various projects that combine functionality with aesthetic appeal. I believe in creating websites that not only look good but also provide intuitive user experiences.
            </p>
            
            <p className="text-lg mb-6">
              When I'm not coding, I enjoy exploring new design trends, learning new technologies, and finding inspiration in art and nature. I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#skills" className="btn-primary">My Skills</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden relative z-10 mx-auto max-w-sm">
              <div className="aspect-ratio-1 bg-theme-highlight/20 rounded-lg flex items-center justify-center">
                {/* You can replace this with an actual image of yourself */}
                <div className="text-8xl flex items-center justify-center h-full w-full border-2 border-theme-highlight rounded-lg">
                  <span className="text-theme-highlight">👩‍💻</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-theme-highlight rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
