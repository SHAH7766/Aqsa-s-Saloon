import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero = ({ onBookClick }) => {
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
        {/* Dark overlay gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E0B19]/90 via-[#5A1226]/60 to-black/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 grain-overlay opacity-40" />
      </div>

      {/* Floating ambient sparkles / rose petals */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2 + Math.random() * 0.5,
              scale: 0.5 + Math.random() * 0.8
            }}
            animate={{
              y: [null, "-=100px", "+=100px"],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-[#C9A24B]"
            style={{ left: `${i * 15}%`, top: `${20 + (i * 10)}%` }}
          >
            <Sparkles size={16 + (i % 3) * 6} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Floating Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark border border-[#C9A24B]/40 text-[#FFF9F3] text-xs sm:text-sm font-medium mb-8 animate-float shadow-xl"
        >
          <div className="flex items-center text-[#C9A24B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#C9A24B" />
            ))}
          </div>
          <span className="font-bold text-[#C9A24B]">{siteData.stats.rating} ★</span>
          <span className="text-white/70">· {siteData.stats.reviewsCount} Google Reviews</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#FFF9F3] tracking-tight leading-[1.1] mb-6 max-w-4xl"
        >
          Where every look becomes a <span className="font-['Great_Vibes'] text-5xl sm:text-7xl md:text-8xl text-[#C9A24B] font-normal tracking-normal capitalize">celebration</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-poppins text-base sm:text-lg md:text-xl text-[#FFF9F3]/80 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Welcome to <strong className="text-[#C9A24B] font-medium">Arfa's Beauty Salon & Bridal Lounge (Branch II)</strong> in Al Rehman Garden Phase 2, Lahore. Experience unmatched artistry and caring staff.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={siteData.whatsappLink}
            target="_blank"
            rel="noreferrer"
            data-cursor="WhatsApp"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-poppins font-semibold text-sm shadow-xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <MessageCircle size={20} fill="white" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href="#services"
            data-cursor="Explore"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-[#FFF9F3] border border-[#C9A24B]/50 font-poppins font-semibold text-sm shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>Explore Services</span>
            <ArrowRight size={18} className="text-[#C9A24B]" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-[#FFF9F3]/60">
        <span className="text-[10px] uppercase tracking-widest mb-2 font-poppins">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-[#C9A24B]/50 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-[#C9A24B] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
