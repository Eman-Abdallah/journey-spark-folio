
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CodeElements from "@/components/ui/CodeElements";
import ShapeBackground from "@/components/ui/ShapeBackground";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="relative">
          <ShapeBackground 
            type="circles"
            color="text-theme-highlight" 
            secondaryColor="text-theme-lightest"
            count={12}
          />
          <AboutSection />
        </div>
        
        <div className="relative">
          <ShapeBackground 
            type="grid"
            color="text-theme-teal/10" 
            secondaryColor="text-theme-slate/8"
          />
          <SkillsSection />
        </div>
        
        <div className="relative">
          <ShapeBackground 
            type="triangles"
            color="text-theme-highlight/15" 
            secondaryColor="text-theme-lightest/10"
            count={15}
          />
          <ProjectsSection />
        </div>
        
        <div className="relative">
          <ShapeBackground 
            type="hexagons"
            color="text-theme-highlight/10" 
            secondaryColor="text-theme-lightest/8"
            count={10}
          />
          <ContactSection />
        </div>
      </main>
      
      <div className="relative">
        <ShapeBackground 
          type="waves"
          color="text-theme-highlight/15" 
          secondaryColor="text-theme-teal/10"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
