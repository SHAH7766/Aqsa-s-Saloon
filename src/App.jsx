import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { PersistentUI } from './components/PersistentUI';
import { BookingCartDrawer } from './components/BookingCartDrawer';
import { InstagramFeed } from './components/InstagramFeed';
import { CartProvider } from './context/CartContext';
import { Hero } from './sections/Hero';
import { MarqueeStrip } from './sections/MarqueeStrip';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { BridalPackages } from './sections/BridalPackages';
import { BeforeAfter } from './sections/BeforeAfter';
import { Gallery } from './sections/Gallery';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Reviews } from './sections/Reviews';
import { BookingWizard } from './sections/BookingWizard';
import { ContactLocation } from './sections/ContactLocation';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleBookClick = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FFF9F3] text-[#2B2B2B] relative selection:bg-[#F4C6CF] selection:text-[#5A1226]">
        <Preloader />
        <CustomCursor />
        <PersistentUI onBookClick={handleBookClick} />
        <BookingCartDrawer />

        <Navbar onBookClick={handleBookClick} />

        <main>
          <Hero onBookClick={handleBookClick} />
          <MarqueeStrip />
          <About />
          <Services />
          <BridalPackages />
          <BeforeAfter />
          <Gallery />
          <WhyChooseUs />
          <Reviews />
          <BookingWizard />
          <ContactLocation />
          <InstagramFeed />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
