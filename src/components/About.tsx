import GradientCard from "@/components/ui/gradient-card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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
    <section id="about" className="min-h-[70vh] flex flex-col md:flex-row items-stretch justify-center bg-white dark:bg-[#18181b] relative overflow-hidden pt-0">
      {/* Left Side */}
      <div
        ref={leftRef}
        className="flex-1 flex flex-col justify-center px-8 py-12 md:py-24 bg-[#ededed] dark:bg-[#23272f] rounded-br-[80px] md:rounded-br-[160px] z-10"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Driven and detail-oriented final year B.Tech student specializing in Artificial Intelligence and Machine Learning, with a strong command of Python and hands-on internship experience in real-world automation projects. Strong foundation in full-stack development and AI tools, with a passion for building impactful, intelligent systems. Adept at problem-solving, collaborating in fast-paced environments, and committed to continuous learning from industry practices. Eager to contribute meaningfully to innovative projects and deepen expertise in applied Artificial Intelligence, machine learning, and software engineering through industry-driven opportunities.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-muted p-6 bg-white/80 dark:bg-[#23272f]/80 shadow-md min-w-[120px]">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1+</div>
              <div className="text-base font-semibold mt-2">Years of experience</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-muted p-6 bg-white/80 dark:bg-[#23272f]/80 shadow-md min-w-[120px]">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10+</div>
              <div className="text-base font-semibold mt-2">Projects done</div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div
        ref={rightRef}
        className="flex-1 flex flex-col justify-center items-center bg-black dark:bg-[#111] relative px-8 py-12 md:py-24 z-0 rounded-bl-[80px] md:rounded-bl-[160px]"
      >
        <div className="w-full max-w-xs bg-white/80 dark:bg-[#23272f]/80 rounded-2xl shadow-xl p-8 flex flex-col gap-4 items-center border border-white/30 dark:border-[#23272f]/40">
          <div>
            <div className="text-muted-foreground text-sm">Name</div>
            <div className="font-bold text-lg">Navya Pachigolla</div>
          </div>
          <div>
            <div className="text-muted-foreground text-sm">Email</div>
            <div className="font-bold text-lg">navyadhrtii@gmail.com</div>
          </div>
          <div>
            <div className="text-muted-foreground text-sm">Location</div>
            <div className="font-bold text-lg">Hyderabad, India</div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/p-navya/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/p-navyaa/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a href="mailto:navyadhrtii@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;