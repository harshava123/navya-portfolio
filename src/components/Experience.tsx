import { useEffect, useRef } from "react";
import gsap from "gsap";

const Experience = () => {
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground">
              My journey in technology and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div ref={leftRef} className="bg-card rounded-3xl p-8 shadow-card hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                  <div className="text-xl">🎓</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <div className="pill bg-secondary text-foreground text-sm font-medium mb-2 inline-block">
                    2022 - 2026
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">B.Tech in AI & Machine Learning</h4>
                  <p className="text-muted-foreground mb-3">MallaReddy University, Hyderabad</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pursuing B.Tech specialized in Artificial Intelligence & Machine Learning with focus on practical applications and industry-relevant projects.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Work Experience */}
            <div ref={rightRef} className="bg-card rounded-3xl p-8 shadow-card hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                  <div className="text-xl">💼</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <div className="pill bg-secondary text-foreground text-sm font-medium mb-2 inline-block">
                    October 2024 – June 2025
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">AI/ML Engineer Intern</h4>
                  <p className="text-muted-foreground mb-4">Arthicus Global Pvt. Ltd., Hyderabad, India</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">Developed AI-driven solutions including AI Warehouse Assistant and Documentation Automation Tool</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">Restructured company website to enhance performance and user experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">Represented company at HYSEA industry event, showcasing projects to tech professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Achievements */}
          <div className="mt-16 bg-card rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">8+</div>
                <p className="text-muted-foreground">Months Professional Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <p className="text-muted-foreground">Certifications & Badges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                <p className="text-muted-foreground">AI/ML Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;