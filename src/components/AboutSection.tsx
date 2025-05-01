import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";

const aboutCards = [
  {
    title: "My Journey",
    text: `I'm Eman — a passionate Full-Stack Developer who thrives on turning ideas into lovable digital experiences. I started coding with a simple curiosity: "How do websites work?"`,
  },
  {
    title: "What I Do",
    text: `I build scalable apps with Angular, .NET Core, and SQL Server. One of my favorite projects was a bookstore platform with full user experience — from browsing to managing books.`,
  },
  {
    title: "AI & The Future",
    text: `I'm diving into Artificial Intelligence — exploring machine learning, smart recommendations, and how AI can enhance full-stack applications.`,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-theme-lightBlue py-16">
      <div className="container-lg">
        <h2 className="section-title mb-10 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-theme-highlight z-10 relative shadow-xl">
                <img 
                  src="/lovable-uploads/68cff6fd-dd49-4dcd-9d0a-fab1495b1651.png" 
                  alt="Eman Shaltout" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-theme-teal rounded-full -z-10"></div>
            </div>
          </motion.div>

          {/* Animated Text Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {aboutCards.map((card, index) => (
              <motion.div
              className="flex gap-6 overflow-x-auto cursor-grab"
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              {aboutCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="min-w-[280px] bg-white p-6 rounded-lg shadow-md flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-theme-blue mb-2">{card.title}</h3>
                  <p className="text-md text-theme-slate">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
            ))}

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a href="assets/resume.pdf" download className="btn-primary font-bold">
                Download My Resume
              </a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
