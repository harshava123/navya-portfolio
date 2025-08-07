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
    <section className="min-h-screen flex flex-col md:flex-row items-stretch justify-center bg-white dark:bg-[#18181b] relative overflow-hidden pt-0">
      {/* Left Side */}
      <div
        ref={leftRef}
        className="flex-1 flex flex-col justify-center px-8 py-12 md:py-24 bg-[#ededed] dark:bg-[#23272f] rounded-br-[80px] md:rounded-br-[160px] z-10"
      >
        {/* Intro */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-medium mb-2">Hi, I am</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Navya Pachigolla</h1>
          <h3 className="text-lg md:text-2xl font-semibold text-muted-foreground mb-8">AI/ML Engineer / Developer</h3>
          <div className="flex gap-4 mt-4">
            <a href="mailto:navyadhrtii@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-md shadow-md">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/p-navya/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-md shadow-md">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/p-navyaa/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-md shadow-md">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div
        ref={rightRef}
        className="flex-1 flex flex-col justify-center items-center bg-black dark:bg-[#111] relative px-8 py-12 md:py-24 z-0"
      >
        {/* Photo */}
        <motion.img
          src="/Untitled design.png"
          alt="Navya Pachigolla"
          className="w-64 md:w-96 h-auto object-contain rounded-2xl shadow-2xl border-4 border-white dark:border-[#23272f] mt-8 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default Hero;