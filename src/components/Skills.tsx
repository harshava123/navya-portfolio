import { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const skills = [
    "HTML", "CSS/Tailwind CSS", "JavaScript", "Python", "React.js",
    "Node.js", "Flask", "AI", "NLP", "ML",
    "DL", "Figma", "Vercel", "AWS", "Salesforce",
    "MySQL/SQLite", "MongoDB", "Git"
  ];
  const gridRef = useRef<HTMLDivElement | null>(null);
  const highlightsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }
    if (highlightsRef.current) {
      gsap.fromTo(
        highlightsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <>
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Technologies</h2>
              <p className="text-lg text-muted-foreground">
                Technologies and tools I work with to build innovative solutions
              </p>
            </div>
            
            {/* Skills Pills - Innovimagine Style */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="pill bg-card text-foreground font-medium shadow-card hover-lift cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            {/* Highlights Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-3xl p-8 shadow-card hover-lift text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">📊</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Data-Driven Insights</h3>
                <p className="text-muted-foreground">
                  Transform raw data into actionable strategies that drive real business growth.
                </p>
              </div>
              
              <div className="bg-card rounded-3xl p-8 shadow-card hover-lift text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">💡</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI-Powered Strategy</h3>
                <p className="text-muted-foreground">
                  Leverage cutting-edge AI to decode your audience and craft winning campaigns.
                </p>
              </div>
              
              <div className="bg-card rounded-3xl p-8 shadow-card hover-lift text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">⚡</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">End-to-End Delivery</h3>
                <p className="text-muted-foreground">
                  From strategy to launch, we build, implement, and deliver results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Achievements Section */}
      <section id="certifications" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications & Achievements</h2>
              <p className="text-lg text-muted-foreground">
                Recognition and credentials that validate my expertise
              </p>
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <span className="font-semibold text-foreground">Salesforce Ranger</span>
                    <span className="text-muted-foreground"> — 2024</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <span className="font-semibold text-foreground">Certification in Programming in Java</span>
                    <span className="text-muted-foreground"> — NPTEL — 2023</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <span className="font-semibold text-foreground">Certification in Deep Learning</span>
                    <span className="text-muted-foreground"> — NPTEL — 2023</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <span className="font-semibold text-foreground">10+ Coursera Certifications</span>
                    <span className="text-muted-foreground"> (Scalable Machine Learning on Big Data, Python Programming Essentials, AI Workflow)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <span className="font-semibold text-foreground">40+ Microsoft Badges Trophies</span>
                    <span className="text-muted-foreground"> (Azure AI services, Generative AI, Power BI, OpenAPI integration, Text Analysis) — 2024</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;