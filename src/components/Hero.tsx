import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Hero = () => {
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
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div ref={leftRef} className="space-y-8">
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Hi, I am
                </motion.p>
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Navya Pachigolla
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-foreground font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  AI/ML Engineer & Developer
                </motion.p>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Transforming data into intelligent solutions. Passionate about building impactful AI systems and innovative applications.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href="mailto:navyadhrtii@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-lift rounded-full">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://github.com/p-navya/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-lift rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/p-navyaa/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-lift rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            </div>
            
            {/* Right Side - Image */}
            <div ref={rightRef} className="flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-card bg-white">
                  <img
                    src="/Untitled design.png"
                    alt="Navya Pachigolla"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;