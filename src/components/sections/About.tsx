'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    { title: t('about.cleanCode'), description: t('about.cleanCodeDesc') },
    { title: t('about.userFocus'), description: t('about.userFocusDesc') },
    { title: t('about.innovation'), description: t('about.innovationDesc') }
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-24 bg-black w-full min-h-screen">
      {/* Minimal Background Elements - consistent with other sections */}
      <div className="absolute inset-0 bg-black">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="w-full relative z-10 bg-black px-4 sm:px-8 md:px-16">
        {/* Minimalist Section Header */}
        <motion.div
          className="mb-16 sm:mb-20 lg:mb-24 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Simple indicator */}
          <motion.div
            className="w-12 h-px bg-white mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          
          {/* Clean Typography */}
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('about.title')}
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Description */}
            <div className="space-y-6">
              <motion.p 
                className="text-xl text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t('about.intro1')}
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t('about.intro2')}
              </motion.p>
            </div>

            {/* Current Focus */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light text-white uppercase tracking-wider">
                {t('about.currently')}
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="border border-gray-800 p-4 hover:border-gray-600 transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-light">{t('about.available')}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-light">
                    {t('about.availableDesc')}
                  </p>
                </motion.div>
                
                <motion.div
                  className="border border-gray-800 p-4 hover:border-gray-600 transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-light">{t('about.learning')}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-light">
                    {t('about.learningDesc')}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light text-white uppercase tracking-wider">
                {t('about.philosophy')}
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="border-l border-gray-800 pl-4 hover:border-gray-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-white font-light mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#contact"
                className="group/link flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-light text-lg">{t('about.cta')}</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-32"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default About;