import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 10;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF9F3] grain-overlay overflow-hidden"
        >
          {/* Curtains sliding apart on finish */}
          <motion.div
            initial={{ x: 0 }}
            animate={progress === 100 ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 bg-[#FFF9F3] border-r border-[#C9A24B]/30 z-10"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={progress === 100 ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-[#FFF9F3] border-l border-[#C9A24B]/30 z-10"
          />

          <div className="relative z-20 text-center flex flex-col items-center">
            {/* Monogram A */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-24 h-24 mb-6 rounded-full bg-[#5A1226] text-[#C9A24B] flex items-center justify-center shadow-2xl border-2 border-[#C9A24B]"
            >
              <span className="font-serif text-5xl font-bold tracking-wider">A</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl text-[#5A1226] font-bold tracking-wide mb-2"
            >
              Arfa's Beauty Salon
            </motion.h1>

            <p className="font-serif text-sm tracking-[0.3em] text-[#C9A24B] uppercase mb-8">
              & Bridal Lounge · Branch II
            </p>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-[#F5EBE1] rounded-full overflow-hidden border border-[#C9A24B]/30">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A24B] to-[#F4C6CF]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="mt-2 text-xs font-poppins text-[#2B2B2B]/60 tracking-widest">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
