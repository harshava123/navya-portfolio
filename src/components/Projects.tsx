import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <section id="projects" className="py-20 bg-white dark:bg-[#18181b]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                ref={el => (cardsRef.current[index] = el)}
                key={index}
                className="rounded-3xl bg-[#ededed] dark:bg-[#23272f] shadow-2xl border border-white/30 dark:border-[#23272f]/40 flex flex-col overflow-hidden"
              >
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-3xl" />
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-semibold border border-primary/20 dark:border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
