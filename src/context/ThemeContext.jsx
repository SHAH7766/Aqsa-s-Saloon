import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(() => {
    try {
      return localStorage.getItem('arfa_theme') || 'rose';
    } catch {
      return 'rose';
    }
  });

  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('arfa_dark') === 'true';
    } catch {
      return false;
    }
  });

  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('arfa_lang') || 'EN';
    } catch {
      return 'EN';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('arfa_theme', activeTheme);
    } catch {}

    const themeObj = siteData.themes.find(t => t.id === activeTheme) || siteData.themes[0];
    const root = document.documentElement;
    root.style.setProperty('--color-ivory', themeObj.colors.ivory);
    root.style.setProperty('--color-blush', themeObj.colors.blush);
    root.style.setProperty('--color-gold', themeObj.colors.gold);
    root.style.setProperty('--color-burgundy', themeObj.colors.burgundy);
    root.style.setProperty('--color-charcoal', themeObj.colors.charcoal);
  }, [activeTheme]);

  useEffect(() => {
    try {
      localStorage.setItem('arfa_dark', darkMode);
      localStorage.setItem('arfa_lang', lang);
    } catch {}

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, lang]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleLang = () => setLang(prev => (prev === 'EN' ? 'UR' : 'EN'));

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, darkMode, toggleDarkMode, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
