
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact">
      <div className="container-lg">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold mb-6 text-theme-lightest">Let's Connect</h3>
            <p className="text-theme-slate mb-8">
              Whether you have a project in mind, job opportunity, or just want to say hi, 
              feel free to reach out. I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <a 
                href="mailto:hello@example.com" 
                className="flex items-center gap-3 text-theme-slate hover:text-theme-highlight transition-colors"
              >
                <Mail size={20} className="text-theme-highlight" />
                <span>hello@example.com</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-theme-slate hover:text-theme-highlight transition-colors"
              >
                <Linkedin size={20} className="text-theme-highlight" />
                <span>linkedin.com/in/johndoe</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-theme-slate hover:text-theme-highlight transition-colors"
              >
                <Github size={20} className="text-theme-highlight" />
                <span>github.com/johndoe</span>
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
