import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Warehouse Assistant",
      description: "An intelligent assistant for warehouse management, leveraging AI to optimize inventory tracking, automate stock updates, and provide actionable insights for efficient operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
      technologies: ["AI", "Automation", "Python", "Machine Learning"],
      github: "https://github.com/p-navya/ai-warehouse-assistant",
      demo: "#",
      featured: true,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "AI Documentation Tool",
      description: "A smart tool that uses AI to generate, organize, and maintain technical documentation automatically, improving accuracy and saving time for development teams.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
      technologies: ["AI", "NLP", "Automation", "GPT"],
      github: "https://github.com/p-navya/ai-documentation-tool",
      demo: "#",
      featured: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Rasoi Reveal",
      description: "An AI system to extract ingredients and quantities from recipes, streamlining ingredient extraction and enabling seamless integration into meal planning tools.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
      technologies: ["NLP", "Python", "Recipe Analysis", "ML"],
      github: "https://github.com/p-navya/rasoi-reveal",
      demo: "#",
      featured: true,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Mental Health Conversational AI",
      description: "A chatbot providing a supportive space for users to express emotions, using GPT-2, Vader Sentiment, and Tkinter to enhance engagement and emotional understanding.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
      technologies: ["AI", "Chatbot", "NLP", "Sentiment Analysis"],
      github: "https://github.com/p-navya/mental-health-ai",
      demo: "#",
      featured: true,
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Notifo",
      description: "A note-taking application designed for productivity and personal organization. Features include a user-friendly interface, file locking, and offline access for enhanced privacy and security.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&crop=center",
      technologies: ["React", "Node.js", "Security", "Productivity"],
      github: "https://github.com/p-navya/notifo",
      demo: "#",
      featured: false,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Library Management System",
      description: "A comprehensive system for students and administrators, featuring simplified book search, secure logins, and user-friendly interfaces for efficient library management.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",
      technologies: ["Python", "Django", "HTML/CSS", "SQLite"],
      github: "https://github.com/p-navya/library-management",
      demo: "#",
      featured: false,
      gradient: "from-teal-500/20 to-blue-500/20"
    },
    {
      title: "ProspectCraf",
      description: "A platform that predicts student placements based on academic and experience data, using random forest algorithms and a Flask backend for accurate online predictions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      technologies: ["Flask", "Machine Learning", "Random Forest", "Prediction"],
      github: "https://github.com/p-navya/prospectcraf",
      demo: "#",
      featured: false,
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Container variants for fast staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Card variants for fast split animations (featured projects)
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80, // Split from left and right
      y: 30,
      scale: 0.9
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 30,
        duration: 0.4
      }
    }
  };

  // Variants for other projects - Fast Deck of Cards Animation
  const otherCardVariants = {
    hidden: (index: number) => ({
      opacity: 0.7,
      x: -30 + (index * 1.5), // Slight horizontal offset for stacking
      y: -15 + (index * 2), // Slight vertical offset for stacking
      rotate: -3 + (index * 1), // Slight rotation for deck effect
      scale: 0.95 - (index * 0.005), // Slightly smaller for depth
      zIndex: otherProjects.length - index, // Stack order
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Container variants for fast deck animation
  const otherContainerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1, // Faster stagger for quick card dealing
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="pill bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-sm font-medium border border-primary/30 backdrop-blur-sm">
                FEATURED WORK
              </span>
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovation in Action
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cutting-edge AI solutions and intelligent applications that push the boundaries of what's possible
            </motion.p>
          </div>
          
          {/* Featured Projects */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                ref={el => (cardsRef.current[index] = el)}
                key={index}
                className={`bg-gradient-to-br from-card to-card/50 rounded-3xl shadow-card card-hover overflow-hidden border border-primary/10 backdrop-blur-sm relative group`}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    whileHover={{ opacity: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-4 w-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="h-4 w-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="pill bg-gradient-to-r from-secondary/50 to-secondary/30 text-foreground text-sm font-medium border border-primary/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 2 : -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  {/* Project Links */}
                  <motion.div 
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full text-sm font-medium hover:from-primary/30 hover:to-primary/20 transition-all duration-300 border border-primary/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/50 to-secondary/30 text-foreground rounded-full text-sm font-medium hover:from-secondary/60 hover:to-secondary/40 transition-all duration-300 border border-primary/20 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Other Projects */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">More Innovations</h3>
            <p className="text-muted-foreground">Exploring new technologies and creative solutions</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={otherContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                ref={el => (cardsRef.current[featuredProjects.length + index] = el)}
                key={index}
                className="bg-gradient-to-br from-card to-card/50 rounded-2xl shadow-card card-hover border border-primary/10 backdrop-blur-sm group relative overflow-hidden"
                variants={otherCardVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 1 : -1,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                }}
              >
                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    whileHover={{ opacity: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-3 w-3 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="h-3 w-3 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  {/* Gradient overlay for content area */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-foreground mb-3">{project.title}</h4>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-secondary/50 to-secondary/30 text-foreground text-xs font-medium border border-primary/20 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full text-xs font-medium hover:from-primary/30 hover:to-primary/20 transition-all duration-300 border border-primary/30 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-secondary/50 to-secondary/30 text-foreground rounded-full text-xs font-medium hover:from-secondary/60 hover:to-secondary/40 transition-all duration-300 border border-primary/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-3 w-3" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
