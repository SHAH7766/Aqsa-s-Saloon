import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2B2B2B]">
      {/* Background image with Ken Burns slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920')`,
          }}
        />
        {/* Rich cinematic multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E0B19]/95 via-[#5A1226]/60 to-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div className="absolute inset-0 grain-overlay opacity-40" />
      </div>

      {/* Floating ambient sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3 + Math.random() * 0.5,
              scale: 0.5 + Math.random() * 0.8
            }}
            animate={{
              y: [null, "-=120px", "+=120px"],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 7 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-[#C9A24B]"
            style={{ left: `${10 + (i * 12)}%`, top: `${15 + (i * 10)}%` }}
          >
            <Sparkles size={16 + (i % 3) * 8} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-44 sm:pt-36 pb-20 flex flex-col items-center">

        {/* Top Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-card border-2 border-[#C9A24B]/60 text-[#FFF9F3] text-xs font-poppins mb-8 shadow-2xl backdrop-blur-xl bg-black/30"
        >
          <div className="flex text-[#C9A24B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#C9A24B" />
            ))}
          </div>
          <span className="font-semibold tracking-wider uppercase text-[#C9A24B]">Al Rehman Garden Phase 2, Lahore · Branch II</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFF9F3] tracking-tight leading-[1.08] mb-8 max-w-5xl drop-shadow-2xl"
        >
          Where every look becomes a <br />
          <span className="font-['Great_Vibes'] text-6xl sm:text-8xl md:text-9xl gold-shimmer font-normal tracking-normal capitalize inline-block py-2">
            celebration
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-poppins text-base sm:text-lg md:text-xl text-[#FFF9F3]/90 max-w-2xl font-light leading-relaxed drop-shadow-md"
        >
          Experience unmatched luxury bridal artistry, rejuvenating hydro facials, and caring staff at <strong className="text-[#C9A24B] font-medium">Arfa's Beauty Salon & Bridal Lounge (Branch II)</strong>.
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-[#FFF9F3]/80">
        <span className="text-[10px] uppercase tracking-widest mb-2 font-poppins font-medium">Discover Salon</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-[#C9A24B]/80 flex items-start justify-center p-1 bg-black/30 backdrop-blur-sm"
        >
          <div className="w-1.5 h-3 bg-[#C9A24B] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
