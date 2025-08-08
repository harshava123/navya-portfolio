import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AI Warehouse Assistant",
      description: "An intelligent assistant for warehouse management, leveraging AI to optimize inventory tracking, automate stock updates, and provide actionable insights for efficient operations.",
      image: "/public/warehouse.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["AI", "Automation", "Python"],
      featured: true
    },
    {
      title: "AI Documentation Tool",
      description: "A smart tool that uses AI to generate, organize, and maintain technical documentation automatically, improving accuracy and saving time for development teams.",
      image: "/public/ai-doc-tool.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["AI", "NLP", "Automation"],
      featured: true
    },
    {
      title: "Rasoi Reveal",
      description: "An AI system to extract ingredients and quantities from recipes, streamlining ingredient extraction and enabling seamless integration into meal planning tools.",
      image: "/public/rasoi.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["NLP", "Python", "Recipe Analysis"],
      featured: true
    },
    {
      title: "Mental Health Conversational AI",
      description: "A chatbot providing a supportive space for users to express emotions, using GPT-2, Vader Sentiment, and Tkinter to enhance engagement and emotional understanding.",
      image: "/public/mental-health.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["AI", "Chatbot", "NLP"],
      featured: true
    },
    {
      title: "Notifo",
      description: "A note-taking application designed for productivity and personal organization. Features include a user-friendly interface, file locking, and offline access for enhanced privacy and security.",
      image: "/public/notifo.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["Productivity", "Security", "Note-taking"],
      featured: false
    },
    {
      title: "Library Management System",
      description: "A comprehensive system for students and administrators, featuring simplified book search, secure logins, and user-friendly interfaces for efficient library management.",
      image: "/public/library.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["Python", "Django", "HTML/CSS"],
      featured: false
    },
    {
      title: "ProspectCraf",
      description: "A platform that predicts student placements based on academic and experience data, using random forest algorithms and a Flask backend for accurate online predictions.",
      image: "/public/prospectcraf.jpg", // Replace with your actual image path or use a relevant placeholder
      technologies: ["Flask", "Prediction", "Placement"],
      featured: false
    }
  ];
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions that showcase my expertise in AI, machine learning, and full-stack development
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                ref={el => (cardsRef.current[index] = el)}
                key={index}
                className="bg-card rounded-3xl shadow-card card-hover overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="pill bg-secondary text-foreground text-sm font-medium"
                        whileHover={{ scale: 1.1, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">Other Projects</h3>
            <p className="text-muted-foreground">Additional work and experiments</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                ref={el => (cardsRef.current[featuredProjects.length + index] = el)}
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card card-hover"
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 1 : -1,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <h4 className="text-lg font-bold text-foreground mb-3">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-medium"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
