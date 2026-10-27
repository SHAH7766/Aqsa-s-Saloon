import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600",
      likes: "1.4k",
      comments: "84",
      caption: "Royal Walima Bridal Look @ Branch II Lahore ✨"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
      likes: "952",
      comments: "42",
      caption: "Signature Party Glam by Arfa's Senior Artists 💫"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
      likes: "2.1k",
      comments: "128",
      caption: "Soft Rose Reception Look for our gorgeous Lahore bride 🌸"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
      likes: "1.8k",
      comments: "95",
      caption: "Advanced Glass Skin Hydro Facial session ✨"
    }
  ];

  return (
    <section className="py-20 bg-[#FFF9F3] border-t border-[#C9A24B]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-2">
              Social Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A1226]">
              Follow @arfas_saloon on Instagram
            </h2>
          </div>
          <a
            href={siteData.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-poppins font-semibold text-xs shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Camera size={18} />
            <span>View Instagram Profile</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl aspect-square border border-[#C9A24B]/30"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <p className="font-poppins text-xs mb-3 line-clamp-2">{post.caption}</p>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1"><Heart size={14} className="text-red-400 fill-red-400" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} className="text-[#C9A24B]" /> {post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
