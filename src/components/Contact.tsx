import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="pill bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-sm font-medium mb-4 inline-block border border-primary/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              CONTACT
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Build Something Amazing
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to collaborate on your next AI project? I'm always excited to discuss innovative ideas and opportunities.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div ref={leftRef} className="space-y-8">
              <motion.div 
                className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 shadow-card card-hover border border-primary/10 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4 border border-primary/30"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
                    <motion.div 
                      className="pill bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-medium mt-2 inline-block border border-green-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Available for Projects
                    </motion.div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm passionate about AI/ML projects and always open to discussing innovative ideas. Whether it's a collaboration, freelance opportunity, or just a tech chat - let's connect!
                </p>
                
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/20 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    <span className="text-muted-foreground text-sm">AI/ML Project Collaborations</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/20 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Freelance Development Work</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/20 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Tech Discussions & Mentoring</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Contact Details */}
              <motion.div 
                className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 shadow-card card-hover border border-primary/10 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-secondary/20 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/30"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-semibold text-foreground">navyadhrtii@gmail.com</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-secondary/20 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/30"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    </motion.div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="font-semibold text-foreground">Hyderabad, India</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex space-x-4 mt-6 pt-6 border-t border-border/50">
                  <motion.a 
                    href="https://github.com/p-navya/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover-lift border border-primary/20 backdrop-blur-sm group"
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/p-navyaa/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover-lift border border-primary/20 backdrop-blur-sm group"
                    whileHover={{ scale: 1.1, rotate: -5, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                  <motion.a 
                    href="mailto:navyadhrtii@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover-lift border border-primary/20 backdrop-blur-sm group"
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
            
            {/* Right Side - Contact Form */}
            <motion.div 
              ref={rightRef} 
              className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 shadow-card card-hover border border-primary/10 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Start a Conversation
              </motion.h3>
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30">
                    <option value="">Select project type</option>
                    <option value="ai-ml">AI/ML Development</option>
                    <option value="web-dev">Web Development</option>
                    <option value="automation">Automation Solutions</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    placeholder="Tell me about your project idea, requirements, or just say hello!"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none hover:border-primary/30"
                  />
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover-lift border border-primary/20 shadow-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;