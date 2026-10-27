import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export const PersistentUI = ({ onBookClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-6 z-40 flex items-center gap-3">
        {showTooltip && (
          <div className="hidden sm:flex items-center bg-[#FFF9F3] text-[#5A1226] px-4 py-2 rounded-2xl shadow-xl border border-[#C9A24B]/40 text-xs font-semibold relative animate-fade-in">
            <span>Book your slot today! ✨</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-[#2B2B2B]/40 hover:text-[#2B2B2B]"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <a
          href={siteData.whatsappLink}
          target="_blank"
          rel="noreferrer"
          data-cursor="WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <MessageCircle size={28} fill="white" />
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F3]/95 backdrop-blur-md border-t border-[#C9A24B]/30 p-3 sm:hidden flex items-center justify-around gap-2 shadow-2xl">
        <a
          href={`tel:${siteData.phone}`}
          className="flex-1 py-2.5 rounded-full bg-[#5A1226] text-[#FFF9F3] text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
        >
          <Phone size={14} className="text-[#C9A24B]" />
          <span>Call Salon</span>
        </a>

        <a
          href={siteData.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
        >
          <MessageCircle size={14} fill="white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] text-xs font-bold flex items-center justify-center gap-2 shadow-md"
        >
          <Calendar size={14} />
          <span>Book</span>
        </button>
      </div>
    </>
  );
};
