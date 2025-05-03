
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Stars from "@/components/ui/Stars";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="relative">
          <Stars 
            count={8} 
            colors={["text-theme-highlight", "text-theme-lightest"]} 
            className="opacity-30"
          />
          <AboutSection />
        </div>
        
        <div className="relative">
          <Stars 
            count={10} 
            colors={["text-theme-teal", "text-theme-slate"]} 
            className="opacity-30"
          />
          <SkillsSection />
        </div>
        
        <div className="relative">
          <Stars 
            count={12} 
            colors={["text-theme-highlight", "text-theme-darkPink"]} 
            className="opacity-30"
          />
          <ProjectsSection />
        </div>
        
        <div className="relative">
          <Stars 
            count={10} 
            colors={["text-theme-highlight", "text-theme-lightest"]} 
            className="opacity-30"
          />
          <ContactSection />
        </div>
      </main>
      
      <div className="relative">
        <Stars 
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
