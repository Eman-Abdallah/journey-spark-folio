
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-theme-blue bg-opacity-90 backdrop-blur-sm py-4 shadow-md" : "py-6"}`}>
      <div className="container-lg flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-theme-highlight font-poppins">
          Eman<span className="text-theme-lightest">Shaltout</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-theme-lightest"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
            >
              <span className="text-theme-highlight mr-1">{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button className="btn-outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-theme-lightBlue p-5 flex flex-col space-y-4 shadow-md">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-theme-lightest hover:text-theme-highlight transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="btn-primary w-full" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
