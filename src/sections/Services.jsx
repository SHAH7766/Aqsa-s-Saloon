import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Sparkles, Palette, Heart, Droplets, Sun, Zap, Scissors, Wind, Shield, Plus, Check } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useCart } from '../context/CartContext';

const iconMap = {
  Crown: <Crown size={22} className="text-[#C9A24B]" />,
  Sparkles: <Sparkles size={22} className="text-[#C9A24B]" />,
  Palette: <Palette size={22} className="text-[#C9A24B]" />,
  Heart: <Heart size={22} className="text-[#C9A24B]" />,
  Droplets: <Droplets size={22} className="text-[#C9A24B]" />,
  Sun: <Sun size={22} className="text-[#C9A24B]" />,
  Zap: <Zap size={22} className="text-[#C9A24B]" />,
  Scissors: <Scissors size={22} className="text-[#C9A24B]" />,
  Wind: <Wind size={22} className="text-[#C9A24B]" />,
  Shield: <Shield size={22} className="text-[#C9A24B]" />
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState("bridal");
  const { cartItems, addToCart } = useCart();

  const filteredServices = siteData.services.filter(
    (service) => service.category === activeTab
  );

  return (
    <section id="services" className="py-24 bg-[#F5EBE1]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Exquisite Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Our Signature Services & Pricing
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            From royal bridal makeovers to rejuvenating hydro facials, experience premium beauty services crafted for perfection.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {siteData.servicesCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full font-poppins text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#5A1226] text-[#FFF9F3] shadow-lg"
                    : "bg-[#FFF9F3] text-[#2B2B2B] hover:bg-[#C9A24B]/20 border border-[#C9A24B]/30"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredServices.map((service, index) => {
              const isInCart = cartItems.some(i => i.id === service.id);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#C9A24B] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-[#C9A24B]/20 text-[#5A1226] text-xs font-semibold px-3 py-1 rounded-full border border-[#C9A24B]/40">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#5A1226]/10 flex items-center justify-center mb-6 group-hover:bg-[#5A1226] group-hover:text-white transition-colors duration-300">
                      {iconMap[service.icon] || <Sparkles size={22} className="text-[#C9A24B]" />}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5A1226] mb-3">
                      {service.name}
                    </h3>

                    <p className="font-poppins text-sm text-[#2B2B2B]/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C9A24B]/20 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#2B2B2B]/60 uppercase tracking-wider block">Investment</span>
                      <span className="font-serif text-xl font-bold text-[#5A1226]">
                        Rs. {service.price}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(service)}
                      data-cursor="Add"
                      className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${
                        isInCart
                          ? "bg-green-600 text-white"
                          : "bg-[#5A1226] text-[#FFF9F3] hover:bg-[#C9A24B] hover:text-[#5A1226]"
                      }`}
                    >
                      {isInCart ? <Check size={14} /> : <Plus size={14} />}
                      <span>{isInCart ? "Added" : "Add to Booking"}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
