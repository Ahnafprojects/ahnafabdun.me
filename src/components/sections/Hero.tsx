// src/components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import Lanyard from '../3d/Lanyard';
import { ArrowRight, Eye, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = t('hero.title');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && displayedText === fullText) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Pause at empty, then start typing again
      setIsDeleting(false);
      timeout = setTimeout(() => {}, 500);
    } else {
      // Typing or deleting
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayedText(prev => 
          isDeleting 
            ? fullText.slice(0, prev.length - 1)
            : fullText.slice(0, prev.length + 1)
        );
      }, speed);
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, fullText]);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden">
      <Navbar />
      
      {/* Minimal Background Elements - consistent with Projects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating elements matching Projects style */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-1 h-40 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/2 right-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 pt-24 sm:pt-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),550px] gap-8 lg:gap-8 items-center">
            {/* Text Content */}
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Simple indicator line - matching Projects style */}
              <motion.div
                className="w-16 h-px bg-white mb-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              {/* Large minimalist typography with typewriter effect */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {displayedText}
              </motion.h1>

              {/* Clean subtitle */}
              <motion.div
                className="mb-12 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-xl text-gray-400 font-light">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg text-gray-500 font-light max-w-2xl leading-relaxed">
                  {t('hero.description')}
                </p>
              </motion.div>

              {/* Minimal action buttons */}
              <motion.div
                className="flex flex-wrap gap-6 sm:gap-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.a 
                  href="#projects"
                  className="group/link flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Eye size={18} />
                  <span className="font-light text-base sm:text-lg">{t('hero.viewWork')}</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a 
                  href="https://github.com/Ahnafprojects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={18} />
                  <span className="font-light text-base sm:text-lg">GitHub</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* 3D Lanyard Card - Hidden on mobile, shown on desktop */}
            <motion.div 
              className="hidden lg:block relative w-full h-[900px] -mt-20 -mb-32"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              style={{ pointerEvents: 'auto', overflow: 'visible' }}
            >
              <motion.div 
                className="absolute inset-0 w-full h-full" 
                style={{ pointerEvents: 'auto' }}
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <Lanyard position={[0, -2, 18]} scale={0.8} />
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Lanyard Card - Show on mobile below content */}
          <motion.div 
            className="lg:hidden relative w-[calc(100%+2rem)] h-[700px] -mx-4 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ pointerEvents: 'auto', overflow: 'visible' }}
          >
            <motion.div 
              className="absolute inset-0 w-full h-full" 
              style={{ pointerEvents: 'auto' }}
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <Lanyard position={[0, -1, 15]} scale={0.9} />
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Subtle animated divider at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </section>
  );
};

export default Hero;