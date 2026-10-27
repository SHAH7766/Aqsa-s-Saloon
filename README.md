# Arfa's Beauty Salon & Bridal Lounge (Branch II) — Lahore

Welcome to the official frontend repository for **Arfa's Beauty Salon & Bridal Lounge (Branch II)**, located at Al Rehman Garden Phase 2, Lahore, Pakistan.

## 🌟 Features & Design System
- **Cinematic Luxury Branding**: Designed with ivory (`#FFF9F3`), blush rose (`#F4C6CF`), champagne gold (`#C9A24B`), and deep burgundy (`#5A1226`).
- **Smooth Scrolling & Animations**: Powered by Lenis, Framer Motion, GSAP, and Swiper.js.
- **Interactive Before / After Slider**: Drag slider to reveal makeover transformations.
- **Category Filterable Gallery**: Masonry layout with animated filter chips and lightbox.
- **Multi-Step Booking Wizard**: 4-step reservation wizard with confetti celebration and pre-filled WhatsApp direct booking (`wa.me/923011633331`).
- **Google Reviews & Rating Showcase**: 4.9 stars across 248+ reviews highlighting cooperative staff, party makeup, hydro facial, and hairstyling.
- **Complete Editable Data File**: All services, pricing, packages, reviews, and contact info live in a single file (`src/data/siteData.js`).

---

## 🚀 Getting Started (Run Locally)

Prerequisites: Node.js (v18 or higher recommended) installed on your machine.

1. **Clone or download** this repository into your local directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`.

---

## ✏️ How to Edit Content

All website content (services, prices, packages, testimonials, business hours, and phone numbers) can be updated in one place:
👉 **`src/data/siteData.js`**

Simply open `src/data/siteData.js`, modify the text, prices, or links, and save. Vite's HMR (Hot Module Replacement) will instantly update your local view.

---

## 🖼️ How to Replace Images

Images are currently sourced from high-end Unsplash photography placeholders matching luxury salon aesthetics. To replace them with real salon photos:
1. Place your high-resolution WebP or JPG images into the `public/images/` folder.
2. Update the image URLs in `src/data/siteData.js` or directly inside the respective component files.

---

## 📦 How to Build & Deploy (Free on Vercel or Netlify)

### 1. Build for Production
```bash
npm run build
```
This generates an optimized static production build in the `dist/` folder.

### 2. Deploy on Vercel
- Install Vercel CLI (`npm i -g vercel`) or push your code to GitHub and import the repository on [Vercel](https://vercel.com).
- Vercel will automatically detect Vite and configure the build settings (`npm run build`, output directory `dist`).

### 3. Deploy on Netlify
- Drag and drop your `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository on [Netlify](https://netlify.com) with build command `npm run build` and publish directory `dist`.

---

## 📄 License
© 2026 Arfa's Beauty Salon & Bridal Lounge (Branch II). All rights reserved.
