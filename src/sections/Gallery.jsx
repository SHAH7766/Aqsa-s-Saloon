import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "bridal", label: "Bridal" },
    { id: "party", label: "Party" },
    { id: "hair", label: "Hair" },
    { id: "nails", label: "Nails" },
    { id: "facial", label: "Facial" }
  ];

  const filteredItems = activeFilter === "all"
    ? siteData.gallery
    : siteData.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#FFF9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Visual Masterpieces
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Our Salon Gallery
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            Explore our latest bridal makeovers, glamorous hairstyles, and glowing esthetic treatments.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-[#5A1226] text-[#FFF9F3] shadow-lg"
                  : "bg-[#F5EBE1]/60 text-[#2B2B2B] hover:bg-[#C9A24B]/20 border border-[#C9A24B]/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-[#C9A24B]/30"
                data-cursor="View"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A1226]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FFF9F3]">
                  <div className="flex items-center gap-2 text-[#C9A24B] mb-1">
                    <Sparkles size={14} />
                    <span className="text-xs uppercase tracking-wider font-semibold">{item.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}

            {/* Instagram CTA Card */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 bg-gradient-to-br from-[#5A1226] to-[#3E0B19] text-[#FFF9F3] flex flex-col items-center justify-center text-center shadow-xl border border-[#C9A24B]/40 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Camera size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Follow Our Journey</h3>
              <p className="font-poppins text-xs text-[#FFF9F3]/80 mb-6">
                See daily client makeovers, stories, and exclusive offers on Instagram.
              </p>
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
              >
                Follow @arfas_saloon
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={28} />
              </button>
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden glass-card-dark p-2"
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain rounded-2xl"
                />
                <div className="p-4 text-center">
                  <span className="text-xs text-[#C9A24B] uppercase tracking-widest font-semibold block mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FFF9F3]">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
