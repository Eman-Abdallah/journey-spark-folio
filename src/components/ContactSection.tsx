
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactElements from "./ui/ContactElements";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };
  
  return (
    <section id="contact"  className="relative z-10">
                 {/* Animated background elements */}
                 <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-theme-highlight/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-theme-teal/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated code elements background using our new component */}
      <ContactElements 
        count={10} 
        colors={["text-theme-highlight", "text-theme-lightest", "text-theme-teal"]} 
        minSize={12}
        maxSize={16}
      />
      <div className="container-lg">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold mb-6 text-theme-lightest">Let's Connect</h3>
            <p className="text-theme-lightest mb-8">
              Whether you're looking for a developer to bring your ideas to life, have a job opportunity, or simply want to connect, 
              feel free to reach out. I'm always excited to discuss innovative ideas and explore new possibilities.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <a 
                href="mailto:emanshalltoot623@gmail.com" 
                className="flex items-center gap-3 text-theme-slate hover:text-theme-highlight transition-colors"
              >
                <Mail size={20} className="text-theme-highlight" />
                <span>emanshalltoot623@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/eman-abdallah-739971230/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-theme-slate hover:text-theme-highlight transition-colors"
              >
                <Linkedin size={20} className="text-theme-highlight" />
                <span>linkedin.com/in/eman-shaltout</span>
              </a>
              <a 
                href="https://github.com/Eman-Abdallah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-theme-slate hover:text-theme-highlight transition-colors"
              >
                <Github size={20} className="text-theme-highlight" />
                <span>github.com/Eman-Abdallah</span>
              </a>
            </div>
          </div>
          
          <div className="glass-card p-6 animate-fadeInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-theme-lightest mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-theme-blue border border-theme-highlight/30 rounded-md p-3 text-theme-lightest focus:outline-none focus:ring-2 focus:ring-theme-highlight"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-theme-lightest mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-theme-blue border border-theme-highlight/30 rounded-md p-3 text-theme-lightest focus:outline-none focus:ring-2 focus:ring-theme-highlight"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-theme-lightest mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-theme-blue border border-theme-highlight/30 rounded-md p-3 text-theme-lightest focus:outline-none focus:ring-2 focus:ring-theme-highlight resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
