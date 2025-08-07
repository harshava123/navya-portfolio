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
    <section id="experience" className="min-h-[70vh] flex flex-col md:flex-row items-stretch justify-center bg-white dark:bg-[#18181b] relative overflow-hidden pt-0">
      {/* Left Side */}
      <div
        ref={leftRef}
        className="flex-1 flex flex-col justify-center px-8 py-12 md:py-24 bg-[#ededed] dark:bg-[#23272f] rounded-br-[80px] md:rounded-br-[160px] z-10"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
          <div className="mb-6">
            <div className="text-lg font-semibold">2022 - 2026</div>
            <div className="text-lg font-bold">B.Tech</div>
            <div className="text-lg">MallaReddy University, Hyderabad</div>
            <div className="text-lg">Pursuing B.Tech specialized in Artificial Intelligence & Machine Learning</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            A results-driven B.Tech undergraduate specializing in Artificial Intelligence and Machine Learning (AIML), with 8 months of professional experience as an AIML Engineer Intern. Possesses a strong foundation in full-stack development and Python-based technologies, with hands-on experience in developing scalable web applications, managing databases, and designing responsive user interfaces. Demonstrates proficiency in machine learning concepts, data preprocessing, and model deployment. Known for strong problem-solving skills, a collaborative mindset, and a commitment to continuous learning and innovation in technology.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div
        ref={rightRef}
        className="flex-1 flex flex-col justify-center items-center bg-black dark:bg-[#111] relative px-8 py-12 md:py-24 z-0 rounded-bl-[80px] md:rounded-bl-[160px]"
      >
        <div className="w-full max-w-md bg-white/80 dark:bg-[#23272f]/80 rounded-2xl shadow-xl p-8 flex flex-col gap-4 items-center border border-white/30 dark:border-[#23272f]/40">
          <h3 className="text-2xl font-bold mb-2">Work Experience</h3>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold">October 2024 – June 2025</div>
            <div className="text-lg font-bold">AI/ML Intern</div>
            <div className="text-lg">Arthicus Global Pvt. Ltd., Hyderabad, India</div>
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground text-base text-left w-full">
            <li>Developed AI-driven solutions such as an AI Warehouse Assistant, a Documentation Automation Tool, and an internal Employee Portal (CRM application).</li>
            <li>Restructured and modernized the company's official website to enhance performance and user experience.</li>
            <li>Represented the company at the HYSEA industry event, showcasing projects and engaging with tech professionals.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;