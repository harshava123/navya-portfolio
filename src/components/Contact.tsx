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
    <section id="contact" className="min-h-[70vh] flex flex-col md:flex-row items-stretch justify-center bg-white dark:bg-[#18181b] relative overflow-hidden pt-0">
      {/* Left Side */}
      <div
        ref={leftRef}
        className="flex-1 flex flex-col justify-center px-8 py-12 md:py-24 bg-[#ededed] dark:bg-[#23272f] rounded-br-[80px] md:rounded-br-[160px] z-10"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Interested in collaborating, have a question, or just want to say hi? Fill out the form or reach out via email/socials!
          </p>
          <form className="flex flex-col gap-4 max-w-md">
            <input type="text" placeholder="Your Name" className="rounded-lg border border-muted px-4 py-2 bg-white/80 dark:bg-[#23272f]/80" />
            <input type="email" placeholder="Your Email" className="rounded-lg border border-muted px-4 py-2 bg-white/80 dark:bg-[#23272f]/80" />
            <textarea placeholder="Your Message" className="rounded-lg border border-muted px-4 py-2 bg-white/80 dark:bg-[#23272f]/80 min-h-[100px]" />
            <button type="submit" className="rounded-full bg-black text-white font-bold px-6 py-2 shadow-md hover:bg-gray-800 transition-colors">Send</button>
          </form>
        </div>
      </div>
      {/* Right Side */}
      <div
        ref={rightRef}
        className="flex-1 flex flex-col justify-center items-center bg-black dark:bg-[#111] relative px-8 py-12 md:py-24 z-0 rounded-bl-[80px] md:rounded-bl-[160px]"
      >
        <div className="w-full max-w-xs bg-white/80 dark:bg-[#23272f]/80 rounded-2xl shadow-xl p-8 flex flex-col gap-4 items-center border border-white/30 dark:border-[#23272f]/40">
          <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
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

export default Contact;