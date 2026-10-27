import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe, Share2, Video, Navigation } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ContactLocation = () => {
  // Check if current time is between 11 AM (11:00) and 8 PM (20:00)
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 11 && currentHour < 20;

  return (
    <section id="contact" className="py-24 bg-[#FFF9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Visit Branch II
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Contact & Location
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            We look forward to welcoming you to our luxurious salon and bridal lounge in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 shadow-xl flex items-start gap-4 border border-[#C9A24B]/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5A1226] text-[#C9A24B] flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#5A1226] mb-1">Our Location</h3>
                <p className="font-poppins text-sm text-[#2B2B2B]/80 leading-relaxed mb-3">
                  {siteData.address}
                </p>
                <a
                  href="https://maps.google.com/?q=Al+Rehman+Garden+Phase+2+Lahore"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A1226] hover:text-[#C9A24B] transition-colors"
                >
                  <Navigation size={14} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-3xl p-6 shadow-xl flex items-start gap-4 border border-[#C9A24B]/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5A1226] text-[#C9A24B] flex items-center justify-center shrink-0">
                <Clock size={22} />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg font-bold text-[#5A1226]">Working Hours</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    isOpen ? "bg-green-500/20 text-green-700" : "bg-red-500/20 text-red-700"
                  }`}>
                    {isOpen ? "● Open Now" : "○ Closed"}
                  </span>
                </div>
                <p className="font-poppins text-sm text-[#2B2B2B]/80">
                  Opens {siteData.hours.opens} · Closes {siteData.hours.closes}
                </p>
                <span className="text-xs text-[#2B2B2B]/50 block mt-1">{siteData.hours.note}</span>
              </div>
            </motion.div>

            {/* Phone & Socials Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-6 shadow-xl flex items-start gap-4 border border-[#C9A24B]/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5A1226] text-[#C9A24B] flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#5A1226] mb-1">Phone & WhatsApp</h3>
                <p className="font-poppins text-sm font-bold text-[#5A1226] mb-3">
                  {siteData.phone}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={siteData.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#5A1226]/10 text-[#5A1226] hover:bg-[#5A1226] hover:text-white flex items-center justify-center transition-colors"
                    title="Instagram"
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href={siteData.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#5A1226]/10 text-[#5A1226] hover:bg-[#5A1226] hover:text-white flex items-center justify-center transition-colors"
                    title="Facebook"
                  >
                    <Share2 size={18} />
                  </a>
                  <a
                    href={siteData.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#5A1226]/10 text-[#5A1226] hover:bg-[#5A1226] hover:text-white flex items-center justify-center transition-colors"
                    title="YouTube"
                  >
                    <Video size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C9A24B]/30 h-[450px] relative bg-[#F5EBE1]"
            >
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0!2d74.25!3d31.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM5JzAwLjAiTiA3NMKwMTUnMDAuMCJF!5e0!3m2!1sen!2spk!4v1600000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
