import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe, Share2, Video, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B2B2B] text-[#FFF9F3] pt-16 pb-12 border-t border-[#C9A24B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A24B] text-[#5A1226] flex items-center justify-center font-serif text-xl font-bold">
                A
              </div>
              <span className="font-serif text-xl font-bold">Arfa's Salon</span>
            </div>
            <p className="font-poppins text-xs text-[#FFF9F3]/70 leading-relaxed mb-6">
              {siteData.tagline}. Premier beauty salon and bridal lounge in Lahore Branch II.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteData.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#5A1226] transition-colors" title="Instagram">
                <Globe size={16} />
              </a>
              <a href={siteData.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#5A1226] transition-colors" title="Facebook">
                <Share2 size={16} />
              </a>
              <a href={siteData.socials.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#5A1226] transition-colors" title="YouTube">
                <Video size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C9A24B] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 font-poppins text-xs text-[#FFF9F3]/80">
              <li><a href="#home" className="hover:text-[#C9A24B] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C9A24B] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#C9A24B] transition-colors">Services & Pricing</a></li>
              <li><a href="#bridal" className="hover:text-[#C9A24B] transition-colors">Bridal Packages</a></li>
              <li><a href="#gallery" className="hover:text-[#C9A24B] transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C9A24B] transition-colors">Google Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#C9A24B] transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C9A24B] mb-4">Popular Services</h4>
            <ul className="space-y-2.5 font-poppins text-xs text-[#FFF9F3]/80">
              <li>Signature HD Bridal Makeup</li>
              <li>Walima & Nikkah Glam</li>
              <li>Party Makeup & Styling</li>
              <li>Advanced Hydro Facial</li>
              <li>Keratin Hair Treatment</li>
              <li>Luxury Manicure & Pedicure</li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C9A24B] mb-4">Branch II Info</h4>
            <p className="font-poppins text-xs text-[#FFF9F3]/80 mb-2">
              <strong>Address:</strong> {siteData.address}
            </p>
            <p className="font-poppins text-xs text-[#FFF9F3]/80 mb-2">
              <strong>Phone / WhatsApp:</strong> {siteData.phone}
            </p>
            <p className="font-poppins text-xs text-[#FFF9F3]/80">
              <strong>Hours:</strong> 11:00 AM - 8:00 PM (Daily)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-poppins text-xs text-[#FFF9F3]/60">
          <p>© {new Date().getFullYear()} {siteData.name} ({siteData.branch}). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={14} className="text-[#F4C6CF]" fill="#F4C6CF" /> for Lahore
          </p>

          {/* Back to top with progress ring */}
          <button
            onClick={scrollToTop}
            className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#5A1226] transition-all"
            title="Back to top"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/20"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#C9A24B]"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeWidth="2"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
