
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
              Hello! I'm John, a passionate full-stack developer with expertise in Angular, .NET, and SQL Server. My journey in software development began during my university years where I discovered the joy of turning complex problems into elegant solutions.
            </p>
            
            <p className="text-lg mb-4">
              With 5+ years of professional experience, I've had the opportunity to work on diverse projects ranging from enterprise applications to consumer-facing web platforms. I'm driven by a desire to create software that's not only functionally robust but also delightful to use.
            </p>
            
            <p className="text-lg mb-6">
              When I'm not coding, you'll find me hiking mountain trails, experimenting with new cooking recipes, or reading about emerging tech trends. I believe that a well-rounded life makes for a more creative developer.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#skills" className="btn-primary">My Skills</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden relative z-10 mx-auto max-w-sm">
              <div className="aspect-ratio-1 bg-theme-highlight/20 rounded-lg flex items-center justify-center">
                {/* You can replace this with an actual image */}
                <div className="text-8xl flex items-center justify-center h-full w-full border-2 border-theme-highlight rounded-lg">
                  <span className="text-theme-highlight">👨‍💻</span>
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
