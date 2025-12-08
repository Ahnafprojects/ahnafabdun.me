// src/components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Settings, 
  MonitorSmartphone, 
  LayoutTemplate, 
  Terminal,
  Globe,
  Palette,
  Wrench,
  Cpu,
  Zap,
  ArrowRight
} from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Definisikan tipe untuk skill
type Skill = {
  name: string;
  icon: React.ReactNode;
  color?: string;
};

// Data skill yang dikategorikan dengan tema minimalis
const skillCategories = [
  {
    title: "Frontend",
    icon: <LayoutTemplate className="h-5 w-5" />,
    skills: [
      { name: "React", icon: <Code />, color: "text-white" },
      { name: "Next.js", icon: <Zap />, color: "text-white" },
      { name: "TypeScript", icon: <Terminal />, color: "text-white" },
      { name: "Tailwind CSS", icon: <Palette />, color: "text-white" },
      { name: "HTML5 & CSS3", icon: <Globe />, color: "text-white" },
      { name: "JavaScript", icon: <Code />, color: "text-white" },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <Server />, color: "text-white" },
      { name: "Laravel", icon: <Code />, color: "text-white" },
      { name: "PHP", icon: <Code />, color: "text-white" },
      { name: "PostgreSQL", icon: <Database />, color: "text-white" },
      { name: "Supabase", icon: <Database />, color: "text-white" },
      { name: "Prisma.io", icon: <Database />, color: "text-white" },
    ]
  },
  {
    title: "Tools",
    icon: <Settings className="h-5 w-5" />,
    skills: [
      { name: "Git & GitHub", icon: <Settings />, color: "text-white" },
      { name: "Docker", icon: <Wrench />, color: "text-white" },
      { name: "Kubernetes", icon: <Cpu />, color: "text-white" },
      { name: "Drone CI", icon: <Settings />, color: "text-white" },
      { name: "Gitea", icon: <Settings />, color: "text-white" },
      { name: "Figma", icon: <LayoutTemplate />, color: "text-white" },
    ]
  }
];

const Skills = () => {
  const { t } = useLanguage();
  
  return (
    // PENYESUAIAN 1: Mengurangi padding vertikal di layar kecil
    <section id="skills" className="relative py-20 sm:py-24 md:py-32 bg-black overflow-hidden w-full min-h-screen">
      {/* Subtle Background Elements - sama seperti Projects */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="w-full relative z-10 bg-black px-4 sm:px-8 md:px-16">
        {/* PENYESUAIAN 2: Mengurangi margin bawah di layar kecil */}
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-12 h-px bg-white mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          
          {/* PENYESUAIAN 3: Mengecilkan ukuran judul di layar kecil */}
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('skills.title')}
          </motion.h2>
          
          {/* PENYESUAIAN 4: Mengecilkan ukuran subjudul di layar kecil */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        {/* Grid ini sudah responsif, tidak perlu diubah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-24 lg:mb-32 w-full max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
            >
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-500">
                    {category.icon}
                  </div>
                  {/* PENYESUAIAN 5: Mengecilkan judul kategori di layar kecil */}
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div
                  className="w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-white/40 transition-all duration-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: catIndex * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill flex items-center gap-4 py-2 border-b border-gray-800 hover:border-gray-600 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: catIndex * 0.2 + skillIndex * 0.1 + 0.4 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="text-gray-500 group-hover/skill:text-white transition-colors duration-300">
                      {React.cloneElement(skill.icon as React.ReactElement, { 
                        className: "h-4 w-4" 
                      })}
                    </div>
                    
                    {/* PENYESUAIAN 6: Mengecilkan nama skill di layar kecil */}
                    <span className="text-sm sm:text-base text-gray-400 group-hover/skill:text-white font-light transition-colors duration-300 flex-1">
                      {skill.name}
                    </span>
                    
                    <motion.div
                      className="w-1 h-1 bg-gray-600 rounded-full group-hover/skill:bg-white transition-colors duration-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.2 + skillIndex * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 text-gray-400 group cursor-pointer"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-light">Always learning, always growing</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
          
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

export default Skills;