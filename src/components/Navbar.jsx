import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Globe } from 'lucide-react';
import { siteData } from '../data/siteData';
import { CartButton } from './BookingCartDrawer';

export const Navbar = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal", href: "#bridal" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'EN' ? 'UR' : 'EN');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Top Announcement Bar */}
        <AnimatePresence>
          {showAnnouncement && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#5A1226] text-[#FFF9F3] text-xs font-poppins py-2 px-4 text-center flex items-center justify-center gap-4 border-b border-[#C9A24B]/30 relative z-50"
            >
              <span>{siteData.announcement}</span>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-[#C9A24B] hover:text-white transition-colors p-1"
                aria-label="Close Announcement"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 w-full ${
          scrolled
            ? "bg-[#FFF9F3]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C9A24B]/20"
            : "bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-xl font-bold transition-transform duration-300 group-hover:scale-105 ${
                scrolled ? "bg-[#5A1226] text-[#C9A24B]" : "bg-[#C9A24B] text-[#5A1226]"
              }`}>
                A
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg md:text-xl font-bold tracking-wide leading-tight ${
                  scrolled ? "text-[#2B2B2B]" : "text-white"
                }`}>
                  Arfa's Salon
                </span>
                <span className={`text-[10px] uppercase tracking-widest ${
                  scrolled ? "text-[#C9A24B]" : "text-[#F4C6CF]"
                }`}>
                  Branch II · Lahore
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-poppins text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A24B] hover:after:w-full after:transition-all after:duration-300 ${
                    scrolled ? "text-[#2B2B2B] hover:text-[#5A1226]" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <CartButton />

              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  scrolled
                    ? "border-[#C9A24B]/40 text-[#2B2B2B] hover:bg-[#C9A24B]/10"
                    : "border-white/40 text-white hover:bg-white/10"
                }`}
                title="Switch Language (EN/UR)"
              >
                <Globe size={14} className="text-[#C9A24B]" />
                <span>{lang}</span>
              </button>

              <button
                onClick={onBookClick}
                data-cursor="Book"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] font-poppins text-sm font-semibold shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <CartButton />
              <button
                onClick={toggleLanguage}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                  scrolled ? "border-[#C9A24B]/40 text-[#2B2B2B]" : "border-white/40 text-white"
                }`}
              >
                {lang}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? "text-[#2B2B2B]" : "text-white"
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#5A1226] text-[#FFF9F3] flex flex-col justify-between p-8 grain-overlay"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A24B] text-[#5A1226] flex items-center justify-center font-serif text-xl font-bold">
                  A
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-[#FFF9F3]">Arfa's Salon</span>
                  <p className="text-xs text-[#C9A24B] tracking-widest uppercase">Branch II</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-[#C9A24B] hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto items-center text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 + 0.2 }}
                  className="font-serif text-3xl font-medium text-[#FFF9F3] hover:text-[#C9A24B] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#DFBF6F] text-[#5A1226] font-poppins font-semibold text-center shadow-lg"
              >
                Book Appointment
              </button>
              <div className="flex justify-center gap-6 text-xs text-[#C9A24B] pt-2">
                <a href={siteData.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <span>•</span>
                <a href={siteData.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
                <span>•</span>
                <a href={siteData.whatsappLink} target="_blank" rel="noreferrer">WhatsApp: {siteData.phone}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
