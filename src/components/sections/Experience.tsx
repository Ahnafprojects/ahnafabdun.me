// src/components/sections/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Code2,
  Sparkles,
  Building2,
  ArrowRight,
  Calendar,
  MapPin
} from 'lucide-react';

// Experience data
const experienceData = [
  {
    role: 'Frontend Developer',
    company: 'SiPerpus Project',
    location: 'PENS - Surabaya',
    date: 'Sep 2024 - Nov 2024',
    type: 'Academic Project',
    description: 'Developed a comprehensive library management system using PHP Native and Tailwind CSS. Created an intuitive interface for managing books and member data with responsive design.',
    skills: ['PHP Native', 'Tailwind CSS', 'MySQL', 'Responsive Design'],
    achievements: [
      'Built user-friendly admin interface',
      'Implemented efficient data management',
      'Responsive design for all devices'
    ],
    icon: Code2
  },
  {
    role: 'Frontend Developer',
    company: 'Beautywithnazla',
    location: 'Freelance - Surabaya',
    date: 'Aug 2024 - Oct 2024',
    type: 'Client Project',
    description: 'Created a stunning static portfolio website for a makeup artist featuring profile information, gallery showcase, services, and skills presentation using React.js and CSS.',
    skills: ['React.js', 'CSS', 'JavaScript', 'UI/UX Design'],
    achievements: [
      'Engaging responsive gallery design',
      'Modern and attractive interface',
      'Optimized performance and loading'
    ],
    icon: Sparkles
  },
  {
    role: 'Robotics Program Member',
    company: 'UKM Roboholic',
    location: 'PENS - Surabaya',
    date: 'Feb 2024 - Present',
    type: 'Organization',
    description: 'Active member in robotics program, developing hardware programming skills through hands-on projects. Built innovative robots using Arduino and ESP32 microcontrollers.',
    skills: ['Arduino', 'ESP32', 'C++', 'Hardware Programming', 'Problem Solving'],
    achievements: [
      'Robot Gripper with Arduino Nano',
      'Fire Fighting Line Follower Robot with ESP32',
      'Enhanced teamwork and technical skills'
    ],
    icon: Building2
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-32 w-full min-h-screen bg-black overflow-hidden">
      {/* Minimal Background Elements - consistent with other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/5 w-1 h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="w-full bg-black px-4 sm:px-8 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            Experience
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Building expertise through hands-on projects and meaningful collaborations.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 max-w-7xl mx-auto">
          {experienceData.map((experience, index) => {
            const IconComponent = experience.icon;
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
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`lg:col-span-8 space-y-6 ${!isEven ? 'lg:col-start-5' : ''}`}>
                    {/* Header */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 text-gray-500">
                        <IconComponent size={16} />
                        <span className="text-sm font-light uppercase tracking-wider">{experience.type}</span>
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                        {experience.role}
                      </h3>
                      
                      <div className="text-lg text-gray-400 font-light">
                        {experience.company}
                      </div>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{experience.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-400 leading-relaxed font-light text-lg"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {experience.description}
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm font-light text-white uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {experience.skills.slice(0, 4).map((skill) => (
                          <span 
                            key={skill}
                            className="text-xs text-gray-500 border border-gray-800 px-3 py-1 font-light tracking-wide uppercase"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm font-light text-white uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-400 font-light flex items-start gap-3">
                            <div className="w-1 h-1 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Timeline Indicator */}
                  <div className={`lg:col-span-4 flex ${isEven ? 'justify-start' : 'justify-end lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {/* Year/Date Display */}
                      <div className="text-right text-gray-600 font-light text-sm mb-4">
                        {experience.date.split(' - ')[0]}
                      </div>
                      
                      {/* Minimal indicator */}
                      <motion.div
                        className="w-8 h-8 border border-gray-700 flex items-center justify-center"
                        whileHover={{ scale: 1.1, borderColor: '#9CA3AF' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                      
                      {/* Connection line */}
                      {index < experienceData.length - 1 && (
                        <motion.div
                          className="absolute top-8 left-4 w-px h-24 bg-gray-800"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Subtle divider */}
                {index < experienceData.length - 1 && (
                  <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-24"
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
          <motion.div
            className="inline-flex items-center gap-3 sm:gap-4 text-gray-400 group cursor-pointer text-base sm:text-lg"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-light">Ready for the next challenge</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
          
          <motion.div
            className="mt-8 w-24 h-px bg-white/20 mx-auto"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;