// src/components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Github, ExternalLink, Globe, Database, Code2, ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Definisikan tipe untuk setiap project
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  category?: string;
};

const categoryIcons = {
  'IoT': Globe,
  'Frontend': Code2,
  'Backend': Database,
  'Fullstack': Code2,
};

const Projects = () => {
  const { t } = useLanguage();
  
  // Data projects with translations
  const projectsData: Project[] = [
    {
      title: t('project1.title'),
      description: t('project1.description'),
      image: '/assets/images/project1.jpg',
      tags: ['Next.js', 'TypeScript','Tailwind CSS', 'Prisma.io', 'Cloudinary'],
      liveUrl: 'https://lokalkeren.netlify.app',
      githubUrl: 'https://github.com/Ahnafprojects/direktori-umkm',
      featured: true,
      category: t('project1.category')
    },
    {
      title: t('project2.title'),
      description: t('project2.description'),
      image: '/assets/images/project2.jpg',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'AI'],
      liveUrl: 'https://sifinance.netlify.app',
      githubUrl: 'https://github.com/Ahnafprojects',
      featured: true,
      category: t('project2.category')
    },
    {
      title: t('project3.title'),
      description: t('project3.description'),
      image: '/assets/images/project3.jpg',
      tags: ['React.js', 'CSS', 'JavaScript', 'Responsive'],
      liveUrl: 'https://beautywithnazla.vercel.app',
      githubUrl: '#',
      category: t('project3.category')
    },
  ];
  
  return (
    <section id="projects" className="relative py-12 sm:py-20 md:py-32 bg-black overflow-hidden w-full min-h-screen">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* Minimal floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="w-full relative z-10 bg-black px-4 sm:px-8 md:px-16">
        {/* Minimalist Section Header */}
        <motion.div
          className="mb-10 sm:mb-16 lg:mb-20 max-w-7xl mx-auto"
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
          >
            {t('projects.title')}
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        {/* Minimalist Projects Grid */}
        <div className="space-y-6 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto">
          {projectsData.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code2;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-10 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <motion.div
                    className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-black border border-gray-800">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-contain transition-all duration-700"
                        quality={100}
                        priority={index === 0}
                      />
                      
                      {/* Minimal overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
                    </div>
                    
                    {/* Featured indicator */}
                    {project.featured && (
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-black rounded-full" />
                      </div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {/* Category */}
                    <motion.div
                      className="flex items-center gap-3 text-gray-400"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CategoryIcon size={16} />
                      <span className="text-sm font-light uppercase tracking-wider">{project.category}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-400 leading-relaxed font-light text-base sm:text-lg"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span 
                          key={tag}
                          className="text-xs text-gray-500 border border-gray-800 px-3 py-1 font-light tracking-wide uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                      className="flex gap-6 pt-4"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {project.liveUrl && (
                        <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Eye size={16} />
                          <span className="font-light">{t('projects.viewLive')}</span>
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                      
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Github size={16} />
                        <span className="font-light">{t('projects.source')}</span>
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                {/* Subtle divider */}
                {index < projectsData.length - 1 && (
                  <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-8 sm:mt-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Call to Action */}
        <motion.div
          className="text-center mt-20 sm:mt-24 lg:mt-32 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Ahnafprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 sm:gap-4 text-gray-400 group cursor-pointer text-base sm:text-lg"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-light">{t('projects.moreGithub')}</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
          
          <motion.div
            className="mt-8 w-24 h-px bg-white/20 mx-auto"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;