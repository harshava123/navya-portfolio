import GradientCard from "@/components/ui/gradient-card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming data into intelligent solutions that make a real impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div ref={leftRef} className="space-y-8">
              <motion.div 
                className="bg-card rounded-3xl p-8 shadow-card card-hover"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Driven and detail-oriented final year B.Tech student specializing in <span className="text-foreground font-semibold">Artificial Intelligence and Machine Learning</span>, with a strong command of Python and hands-on internship experience in real-world automation projects.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Strong foundation in <span className="text-foreground font-semibold">full-stack development and AI tools</span>, with a passion for building impactful, intelligent systems. Adept at problem-solving, collaborating in fast-paced environments, and committed to continuous learning from industry practices.
                </p>
              </motion.div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-card rounded-2xl p-6 text-center shadow-card card-hover"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-4xl font-bold text-foreground mb-2">1+</div>
                  <div className="text-sm font-semibold text-muted-foreground">Years of Experience</div>
                </motion.div>
                <motion.div 
                  className="bg-card rounded-2xl p-6 text-center shadow-card card-hover"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-4xl font-bold text-foreground mb-2">10+</div>
                  <div className="text-sm font-semibold text-muted-foreground">Projects Completed</div>
                </motion.div>
              </div>
            </div>
            
            {/* Right Side - Info Card */}
            <div ref={rightRef} className="flex justify-center">
              <motion.div 
                className="bg-card rounded-3xl p-8 shadow-card max-w-sm w-full card-hover"
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 3,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">NP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Navya Pachigolla</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-secondary">
                    <Mail className="h-5 w-5 text-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-semibold text-sm text-foreground">navyadhrtii@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-secondary">
                    <div className="h-5 w-5 bg-primary rounded-full"></div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="font-semibold text-sm text-foreground">Hyderabad, India</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-border">
                  <a href="https://github.com/p-navya/" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-200">
                    <Github className="h-5 w-5 text-foreground" />
                  </a>
                  <a href="https://www.linkedin.com/in/p-navyaa/" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-200">
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </a>
                  <a href="mailto:navyadhrtii@gmail.com" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-200">
                    <Mail className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;