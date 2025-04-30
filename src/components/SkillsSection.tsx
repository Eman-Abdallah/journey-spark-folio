
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "other";
  icon: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: "Angular", level: 90, category: "frontend", icon: "🅰️" },
    { name: "React", level: 80, category: "frontend", icon: "⚛️" },
    { name: "TypeScript", level: 85, category: "frontend", icon: "TS" },
    { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
    { name: ".NET Core", level: 90, category: "backend", icon: "🔷" },
    { name: "C#", level: 90, category: "backend", icon: "C#" },
    { name: "ASP.NET", level: 85, category: "backend", icon: "🔷" },
    { name: "RESTful APIs", level: 85, category: "backend", icon: "🔄" },
    { name: "SQL Server", level: 90, category: "database", icon: "🗃️" },
    { name: "Entity Framework", level: 85, category: "database", icon: "🔷" },
    { name: "Azure", level: 80, category: "other", icon: "☁️" },
    { name: "DevOps", level: 75, category: "other", icon: "🔄" },
  ];
  
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "other", name: "Other" },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const skills = entry.target.querySelectorAll(".skill-item");
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add("animate-fadeIn");
            }, index * 100);
          });
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
    <section id="skills">
      <div className="container-lg">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div ref={sectionRef} className="grid gap-10">
          {categories.map((category) => (
            <div key={category.id} className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-theme-highlight">
                {category.name}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="skill-item opacity-0 card flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-theme-highlight">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-theme-blue rounded-full h-2 mt-2">
                        <div 
                          className="skill-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
