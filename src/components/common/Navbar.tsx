// src/components/common/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

function getActiveSection() {
  if (typeof window === 'undefined') return '#home';
  
  const sections = ['#home', '#about', '#projects', '#skills', '#experience', '#contact'];
  const scrollPosition = window.scrollY + 100;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.querySelector(sections[i]) as HTMLElement;
    if (element && element.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  return '#home';
}

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setActiveSection(getActiveSection());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(href);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Ultra Minimalist */}
      <motion.nav
        className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className={`relative py-4 px-8 rounded-full border border-white/10 transition-all duration-700 ${
            scrolled 
              ? 'bg-black/90 backdrop-blur-xl border-white/20' 
              : 'bg-black/60 backdrop-blur-xl'
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex items-center justify-center gap-8">
            {/* Ultra Minimal Logo */}
            <motion.a
              href="#home"
              className="group flex items-center"
              onClick={(e) => handleNavClick(e, '#home')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-light text-lg tracking-widest group-hover:text-gray-300 transition-colors duration-300">
                AHNAF
              </span>
              {/* Subtle underline */}
              <motion.div
                className="h-px bg-white mt-1 w-0 group-hover:w-full transition-all duration-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>

            {/* Minimal Navigation Links */}
            <div className="flex items-center gap-6">
              {navLinks.slice(1).map((link, index) => {
                const isActive = activeSection === link.href;
                
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-light tracking-wide transition-all duration-300 group flex items-center h-6 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-sm uppercase leading-none">{link.label}</span>
                    
                    {/* Active indicator - minimal line */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-px bg-white"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-px bg-gray-500 w-0 group-hover:w-full transition-all duration-300"
                      style={{ display: isActive ? 'none' : 'block' }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Minimal CTA - Connect with me (LinkedIn) */}
            <motion.a
              href="https://www.linkedin.com/in/muhammad-ahnaf-596708320"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 h-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ x: 5 }}
            >
              <span className="font-light text-sm uppercase tracking-wider leading-none">{t('nav.connect')}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Desktop Language Switch - Top Right Corner */}
      <motion.div
        className="hidden md:block fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLanguage(language === 'en' ? 'id' : 'en');
          }}
          className="group flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 px-4 py-2 border border-white/10 rounded-full cursor-pointer bg-black/60 backdrop-blur-xl"
          style={{ pointerEvents: 'auto' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe size={16} />
          <span className="font-light text-sm uppercase tracking-wider">{language === 'en' ? 'ENG' : 'IND'}</span>
        </motion.button>
      </motion.div>

      {/* Mobile Navbar - Ultra Clean */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className={`mx-4 mt-4 px-5 py-3 rounded-full border transition-all duration-700 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-white/20' 
            : 'bg-black/80 backdrop-blur-xl border-white/10'
        }`}>
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <motion.a
              href="#home"
              className="group"
              onClick={(e) => handleNavClick(e, '#home')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-white font-light text-sm tracking-[0.3em]">
                AHNAF
              </span>
            </motion.a>

            {/* Right side buttons container */}
            <div className="flex items-center gap-2">
              {/* Mobile Language Switch */}
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setLanguage(language === 'en' ? 'id' : 'en');
                }}
                className="px-3 py-1.5 text-white/80 hover:text-white text-xs font-light tracking-wider uppercase transition-colors duration-300 border border-white/10 rounded-full hover:border-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'EN' : 'ID'}
              </motion.button>

              {/* Minimal Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white/80 hover:text-white transition-colors duration-300 border border-white/10 rounded-full hover:border-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Minimal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 pt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block py-4 transition-all duration-300 border-b border-white/5 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400'
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-light tracking-wider text-xl uppercase">{link.label}</span>
                        {isActive && (
                          <motion.div
                            className="w-1.5 h-1.5 bg-white rounded-full"
                            layoutId="mobileActiveIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.a>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <a
                    href="https://www.linkedin.com/in/muhammad-ahnaf-596708320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 px-6 py-3 border border-white/20 rounded-full"
                  >
                    <span className="font-light tracking-wider uppercase text-sm">{t('nav.connect')}</span>
                    <ArrowRight size={16} />
                  </a>
                </motion.div>

                {/* Subtle close hint */}
                <motion.div
                  className="absolute bottom-8 left-0 right-0 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <p className="text-gray-600 text-xs font-light tracking-wider uppercase">Tap anywhere to close</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;