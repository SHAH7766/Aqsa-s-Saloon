import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { siteData } from '../data/siteData';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FFF9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Rating Summary */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-6">
            Loved by Our Clients
          </h2>

          <div className="inline-flex flex-col items-center glass-card px-8 py-6 rounded-3xl shadow-xl border border-[#C9A24B]/40">
            <div className="flex items-center gap-1 text-[#C9A24B] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#C9A24B" />
              ))}
            </div>
            <span className="font-serif text-4xl font-bold text-[#5A1226] mb-1">
              {siteData.stats.rating} / 5.0
            </span>
            <span className="font-poppins text-xs text-[#2B2B2B]/70 uppercase tracking-widest">
              Based on {siteData.stats.reviewsCount}+ Google Reviews
            </span>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {siteData.reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="h-full">
                <div className="glass-card rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full border border-[#C9A24B]/30 relative">
                  <div className="absolute top-6 right-6 text-[#C9A24B]/30">
                    <Quote size={40} />
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-[#C9A24B] mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#C9A24B" />
                      ))}
                    </div>

                    <p className="font-poppins text-sm text-[#2B2B2B]/80 italic mb-6 leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C9A24B]/20 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#5A1226]">
                        {rev.name}
                      </h4>
                      <span className="text-xs text-[#C9A24B] font-medium">
                        {rev.theme}
                      </span>
                    </div>
                    <span className="text-xs text-[#2B2B2B]/50">
                      {rev.date}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Google Review Button */}
        <div className="text-center">
          <a
            href="https://g.page/r/example"
            target="_blank"
            rel="noreferrer"
            data-cursor="Review"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5A1226] text-[#FFF9F3] font-poppins text-sm font-semibold shadow-xl hover:bg-[#C9A24B] hover:text-[#5A1226] transition-all duration-300 hover:scale-105"
          >
            <span>Write a Review on Google</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
