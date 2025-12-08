// src/components/sections/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Minimal social links
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Ahnafprojects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-ahnaf-596708320'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&to=muhammadahnafworks@gmail.com'
    }
  ];

  // Navigation links
  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-black py-20 sm:py-24 md:py-32 w-full overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-16 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="w-full bg-black px-4 sm:px-8 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h3 
                className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-2 tracking-widest"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                AHNAF
              </motion.h3>
              <motion.div
                className="w-12 h-px bg-white/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-light text-base sm:text-lg lg:text-xl tracking-wide">{t('footer.navigation')}</h4>
            <motion.div
              className="w-8 h-px bg-white/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <div className="space-y-3 sm:space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-gray-400 hover:text-white font-light transition-colors duration-300 group text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-center justify-between py-1 border-b border-transparent group-hover:border-gray-800 transition-all duration-300">
                    <span className="uppercase text-sm tracking-wide">{link.label}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-light text-base sm:text-lg lg:text-xl tracking-wide">{t('footer.connect')}</h4>
            <motion.div
              className="w-8 h-px bg-white/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <div className="space-y-3 sm:space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith('http') || social.href.startsWith('mailto:') || social.href.startsWith('tel:');
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors duration-300 group py-1 text-sm sm:text-base"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-light text-sm tracking-wide uppercase">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 sm:pt-10 lg:pt-12 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-400 font-light text-xs sm:text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear} {t('footer.copyright')}</span>
              <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full" />
              <span className="hidden sm:inline">{t('footer.built')}</span>
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <span className="font-light text-xs sm:text-sm uppercase tracking-wide">{t('footer.backToTop')}</span>
              <ArrowUp size={12} className="sm:size-14 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Final Touch */}
          <motion.div
            className="mt-8 sm:mt-10 lg:mt-12 w-16 sm:w-20 lg:w-24 h-px bg-white/10 mx-auto"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;