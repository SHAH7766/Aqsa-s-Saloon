import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Droplets, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  Users: <Users size={24} className="text-[#C9A24B]" />,
  Sparkles: <Sparkles size={24} className="text-[#C9A24B]" />,
  Droplets: <Droplets size={24} className="text-[#C9A24B]" />,
  HeartHandshake: <HeartHandshake size={24} className="text-[#C9A24B]" />,
  ShieldCheck: <ShieldCheck size={24} className="text-[#C9A24B]" />,
  MapPin: <MapPin size={24} className="text-[#C9A24B]" />
};

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#F5EBE1]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            The Arfa's Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Why Clients Love Us
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            Backed by glowing Google reviews and a passion for excellence, here is why Lahore trusts Branch II.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 shadow-xl hover:border-[#C9A24B] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5A1226]/10 flex items-center justify-center mb-6 group-hover:bg-[#5A1226] group-hover:text-white transition-colors duration-300">
                {iconMap[item.icon] || <Sparkles size={24} className="text-[#C9A24B]" />}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-3">
                {item.title}
              </h3>
              <p className="font-poppins text-sm text-[#2B2B2B]/75 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
