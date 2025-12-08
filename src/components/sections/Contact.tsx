// src/components/sections/Contact.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send,
  MapPin,
  Phone,
  ArrowRight,
  Globe,
  CheckCircle,
  XCircle,
  X
} from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// Contact info data
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muhammadahnafworks@gmail.com',
    href: 'mailto:muhammadahnafworks@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 812-5296-1135',
    href: 'tel:+6281252961135'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Surabaya, Indonesia',
    href: '#'
  }
];

// Social links
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
  }
];

const Contact = () => {
  const { t } = useLanguage();
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Send to Formspree
    fetch('https://formspree.io/f/xqardqgl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(response => {
      if (response.ok) {
        showNotification('success', "Thank you for reaching out! I'll get back to you soon.");
        form.reset();
      } else {
        showNotification('error', "Sorry, there was an error sending your message. Please try again or contact me directly.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification('error', "Sorry, there was an error sending your message. Please try again or contact me directly.");
    });
  }

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            className="fixed top-6 right-6 z-50 max-w-md"
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              duration: 0.4 
            }}
          >
            <div className={`
              relative p-4 rounded-xl border backdrop-blur-xl shadow-2xl
              ${notification.type === 'success' 
                ? 'bg-green-900/20 border-green-500/30 text-green-400' 
                : 'bg-red-900/20 border-red-500/30 text-red-400'
              }
            `}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {notification.type === 'success' ? (
                    <CheckCircle size={20} className="text-green-400" />
                  ) : (
                    <XCircle size={20} className="text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-light leading-relaxed">
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() => setNotification(prev => ({ ...prev, show: false }))}
                  className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              
              {/* Progress bar */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 rounded-b-xl ${
                  notification.type === 'success' ? 'bg-green-400' : 'bg-red-400'
                }`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="relative py-20 sm:py-24 md:py-32 w-full min-h-screen bg-black overflow-hidden">
      {/* Minimal Background Elements - consistent with other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/5 w-1 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            {t('contact.title')}
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-light uppercase tracking-wider text-xs sm:text-sm">
                          {t('contact.name')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="bg-transparent border-0 border-b border-gray-800 text-white placeholder:text-gray-600 focus:border-gray-600 rounded-none px-0 py-2 sm:py-3 font-light text-base sm:text-lg focus-visible:ring-0"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-gray-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-light uppercase tracking-wider text-xs sm:text-sm">
                          {t('contact.email')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            className="bg-transparent border-0 border-b border-gray-800 text-white placeholder:text-gray-600 focus:border-gray-600 rounded-none px-0 py-2 sm:py-3 font-light text-base sm:text-lg focus-visible:ring-0"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-gray-500 text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 font-light uppercase tracking-wider text-xs sm:text-sm">
                        {t('contact.subject')}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project collaboration" 
                          className="bg-transparent border-0 border-b border-gray-800 text-white placeholder:text-gray-600 focus:border-gray-600 rounded-none px-0 py-2 sm:py-3 font-light text-base sm:text-lg focus-visible:ring-0"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-gray-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 font-light uppercase tracking-wider text-xs sm:text-sm">
                        {t('contact.message')}
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="bg-transparent border-0 border-b border-gray-800 text-white placeholder:text-gray-600 focus:border-gray-600 rounded-none px-0 py-2 sm:py-3 font-light text-base sm:text-lg resize-none h-24 sm:h-32 focus-visible:ring-0"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-gray-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <motion.div className="pt-6 sm:pt-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      type="submit" 
                      className="group/link flex items-center gap-2 sm:gap-3 text-white hover:text-gray-300 transition-colors bg-transparent border-0 p-0 h-auto font-light text-base sm:text-lg"
                    >
                      <Send size={18} />
                      <span>{t('contact.send')}</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8 sm:space-y-10 lg:space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-base sm:text-lg font-light text-white uppercase tracking-wider">
                {t('contact.getInTouch')}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="group flex items-start gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={16} className="mt-1 group-hover:text-gray-300" />
                      <div>
                        <div className="text-sm font-light text-gray-500 uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="font-light">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-light text-white uppercase tracking-wider">
                {t('contact.connect')}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 sm:gap-3 text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={16} />
                      <span className="font-light">{social.label}</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 font-light space-y-2">
                <div>{t('contact.location')}</div>
                <div>{t('contact.available')}</div>
                <div>{t('contact.response')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-20 sm:mt-24 lg:mt-32 max-w-7xl mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;