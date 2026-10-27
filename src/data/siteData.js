export const siteData = {
  name: "Arfa's Beauty Salon & Bridal Lounge",
  branch: "Branch II",
  tagline: "Where every look becomes a celebration",
  subTagline: "Experience luxury beauty care, flawless bridal artistry, and rejuvenating skin treatments in Lahore.",
  establishedDate: "20 December 2020",
  address: "Opposite Gate No. 2, near Allied School, Al Rehman Garden Phase 2, Lahore, 54000",
  phone: "0301 1633331",
  whatsappNumber: "923011633331",
  whatsappLink: "https://wa.me/923011633331",
  formEndpoint: "", // Optional: e.g. https://formspree.io/f/your-form-id
  hours: {
    opens: "11:00 AM",
    closes: "8:00 PM",
    note: "Open 7 days a week"
  },
  socials: {
    instagram: "https://www.instagram.com/arfas_saloon/",
    facebook: "http://www.facebook.com/arfasbeautysalon",
    youtube: "https://www.youtube.com/channel/UC_vN1o8W1oE-18n0ObB50TA"
  },
  stats: {
    rating: 4.9,
    reviewsCount: 248,
    bridesServed: "1,500+",
    happyClients: "10,000+"
  },
  announcement: "✨ Bridal & Walima Bookings Open for 2026/2027! Avail 15% off on advance bookings. Call or WhatsApp 0301-1633331 ✨",

  themes: [
    {
      id: "rose",
      name: "Rose Bride",
      colors: {
        ivory: "#FFF9F3",
        blush: "#F4C6CF",
        gold: "#C9A24B",
        burgundy: "#5A1226",
        charcoal: "#2B2B2B",
        accent: "#F4C6CF"
      }
    },
    {
      id: "emerald",
      name: "Royal Emerald",
      colors: {
        ivory: "#F2FAF7",
        blush: "#A3D9C9",
        gold: "#D4AF37",
        burgundy: "#0B3E2D",
        charcoal: "#1A2E26",
        accent: "#D4AF37"
      }
    },
    {
      id: "midnight",
      name: "Midnight Glam",
      colors: {
        ivory: "#121212",
        blush: "#E0A96D",
        gold: "#D4AF37",
        burgundy: "#1E1E24",
        charcoal: "#F5F5F5",
        accent: "#E0A96D"
      }
    },
    {
      id: "peach",
      name: "Peach Mehndi",
      colors: {
        ivory: "#FFF5ED",
        blush: "#FFD1B3",
        gold: "#E08234",
        burgundy: "#733614",
        charcoal: "#331E12",
        accent: "#E08234"
      }
    },
    {
      id: "lavender",
      name: "Lavender Dream",
      colors: {
        ivory: "#F9F6FC",
        blush: "#D8BFD8",
        gold: "#B8860B",
        burgundy: "#4B0082",
        charcoal: "#2E2B30",
        accent: "#D8BFD8"
      }
    }
  ],

  servicesCategories: [
    { id: "bridal", name: "Bridal Lounge" },
    { id: "makeup", name: "Party Makeup" },
    { id: "hair", name: "Hair Styling" },
    { id: "skin", name: "Skin & Facials" },
    { id: "hands", name: "Hands & Feet" },
    { id: "nails", name: "Nails" }
  ],

  services: [
    {
      id: 1,
      category: "bridal",
      name: "Signature HD Bridal Makeup",
      description: "Flawless, waterproof HD bridal look customized with premium international brands, eyelashes, lens adjustment, and exquisite dupatta setting.",
      price: "35,000",
      duration: "3 hrs",
      icon: "Crown",
      popular: true,
      includes: ["Custom HD Foundation", "Lash Extensions", "Dupatta & Jewellery Setting", "Touch-up Kit"]
    },
    {
      id: 2,
      category: "bridal",
      name: "Walima / Engagement Glamour",
      description: "Soft, ethereal, and glowing look tailored for your Walima or engagement ceremony with sophisticated hairstyling.",
      price: "28,000",
      duration: "2.5 hrs",
      icon: "Sparkles",
      popular: false,
      includes: ["Airbrush Glow", "Hairstyle of choice", "Lens fitting", "Draping"]
    },
    {
      id: 3,
      category: "makeup",
      name: "Party Makeup & Hair",
      description: "Stunning glam party makeup by our expert artists with complimentary professional hairstyle and draping.",
      price: "8,500",
      duration: "1.5 hrs",
      icon: "Palette",
      popular: true,
      includes: ["Full Party Glam", "Hairstyle / Blowdry", "Eyelashes"]
    },
    {
      id: 4,
      category: "makeup",
      name: "Guest / Nikkah Makeup",
      description: "Graceful and elegant understated glam for Nikkah ceremonies or family receptions.",
      price: "12,000",
      duration: "1.5 hrs",
      icon: "Heart",
      popular: false,
      includes: ["Subtle Glow", "Elegant Updo", "Eyelashes"]
    },
    {
      id: 5,
      category: "skin",
      name: "Advanced Hydro Facial",
      description: "Deep cleansing, exfoliation, extraction, hydration and antioxidant protection leaving your skin glowing and glass-like.",
      price: "6,500",
      duration: "1 hr",
      icon: "Droplets",
      popular: true,
      includes: ["6-Step Deep Cleansing", "Serum Infusion", "LED Light Therapy", "Hydrating Mask"]
    },
    {
      id: 6,
      category: "skin",
      name: "Gold / Whitening Facial",
      description: "Luxurious facial treatment with 24K gold foil infusion to boost collagen, brighten skin tone, and restore elasticity.",
      price: "5,000",
      duration: "1 hr",
      icon: "Sun",
      popular: false,
      includes: ["24K Gold Mask", "Collarbone Massage", "Extraction", "Brightening Serum"]
    },
    {
      id: 7,
      category: "hair",
      name: "Keratin / Botox Hair Treatment",
      description: "Deep conditioning protein infusion that tames frizz, repairs damage, and gives mirror-like smoothness for months.",
      price: "15,000",
      duration: "3 hrs",
      icon: "Zap",
      popular: true,
      includes: ["Deep Repair Wash", "Protein Infusion", "Professional Flat Iron Finish"]
    },
    {
      id: 8,
      category: "hair",
      name: "Balayage & Hair Coloring",
      description: "Custom dimensional hair coloring using professional techniques for seamless gradients and rich tones.",
      price: "12,000+",
      duration: "2.5 hrs",
      icon: "Scissors",
      popular: false,
      includes: ["Consultation", "Custom Balayage", "Toning", "Blowdry"]
    },
    {
      id: 9,
      category: "hair",
      name: "Hair Styling & Blowdry",
      description: "Voluminous blowdry, Hollywood waves, or elegant braided updos for any occasion.",
      price: "3,500",
      duration: "45 mins",
      icon: "Wind",
      popular: false,
      includes: ["Wash & Blowdry", "Style Setting", "Heat Protectant"]
    },
    {
      id: 10,
      category: "hands",
      name: "Luxury Manicure & Pedicure",
      description: "Rejuvenating hand and foot care with scrub, cuticle treatment, relaxing massage, and paraffin wax mask.",
      price: "4,500",
      duration: "1.5 hrs",
      icon: "Sparkles",
      popular: true,
      includes: ["Cuticle Care", "Exfoliating Scrub", "Paraffin Wax", "Relaxing Massage"]
    },
    {
      id: 11,
      category: "nails",
      name: "Acrylic Nails & Gel Polish",
      description: "Long-lasting acrylic extensions or gel overlay with custom nail art designs by certified nail techs.",
      price: "4,000",
      duration: "1 hr",
      icon: "Heart",
      popular: false,
      includes: ["Full Set Extensions", "Gel Color", "Basic Nail Art"]
    },
    {
      id: 12,
      category: "skin",
      name: "Full Body Waxing & Polishing",
      description: "Gentle Rica wax hair removal followed by a soothing whitening body polish for silky smooth skin.",
      price: "6,000",
      duration: "2 hrs",
      icon: "Shield",
      popular: false,
      includes: ["Rica Wax Full Body", "Whitening Body Scrub", "Moisturizing Finish"]
    }
  ],

  bridalPackages: [
    {
      id: "classic",
      name: "Classic Bridal Package",
      subtitle: "Essential elegance for your big day",
      price: "35,000",
      popular: false,
      inclusions: [
        "HD Bridal Makeup (Bridal / Walima)",
        "Professional Hair Styling & Setting",
        "Eyelashes & Premium Lens Application",
        "Duptha & Jewellery Draping",
        "Complimentary Party Makeup for 1 Person",
        "Basic Manicure & Pedicure"
      ]
    },
    {
      id: "premium",
      name: "Premium Royal Package",
      subtitle: "The ultimate bridal transformation",
      price: "55,000",
      popular: true,
      inclusions: [
        "Signature HD Bridal Makeup + Trial Session",
        "Advanced Hair Styling & Extensions",
        "Luxury Hydro Facial 3 days before",
        "Full Body Whitening Polish & Rica Wax",
        "Premium Mani-Pedi with Paraffin Wax",
        "Complimentary Party Makeup for 2 Persons",
        "Complete Draping & Styling Assistance"
      ]
    },
    {
      id: "royal",
      name: "Arfa's Supreme VIP Lounge",
      subtitle: "Absolute luxury and dedicated bridal team",
      price: "75,000",
      popular: false,
      inclusions: [
        "Exclusive VIP Bridal Room Access",
        "Arfa's Personal Master Artist Makeup",
        "Pre-Bridal Skin Glow Series (3 Sessions)",
        "Keratin / Hair Treatment included",
        "Full Body Polish, Scrub & Rica Wax",
        "Luxury Spa Manicure & Pedicure",
        "Complimentary Party Makeup for 4 Persons",
        "Refreshments & Dedicated Assistant"
      ]
    }
  ],

  beforeAfter: [
    {
      id: 1,
      title: "Bridal HD Transformation",
      category: "Bridal",
      beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      description: "Soft glam bridal makeup with flawless contouring and custom hairstyle."
    },
    {
      id: 2,
      title: "Party Glam & Waves",
      category: "Party",
      beforeImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      description: "Vibrant party look with Hollywood bouncy waves and radiant highlighter."
    },
    {
      id: 3,
      title: "Hydro Facial Glow",
      category: "Skin",
      beforeImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
      description: "Immediate glass skin radiance after our signature 6-step Hydro Facial."
    }
  ],

  gallery: [
    {
      id: 1,
      category: "bridal",
      title: "Royal Crimson Bride",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      category: "party",
      title: "Walima Reception Glam",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      category: "hair",
      title: "Voluminous Bridal Curls",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      category: "nails",
      title: "Bridal Nail Art & Crystals",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      category: "facial",
      title: "Hydra Glow Treatment",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      category: "bridal",
      title: "Traditional Nikkah Look",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      category: "party",
      title: "Evening Reception Elegance",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      category: "hair",
      title: "Balayage Highlights",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800"
    }
  ],

  whyChooseUs: [
    {
      icon: "Users",
      title: "Cooperative & Caring Staff",
      description: "Our artists listen attentively to your preferences, ensuring a comfortable, warm, and friendly environment throughout your visit."
    },
    {
      icon: "Sparkles",
      title: "Stunning Makeup & Hairstyling",
      description: "Celebrated across Lahore for breathtaking bridal and party transformations that stay flawless all day and night."
    },
    {
      icon: "Droplets",
      title: "Hydro Facial Experts",
      description: "Advanced skin rejuvenation treatments customized by certified estheticians for instant radiance and deep hydration."
    },
    {
      icon: "HeartHandshake",
      title: "Gentle & Hardworking Artists",
      description: "Known for meticulous attention to detail, gentle hair handling, and tireless dedication to your perfection."
    },
    {
      icon: "ShieldCheck",
      title: "Hygienic & Relaxing Space",
      description: "Immaculately sanitized stations, sterilized tools, and a tranquil lounge atmosphere designed for ultimate relaxation."
    },
    {
      icon: "MapPin",
      title: "Convenient Location",
      description: "Easily accessible Branch II located at Al Rehman Garden Phase 2, Lahore with ample parking and welcoming ambiance."
    }
  ],

  reviews: [
    {
      id: 1,
      name: "Ayesha Khan",
      rating: 5,
      date: "2 weeks ago",
      comment: "I got my party makeup and hairstyle done from Arfa's Salon Branch II. The staff is exceptionally cooperative and my makeup looked stunning till the very end of the event!",
      theme: "Party Makeup & Staff Behavior"
    },
    {
      id: 2,
      name: "Maham Tariq",
      rating: 5,
      date: "1 month ago",
      comment: "Had the hydro facial and manicure done. My skin has never felt this glowing and soft! The esthetician was so gentle and professional. Highly recommended!",
      theme: "Hydro Facial"
    },
    {
      id: 3,
      name: "Zainab Malik",
      rating: 5,
      date: "1 month ago",
      comment: "My bridal makeup was done by Arfa's team and words cannot express how happy I am. Everyone kept praising my makeup and hairstyle. Truly the best salon in Al Rehman Garden!",
      theme: "Bridal Results"
    },
    {
      id: 4,
      name: "Sana Farooq",
      rating: 5,
      date: "2 months ago",
      comment: "Very cooperative staff and clean environment. They made me feel so comfortable for my engagement. Amazing results and great value for money.",
      theme: "Cooperative Staff"
    }
  ]
};
