import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#FFF9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Overlapping Arched Images & Rotating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative flex justify-center items-center py-6">
              {/* First arched image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-64 sm:w-72 h-96 sm:h-[420px] rounded-t-full overflow-hidden shadow-2xl border-4 border-[#C9A24B]/30 relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                  alt="Arfa's Salon Interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Second overlapping arched image */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-56 sm:w-64 h-80 sm:h-96 rounded-t-full overflow-hidden shadow-2xl border-4 border-[#FFF9F3] absolute right-4 sm:right-8 top-16 z-20 hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800"
                  alt="Bridal Makeup Artistry"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Rotating Circular Badge */}
              <div className="absolute -bottom-6 left-6 z-30 hidden md:block">
                <div className="relative w-32 h-32 rounded-full glass-card flex items-center justify-center p-2 shadow-xl border border-[#C9A24B]/50 animate-spin" style={{ animationDuration: '20s' }}>
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      fill="transparent"
                      d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                    <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-[#5A1226]">
                      <textPath href="#circlePath" startOffset="0%">
                        · ARFA'S SALON · LAHORE · BRANCH II
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[#C9A24B]">
                    <Sparkles size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
                Our Legacy of Beauty
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] leading-tight mb-6">
                Where Passion Meets Perfection in Lahore
              </h2>
              <p className="font-poppins text-base text-[#2B2B2B]/80 leading-relaxed mb-6">
                The first Arfa's branch opened on <strong className="text-[#5A1226]">20 December 2020</strong>. Building upon our immense love from clients across Lahore, we proudly established <strong className="text-[#C9A24B]">Branch II</strong> at Al Rehman Garden Phase 2.
              </p>
              <p className="font-poppins text-base text-[#2B2B2B]/80 leading-relaxed mb-8">
                Renowned for our cooperative, gentle, and hardworking staff, we specialize in luxury bridal makeovers, advanced hydro facials, and exquisite hairstyling that turns every special moment into an unforgettable celebration.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#C9A24B]/30">
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1226] block">
                  {siteData.stats.rating}★
                </span>
                <span className="text-xs text-[#2B2B2B]/70 font-medium">Google Rating</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1226] block">
                  {siteData.stats.reviewsCount}+
                </span>
                <span className="text-xs text-[#2B2B2B]/70 font-medium">Reviews</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1226] block">
                  {siteData.stats.bridesServed}
                </span>
                <span className="text-xs text-[#2B2B2B]/70 font-medium">Happy Brides</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1226] block">
                  {siteData.stats.happyClients}
                </span>
                <span className="text-xs text-[#2B2B2B]/70 font-medium">Clients Served</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
