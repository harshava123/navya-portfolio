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
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-28 md:pt-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <motion.p 
              className="text-lg text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Hi, I am
            </motion.p>
            
            {/* Main Name with Typography Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-8"
            >
              <h1 className="text-responsive-xl font-bold leading-tight text-shadow-soft">
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <motion.span 
                    className="inline-block text-foreground letter-spacing-wide"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  >
                    Navya
                  </motion.span>
                </motion.div>
                
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <motion.span 
                    className="inline-block gradient-text letter-spacing-wide"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                  >
                    Pachigolla
                  </motion.span>
                </motion.div>
              </h1>
              
              {/* Single elegant underline */}
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto mt-6"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "6rem", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              />
              
              {/* Subtle decorative dots */}
              <motion.div
                className="flex justify-center space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <motion.div
                  className="w-2 h-2 bg-primary/40 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-primary/60 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                />
                <motion.div
                  className="w-2 h-2 bg-primary/40 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="text-responsive-lg text-foreground font-semibold relative mb-6"
            >
              <motion.div
                className="overflow-hidden inline-block"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
              >
                <span className="whitespace-nowrap">AI/ML Engineer & Developer</span>
              </motion.div>
              <motion.div
                className="inline-block w-0.5 h-6 bg-primary ml-2 align-middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 2.6,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              Transforming data into intelligent solutions. Passionate about building impactful AI systems and innovative applications that make a real difference.
            </motion.p>
            
            {/* Call to Action */}
            <motion.div 
              className="flex flex-col gap-8 justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.2 }}
            >
              {/* Get In Touch Button */}
              <motion.div className="w-full flex justify-center">
                <motion.a 
                  href="mailto:navyadhrtii@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden inline-block"
                >
                  <Button className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 px-8 py-3 rounded-full font-semibold hover-lift relative z-10 border border-primary/20 shadow-lg">
                    <span className="relative z-10">Get In Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.a>
              </motion.div>
              
              {/* Social Media Icons */}
              <motion.div 
                className="flex gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.6 }}
              >
                <motion.a 
                  href="https://github.com/p-navya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group"
                >
                  <Button variant="outline" size="icon" className="hover-lift rounded-full border-2 border-muted-foreground/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 shadow-md w-12 h-12">
                    <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </Button>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/p-navyaa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: -5, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group"
                >
                  <Button variant="outline" size="icon" className="hover-lift rounded-full border-2 border-muted-foreground/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 shadow-md w-12 h-12">
                    <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 6.2 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-muted-foreground/60 rounded-full flex justify-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;