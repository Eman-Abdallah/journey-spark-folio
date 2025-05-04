
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BarChart, ChartBar } from "lucide-react";
import CodeElements from "./ui/CodeElements";
interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai";
  icon: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("frontend");

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
    { id: "ai", name: "AI ", icon: Award },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll(".skill-item");

            skillItems.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add("opacity-100", "translate-y-0");
                skill.classList.remove("opacity-0", "translate-y-10");

                const progressBar = skill.querySelector(".progress-bar") as HTMLElement;
                const maxValue = progressBar?.getAttribute("data-max");

                if (progressBar && maxValue) {
                  progressBar.style.width = `${maxValue}%`;
                }
              }, index * 100);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeTab]);

  // Function to handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
      <section id="skills" className="relative z-10">
            {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-theme-highlight/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-theme-teal/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated code elements background using our new component */}
      <CodeElements 
        count={10} 
        colors={["text-theme-highlight", "text-theme-lightest", "text-theme-teal"]} 
        minSize={10}
        maxSize={16}
      />
      <div className="container-lg">
        <h2 className="section-title">Skills & Expertise</h2>

        <div ref={sectionRef} className="mt-10">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-theme-highlight data-[state=active]:text-theme-blue"
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6  ">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-item opacity-0 translate-y-10 transition-all duration-700 ease-out glass-card rounded-lg p-6 shadow-lg backdrop-blur-sm border border-theme-highlight/10"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-theme-highlight font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full mt-2 bg-theme-blue/30 rounded-full overflow-hidden">
                          <div
                            className="progress-bar h-2 bg-theme-highlight rounded-full transition-all duration-1000 ease-out"
                            style={{ width: "0%" }}
                            data-max={skill.level}
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
