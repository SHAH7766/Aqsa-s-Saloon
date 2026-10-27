import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, MessageCircle, Crown } from 'lucide-react';
import { siteData } from '../data/siteData';

export const BridalPackages = () => {
  return (
    <section id="bridal" className="py-24 bg-[#FFF9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Bridal Lounge
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Signature Bridal Packages
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            Curated complete bridal experiences designed to make you feel like royalty on your special day.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteData.bridalPackages.map((pkg, index) => {
            const isPopular = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular
                    ? "bg-[#5A1226] text-[#FFF9F3] shadow-2xl border-2 border-[#C9A24B] scale-105 z-10"
                    : "glass-card text-[#2B2B2B] hover:border-[#C9A24B]"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Crown size={14} />
                    <span>Most Loved</span>
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-[#C9A24B]/30 mb-6">
                    <h3 className={`font-serif text-2xl font-bold mb-1 ${isPopular ? "text-[#FFF9F3]" : "text-[#5A1226]"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs ${isPopular ? "text-[#F4C6CF]" : "text-[#2B2B2B]/70"}`}>
                      {pkg.subtitle}
                    </p>
                    <div className="mt-4">
                      <span className="text-xs uppercase tracking-wider opacity-80 block">Investment</span>
                      <span className={`font-serif text-3xl font-bold ${isPopular ? "text-[#C9A24B]" : "text-[#5A1226]"}`}>
                        Rs. {pkg.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className={`mt-1 p-0.5 rounded-full ${isPopular ? "bg-[#C9A24B] text-[#5A1226]" : "bg-[#5A1226]/10 text-[#5A1226]"}`}>
                          <Check size={14} />
                        </div>
                        <span className={isPopular ? "text-[#FFF9F3]/90" : "text-[#2B2B2B]/80"}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`${siteData.whatsappLink}?text=Hello,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="WhatsApp"
                  className={`w-full py-3.5 rounded-full font-poppins text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    isPopular
                      ? "bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] hover:scale-105"
                      : "bg-[#5A1226] text-[#FFF9F3] hover:bg-[#C9A24B] hover:text-[#5A1226]"
                  }`}
                >
                  <MessageCircle size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
