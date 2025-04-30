
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "other" | "ai";
  icon: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: "Angular", level: 90, category: "frontend", icon: "🅰️" },
    { name: "SCSS/SASS", level: 85, category: "frontend", icon: "🎨" },
    { name: "TypeScript", level: 85, category: "frontend", icon: "TS" },
    { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
    { name: ".NET Core", level: 90, category: "backend", icon: "🔷" },
    { name: "RESTful APIs", level: 85, category: "backend", icon: "🔄" },
    { name: "SQL Server", level: 90, category: "backend", icon: "🗃️" },
    { name: "Entity Framework", level: 85, category: "backend", icon: "🔷" },
    { name: "Azure", level: 80, category: "other", icon: "☁️" },
    { name: "DevOps", level: 75, category: "other", icon: "🔄" },
    { name: "Machine Learning Basics", level: 70, category: "ai", icon: "🧠" },
    { name: "Prompt Engineering", level: 80, category: "ai", icon: "🤖" },
    { name: "AI Integration", level: 75, category: "ai", icon: "🔌" },
  ];
  
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "ai", name: "AI & Emerging Tech" },
    { id: "other", name: "Other" },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get all skills in the visible section
            const skills = entry.target.querySelectorAll(".skill-item");
            skills.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add("opacity-100");
                skill.classList.remove("opacity-0");
                skill.classList.add("translate-y-0");
                skill.classList.remove("translate-y-10");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
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
                      className="skill-item opacity-0 translate-y-10 transform transition-all duration-500 ease-out card flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-theme-highlight">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-theme-blue rounded-full h-2 mt-2 overflow-hidden">
                        <div 
                          className="skill-bar transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%`, transform: "translateX(-100%)" }}
                          onAnimationEnd={(e) => {
                            e.currentTarget.style.transform = "translateX(0)";
                          }}
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
