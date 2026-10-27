import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop/non-touch
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target;
      const interactive = target.closest("a, button, input, textarea, [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        setCursorText(interactive.getAttribute("data-cursor") || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#C9A24B] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#C9A24B]/60 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-[10px] font-poppins text-[#C9A24B] font-semibold"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(201, 162, 75, 0.15)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && <span className="scale-75 uppercase tracking-tighter">{cursorText}</span>}
      </motion.div>
    </>
  );
};
