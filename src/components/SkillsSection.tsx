
import { useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Award, BarChart, ChartBar } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai";
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
    { name: "Machine Learning Basics", level: 70, category: "ai", icon: "🧠" },
    { name: "Prompt Engineering", level: 80, category: "ai", icon: "🤖" },
    { name: "AI Integration", level: 75, category: "ai", icon: "🔌" },
  ];
  
  const categories = [
    { id: "frontend", name: "Frontend", icon: ChartBar },
    { id: "backend", name: "Backend", icon: BarChart },
    { id: "ai", name: "AI & Emerging Tech", icon: Award },
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
                
                // Also animate the progress bars
                const progressBar = skill.querySelector(".progress-bar");
                if (progressBar) {
                  progressBar.classList.add("progress-animated");
                }
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
    <section id="skills" className="bg-theme-lightBlue">
      <div className="container-lg">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div ref={sectionRef} className="mt-10">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-theme-highlight data-[state=active]:text-theme-blue"
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className="skill-item opacity-0 translate-y-10 transform transition-all duration-500 ease-out bg-theme-blue/20 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-theme-highlight/10"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-theme-highlight font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full mt-2">
                          <Progress 
                            value={0} 
                            max={100}
                            className="progress-bar h-2 bg-theme-blue/30"
                            data-max={skill.level}
                            style={{
                              "--skill-level": `${skill.level}%`,
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
