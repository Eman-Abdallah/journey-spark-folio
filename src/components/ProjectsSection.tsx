
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
import jumiaImage from "@/assets/jumia.png";
import todoImage from "@/assets/todo-list.png";
import imgProject from "@/assets/img-project.png";
import bookStore from "@/assets/book-Sore.png";
import eCommerce from "@/assets/e-commarece.png";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with Angular frontend and Firebase backend. Features include user authentication, product management and cart functionality.",
      //image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600",
      image: jumiaImage,
      technologies: ["Angular", "Firebase", "TypeScript", "Bootstrap", "Azure"],
      demoUrl: "https://eman-abdallah.github.io/Jumia-clone/",
      githubUrl: "https://github.com/Eman-Abdallah/Jumia-clone",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Microservices Platform",
      description: "Architected and developed a scalable e-commerce platform using a microservices approach, with each domain feature split into its own service for maintainability and flexibility.",
      image: eCommerce,
      technologies: [".NET Core", "SQL Server", "REST APIs", "JWT","Entity Framework", "Swagger"],
      githubUrl: "https://github.com/Eman-Abdallah/Shopping-App-using-microservices",
      featured: true
    },
    {
      id: 3,
      title: "Online Bookstore API",
      description: "Developed a secure and scalable full-stack application for an online bookstore, implementing full CRUD operations, user authentication, and order processing.",
      image: bookStore,
      technologies: [".NET Core", "ASP.NET Identity", "Entity Framework", "SQL Server", "Swagger","Angular"],
      githubUrl: "https://github.com/Eman-Abdallah/OnlineBookstoreAPI",
      featured: false
    },
    {
      id: 4,
      title: " IMG Project",
      description: "Interactive animated app using GSAP, Angular, and Swiper.",
      image: imgProject,
      technologies: ["Angular", "GSAP Animation", "SCSS"],
      demoUrl: "https://eman-abdallah.github.io/New-Project/",
      githubUrl: "https://github.com/Eman-Abdallah/New-Project",
      featured: false
    },
    {
      id: 5,
      title: " Todo List",
      description: "A feature-rich Todo List application built with Angular and TypeScript, designed to help you manage your tasks efficiently.",
      image:todoImage,
      technologies: ["Angular", "TypeScript", "SCSS"],
      demoUrl: "https://eman-abdallah.github.io/Todo-List/",
      githubUrl: "https://github.com/Eman-Abdallah/Todo-List",
      featured: false
    },
    // {
    //   id: 6,
    //   title: " Drum Machine",
    //   description: "Developed an interactive web-based drum machine that allows users to play and sequence drum sounds using both mouse clicks and keyboard inputs.",
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    //   technologies: ["React", "JavaScript", "CSS","Web Audio API"],
    //   demoUrl: "https://eman-abdallah.github.io/drum-machine/",
    //   githubUrl: "https://github.com/Eman-Abdallah/drum-machine",
    //   featured: false
    // }
  ];
  
  const filters = [
    { id: "all", name: "All" },
    { id: "Angular", name: "Angular" },
    { id: ".NET Core", name: ".NET" },
    { id: "SQL Server", name: "SQL" },
  ];
  
  const filteredProjects = selectedFilter === "all"
    ? projects
    : projects.filter(project => 
        project.technologies.includes(selectedFilter)
      );
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projects = entry.target.querySelectorAll(".project-card");
            projects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add("opacity-100");
                project.classList.remove("opacity-0");
                project.classList.add("translate-y-0");
                project.classList.remove("translate-y-10");
              }, index * 200);
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
  }, [selectedFilter]); // Re-run when filter changes
  
  return (
    <section id="projects" className="bg-theme-lightBlue">
      <div className="container-lg">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {filters.map(filter => (
            <Button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              className={selectedFilter === filter.id 
                ? "bg-theme-highlight text-theme-blue hover:bg-theme-highlight/90" 
                : "border-theme-highlight text-theme-highlight hover:bg-theme-highlight/10"
              }
            >
              {filter.name}
            </Button>
          ))}
        </div>
        
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card opacity-0 translate-y-10 transform transition-all duration-500 ease-out"
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="project-card-overlay">
                  <h3 className="text-xl font-bold mb-2 text-theme-highlight">{project.title}</h3>
                  <p className="text-theme-slate mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs bg-theme-blue px-2 py-1 rounded text-theme-highlight border border-theme-highlight/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-theme-lightest hover:text-theme-highlight transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-theme-lightest hover:text-theme-highlight transition-colors"
                        aria-label="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-outline">
            <a 
              href="https://github.com/Eman-Abdallah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Code size={18} />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
