import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#5A1226] via-[#3E0B19] to-black text-[#FFF9F3] relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute text-[#C9A24B]"
            style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 2) * 30}%` }}
          >
            <Sparkles size={24} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-4">
          Begin Your Transformation
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          Your most beautiful day <span className="font-['Great_Vibes'] text-5xl sm:text-7xl md:text-8xl text-[#C9A24B] font-normal capitalize">starts here</span>
        </h2>

        <p className="font-poppins text-base sm:text-lg text-[#FFF9F3]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Whether it's your wedding day or a special evening party, let Arfa's Salon Branch II make you shine with unmatched elegance.
        </p>

        <a
          href={siteData.whatsappLink}
          target="_blank"
          rel="noreferrer"
          data-cursor="WhatsApp"
          className="px-10 py-5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] font-poppins font-bold text-base shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
        >
          <MessageCircle size={22} fill="#5A1226" />
          <span>Book Your Slot on WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
