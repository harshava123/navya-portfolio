import { useEffect, useRef } from "react";
import gsap from "gsap";
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
            <div className="pill bg-secondary text-foreground text-sm font-medium mb-4 inline-block">
              CONTACT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Reach Us At Anytime</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need any help? We're here to help you with that
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div ref={leftRef} className="space-y-8">
              <div className="bg-card rounded-3xl p-8 shadow-card hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                    <Mail className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Email Us Anytime</h3>
                    <div className="pill bg-green-100 text-green-800 text-xs font-medium mt-2 inline-block">
                      24/7 Support
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team replies within 24 hours. For project inquiries, partnerships, or support, drop us a message!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Project Inquiries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Partnership Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Technical Support</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Details */}
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-semibold text-foreground">navyadhrtii@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <div className="w-5 h-5 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="font-semibold text-foreground">Hyderabad, India</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-6 pt-6 border-t border-border">
                  <a href="https://github.com/p-navya/" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-200 hover-lift">
                    <Github className="h-5 w-5 text-foreground" />
                  </a>
                  <a href="https://www.linkedin.com/in/p-navyaa/" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-200 hover-lift">
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </a>
                  <a href="mailto:navyadhrtii@gmail.com" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-200 hover-lift">
                    <Mail className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div ref={rightRef} className="bg-card rounded-3xl p-8 shadow-card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors duration-200 hover-lift"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;