
import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply animation class to the target
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("translate-y-0");
          entry.target.classList.remove("translate-y-10");
          // Once animation is triggered, no need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px" }
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
        
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transform transition-all duration-700 ease-out grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1">
          <p className="text-lg mb-4">
            Hello! I'm Eman — a passionate Full-Stack Developer who thrives on turning ideas into lovable digital experiences. My journey into coding began with a simple curiosity: "How do websites actually work?" That spark led me to explore the world of frontend and backend development, and I've never looked back since.
          </p>

          <p className="text-lg mb-4">
            I specialize in building responsive, scalable applications using Angular, .NET Core, and SQL Server. Whether it's crafting a smooth user interface or designing robust backend APIs, I love creating solutions that are both beautiful and functional. One of my favorite recent projects involved building a book store platform where users could browse, purchase, and manage books — it was both a creative and technical challenge that I really enjoyed.
          </p>

          <p className="text-lg mb-4">
            Lately, I've also been diving into the exciting world of <strong>Artificial Intelligence</strong>. I'm particularly fascinated by how AI can enhance user experience, automate processes, and solve complex problems. I'm currently exploring areas like <strong>machine learning integration, smart recommendation systems</strong>, and how AI can complement full-stack applications.
          </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#skills" className="btn-primary">My Skills</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-theme-highlight z-10 relative">
                <img 
                  src="/lovable-uploads/68cff6fd-dd49-4dcd-9d0a-fab1495b1651.png" 
                  alt="Eman Shaltout" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-theme-teal rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
