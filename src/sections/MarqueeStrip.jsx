import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const MarqueeStrip = () => {
  const items = [
    "Bridal Makeup",
    "Party Makeup",
    "Hydro Facial",
    "Hair Styling",
    "Mani & Pedi",
    "Keratin Treatment",
    "Acrylic Nails",
    "Hair Coloring",
    "Bridal Lounge"
  ];

  return (
    <div className="bg-[#5A1226] text-[#FFF9F3] py-4 overflow-hidden border-y border-[#C9A24B]/30 relative z-20">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 min-w-max"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-8 font-serif text-lg tracking-wider uppercase">
              <span className="hover:text-[#C9A24B] transition-colors cursor-default">{item}</span>
              <span className="text-[#C9A24B]">
                <Sparkles size={14} fill="#C9A24B" />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
