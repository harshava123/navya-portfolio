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
      <section id="skills" className="relative py-20 min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#23272f] via-[#18181b] to-[#23272f]">
        {/* Unique background gradient blob */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/30 via-primary/20 to-transparent rounded-full blur-2xl opacity-50 pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* Skills grid */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Skills</h2>
            <div
              ref={gridRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-full px-6 py-3 text-center text-base font-semibold shadow-md border border-primary/30 dark:border-accent/20 bg-white/20 dark:bg-[#23272f]/60 backdrop-blur-md text-white hover:scale-105 transition-transform duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(172,92,255,0.10) 100%)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Highlights */}
          <div
            ref={highlightsRef}
            className="flex-1 w-full max-w-md bg-white/10 dark:bg-[#18181b]/60 rounded-2xl shadow-xl p-8 flex flex-col gap-4 border border-white/20 dark:border-[#23272f]/40 backdrop-blur-md mt-12 md:mt-0"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">Highlights</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 text-base text-left w-full">
              <li>Full-stack development & AI tools</li>
              <li>Problem-solving & collaboration</li>
              <li>Continuous learning & innovation</li>
              <li>Industry-driven project experience</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Certifications & Achievements Section */}
      <section id="certifications" className="relative py-20 flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#18181b] overflow-hidden">
        {/* Gradient blob background */}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/30 via-primary/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent rounded-full blur-2xl opacity-50 pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
          <div className="w-full bg-white/10 dark:bg-[#23272f]/60 rounded-2xl shadow-2xl p-12 border-4 border-gradient-to-r from-primary to-accent backdrop-blur-md" style={{borderImage: 'linear-gradient(90deg, #a45cf1, #38bdf8) 1'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Certifications & Achievements</h2>
            <ul className="space-y-6 text-lg text-white">
              <li>🏆 <span className="font-semibold">Salesforce Ranger</span> — 2024</li>
              <li>🏆 <span className="font-semibold">Certification in Programming in Java</span> — NPTEL — 2023</li>
              <li>🏆 <span className="font-semibold">Certification in Deep Learning</span> — NPTEL — 2023</li>
              <li>🏆 <span className="font-semibold">10+ Coursera Certifications</span> (e.g., Scalable Machine Learning on Big Data, Python Programming Essentials, AI Workflow)</li>
              <li>🏆 <span className="font-semibold">40+ Microsoft Badges Trophies</span> (Azure AI services, Generative AI, Power BI, OpenAPI integration, Text Analysis) — 2024</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;