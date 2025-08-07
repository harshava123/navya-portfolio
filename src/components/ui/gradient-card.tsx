"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientCardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const GradientCard: React.FC<GradientCardProps> = ({ className = "", style = {}, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 dark:border-[#23272f]/40 bg-white/60 dark:bg-[#23272f]/80 backdrop-blur-lg transition-all duration-500 ${className}`}
      style={{
        ...style,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      {/* Glow effect (theme accent) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.3) -10%, rgba(79, 70, 229, 0) 70%)," +
            "radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.3) -10%, rgba(79, 70, 229, 0) 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          y: isHovered ? rotation.x * 0.5 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      {/* Card content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientCard;
