import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export const BeforeAfter = () => {
  const [sliderPositions, setSliderPositions] = useState(
    siteData.beforeAfter.reduce((acc, item) => ({ ...acc, [item.id]: 50 }), {})
  );

  const handleSliderChange = (id, e) => {
    const val = e.target.value;
    setSliderPositions((prev) => ({ ...prev, [id]: val }));
  };

  return (
    <section className="py-24 bg-[#F5EBE1]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Real Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Before & After Makeovers
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            Drag the slider on each image to reveal the stunning transformation crafted by our expert artists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.beforeAfter.map((item) => {
            const pos = sliderPositions[item.id] || 50;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-3xl p-6 shadow-xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-lg font-bold text-[#5A1226]">
                    {item.title}
                  </span>
                  <span className="text-xs bg-[#C9A24B]/20 text-[#5A1226] px-3 py-1 rounded-full font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Slider Container */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden select-none mb-4 group shadow-inner">
                  {/* After Image (Background) */}
                  <img
                    src={item.afterImg}
                    alt={`${item.title} After`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#5A1226]/80 text-[#FFF9F3] text-[10px] uppercase font-bold px-2 py-1 rounded">
                    After
                  </div>

                  {/* Before Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${pos}%` }}
                  >
                    <img
                      src={item.beforeImg}
                      alt={`${item.title} Before`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute top-3 left-3 bg-[#2B2B2B]/80 text-[#FFF9F3] text-[10px] uppercase font-bold px-2 py-1 rounded">
                      Before
                    </div>
                  </div>

                  {/* Range Input Handle */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pos}
                    onChange={(e) => handleSliderChange(item.id, e)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />

                  {/* Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[#C9A24B] z-20 pointer-events-none"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C9A24B] text-[#5A1226] flex items-center justify-center font-bold shadow-lg animate-pulse">
                      ↔
                    </div>
                  </div>
                </div>

                <p className="font-poppins text-xs text-[#2B2B2B]/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
