import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { siteData } from '../data/siteData';

export const LookBuilder = () => {
  const [step, setStep] = useState(1);
  const [occasion, setOccasion] = useState("Bridal");
  const [skinTone, setSkinTone] = useState("#F5D0B1"); // Fair, Medium, Rich swatches
  const [vibe, setVibe] = useState("Soft Glam");
  const [lipColor, setLipColor] = useState("#C84B31"); // Classic Red, Rose, Nude, Mauve
  const [eyeColor, setEyeColor] = useState("#78350F"); // Brown, Smoky, Gold

  const occasions = ["Bridal", "Engagement", "Mehndi", "Party", "Everyday"];
  const skinTones = [
    { label: "Fair", hex: "#FCE4D6" },
    { label: "Medium", hex: "#E8B893" },
    { label: "Rich Tan", hex: "#B87D52" },
    { label: "Deep", hex: "#7A4A2E" }
  ];
  const vibes = ["Soft Glam", "Bold & Dramatic", "Traditional Royal", "Natural Glow"];
  const lipShades = [
    { name: "Crimson Red", hex: "#A31D1D" },
    { name: "Blush Rose", hex: "#E86F86" },
    { name: "Warm Nude", hex: "#D4A373" },
    { name: "Berry Plum", hex: "#6B2D5C" }
  ];
  const eyeShades = [
    { name: "Champagne Gold", hex: "#C9A24B" },
    { name: "Smoky Charcoal", hex: "#374151" },
    { name: "Rose Bronze", hex: "#B45309" },
    { name: "Emerald Shimmer", hex: "#065F46" }
  ];

  const handleWhatsAppBook = () => {
    const message = `Hello Arfa's Salon Branch II,%0A%0AI built my custom look using your Look Builder:%0A- *Occasion:* ${occasion}%0A- *Vibe:* ${vibe}%0A- *Skin Tone:* ${skinTone}%0A- *Lip Shade:* ${lipColor}%0A- *Eye Shade:* ${eyeColor}%0A%0APlease book my custom makeup slot!`;
    window.open(`https://wa.me/${siteData.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="look-builder" className="py-24 bg-[#FFF9F3] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Interactive Glam Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Build Your Custom Look
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            Design your dream makeup look live and instantly book your personalized package with Arfa's expert artists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Live SVG Face Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-3xl glass-card p-6 flex flex-col items-center justify-center shadow-2xl border-2 border-[#C9A24B]/40 overflow-hidden">
              <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-widest text-[#C9A24B]">
                Live Preview
              </span>

              {/* Interactive SVG Face Illustration */}
              <svg className="w-48 h-48 my-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Face Base */}
                <ellipse cx="100" cy="110" rx="55" ry="70" fill={skinTone} stroke="#C9A24B" strokeWidth="2" />
                {/* Hair Outline */}
                <path d="M45 90 C 45 40, 155 40, 155 90 C 155 120, 140 180, 140 180 L 60 180 C 60 180, 45 120, 45 90 Z" fill="#2B2B2B" opacity="0.9" />
                {/* Eyes */}
                <ellipse cx="75" cy="100" rx="8" ry="5" fill="white" />
                <circle cx="75" cy="100" r="4" fill={eyeColor} />
                <ellipse cx="125" cy="100" rx="8" ry="5" fill="white" />
                <circle cx="125" cy="100" r="4" fill={eyeColor} />
                {/* Cheeks / Blush */}
                <circle cx="70" cy="125" r="10" fill="#F4C6CF" opacity="0.6" />
                <circle cx="130" cy="125" r="10" fill="#F4C6CF" opacity="0.6" />
                {/* Lips */}
                <path d="M85 145 Q 100 138 115 145 Q 100 158 85 145 Z" fill={lipColor} />
              </svg>

              <div className="text-center mt-2">
                <span className="font-serif text-lg font-bold text-[#5A1226]">{occasion} · {vibe}</span>
                <span className="text-xs text-[#2B2B2B]/60 block">Branch II · Lahore</span>
              </div>
            </div>
          </div>

          {/* Right: Step-by-Step Builder */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 shadow-2xl border border-[#C9A24B]/30">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C9A24B]/20">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= s ? "bg-[#5A1226] text-[#C9A24B]" : "bg-[#F5EBE1] text-[#2B2B2B]/50"
                  }`}>
                    {step > s ? <Check size={14} /> : s}
                  </div>
                  <span className="text-xs font-semibold text-[#2B2B2B]/70 uppercase tracking-wider">
                    {s === 1 ? "Occasion" : s === 2 ? "Tone & Vibe" : "Shades"}
                  </span>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Occasion */}
              {step === 1 && (
                <motion.div key="b1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-6">Select Occasion</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        onClick={() => setOccasion(occ)}
                        className={`p-4 rounded-2xl font-poppins text-sm font-semibold transition-all border ${
                          occasion === occ
                            ? "bg-[#5A1226] text-[#FFF9F3] border-[#C9A24B] shadow-lg"
                            : "bg-[#FFF9F3] text-[#2B2B2B] border-[#C9A24B]/30 hover:border-[#C9A24B]"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Skin Tone & Vibe */}
              {step === 2 && (
                <motion.div key="b2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-4">Skin Tone & Glam Vibe</h3>
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-3">Skin Tone</label>
                    <div className="flex gap-4">
                      {skinTones.map((st) => (
                        <button
                          key={st.label}
                          onClick={() => setSkinTone(st.hex)}
                          className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl border transition-all ${
                            skinTone === st.hex ? "border-[#5A1226] ring-2 ring-[#C9A24B]" : "border-[#C9A24B]/30"
                          }`}
                        >
                          <span className="w-10 h-10 rounded-full shadow-md" style={{ backgroundColor: st.hex }} />
                          <span className="text-[10px] font-semibold text-[#2B2B2B]">{st.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-3">Glam Vibe</label>
                    <div className="grid grid-cols-2 gap-3">
                      {vibes.map((v) => (
                        <button
                          key={v}
                          onClick={() => setVibe(v)}
                          className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                            vibe === v ? "bg-[#5A1226] text-[#FFF9F3] border-[#C9A24B]" : "bg-[#FFF9F3] text-[#2B2B2B] border-[#C9A24B]/30"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Lip & Eye Shades */}
              {step === 3 && (
                <motion.div key="b3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-4">Lip & Eye Shades</h3>
                  <div className="mb-4">
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">Lip Shade</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {lipShades.map((l) => (
                        <button
                          key={l.name}
                          onClick={() => setLipColor(l.hex)}
                          className={`p-2 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                            lipColor === l.hex ? "border-[#5A1226] bg-[#5A1226]/10" : "border-[#C9A24B]/30"
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: l.hex }} />
                          <span className="truncate">{l.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">Eye Shadow</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {eyeShades.map((e) => (
                        <button
                          key={e.name}
                          onClick={() => setEyeColor(e.hex)}
                          className={`p-2 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                            eyeColor === e.hex ? "border-[#5A1226] bg-[#5A1226]/10" : "border-[#C9A24B]/30"
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: e.hex }} />
                          <span className="truncate">{e.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppBook}
                    className="w-full py-4 rounded-full bg-[#25D366] text-white font-poppins font-bold text-sm shadow-xl hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} fill="white" />
                    <span>Book This Look on WhatsApp</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6 pt-4 border-t border-[#C9A24B]/20">
              {step > 1 ? (
                <button
                  onClick={() => setStep(prev => prev - 1)}
                  className="px-6 py-2 rounded-full border border-[#5A1226]/30 text-[#5A1226] font-semibold text-xs flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 3 && (
                <button
                  onClick={() => setStep(prev => prev + 1)}
                  className="px-6 py-2 rounded-full bg-[#5A1226] text-[#FFF9F3] font-semibold text-xs flex items-center gap-2 ml-auto"
                >
                  Next <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
