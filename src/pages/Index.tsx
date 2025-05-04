
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CodeElements from "@/components/ui/CodeElements";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="relative">
          <CodeElements 
            count={12} 
            colors={["text-theme-highlight", "text-theme-lightest"]} 
            className="opacity-70"
            minSize={10}
            maxSize={12}
          />
          <AboutSection />
        </div>
        
        <div className="relative">
          <CodeElements 
            count={10} 
            colors={["text-theme-teal", "text-theme-slate"]} 
            className="opacity-30"
          />
          <SkillsSection />
        </div>
        
        <div className="relative">
          <CodeElements 
            count={12} 
            colors={["text-theme-highlight", "text-theme-lightest"]} 
            className="opacity-30"
          />
          <ProjectsSection />
        </div>
        
        <div className="relative">
          <CodeElements 
            count={10} 
            colors={["text-theme-highlight", "text-theme-lightest"]} 
            className="opacity-30"
          />
          <ContactSection />
        </div>
      </main>
      
      <div className="relative">
        <CodeElements 
          count={6} 
          colors={["text-theme-highlight", "text-theme-lightest"]} 
          minSize={6}
          maxSize={10}
          className="opacity-20"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
