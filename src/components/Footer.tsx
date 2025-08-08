import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Navya Pachigolla
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              AI/ML Engineer & Developer passionate about transforming data into intelligent solutions. Building impactful systems with cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/p-navya/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full hover-lift">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/p-navyaa/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full hover-lift">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:navyadhrtii@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full hover-lift">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Navigation</h4>
            <div className="space-y-3">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium">navyadhrtii@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Navya Pachigolla. All rights reserved.</span>
            </div>
            
            <Button 
              variant="ghost" 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground hover-lift"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;