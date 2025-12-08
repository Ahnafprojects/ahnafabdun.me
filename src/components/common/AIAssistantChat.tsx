'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowUp } from 'lucide-react';

// Data lengkap tentang Muhammad Ahnaf untuk AI context
const ahnafContext = `
INFORMASI LENGKAP TENTANG MUHAMMAD AHNAF:

PROFIL DATA DIRI:
- Nama Lengkap: Muhammad Ahnaf
- Tanggal Lahir: 2 Juni 2006 (Umur: ${new Date().getFullYear() - 2006} tahun)
- Nomor Telepon: +6281252961135
- Email: muhammadahnafworks@gmail.com
- Lokasi: Surabaya, Indonesia
- GitHub: https://github.com/Ahnafprojects
- LinkedIn: https://www.linkedin.com/in/muhammad-ahnaf-596708320

PENDIDIKAN:
- Institusi: Politeknik Elektronika Negeri Surabaya (PENS)
- Jurusan: Teknik Informatika
- Semester: 3 (saat ini)
- Status: Mahasiswa aktif dengan antusiasme tinggi dalam teknologi

DESKRIPSI:
Mahasiswa Teknik Informatika semester 3 yang bersemangat dengan dasar kuat dalam pemrograman dan logika. Antusias dalam mempelajari teknologi baru, memiliki kemampuan adaptasi yang cepat, serta tertarik untuk berkontribusi dalam proyek pengembangan perangkat lunak. Berkomitmen untuk terus mengasah keterampilan teknis dan soft skill.

KEAHLIAN TEKNIS:
Frontend Development:
- React.js - Framework untuk membangun UI modern
- Next.js - Framework React untuk server-side rendering
- TypeScript - JavaScript dengan static typing
- Tailwind CSS - Utility-first CSS framework
- HTML5 & CSS3 - Dasar web development
- JavaScript - Bahasa pemrograman web utama

Backend Development:
- Node.js - JavaScript runtime untuk backend
- Laravel - PHP framework untuk aplikasi web
- PHP - Server-side scripting language
- PostgreSQL - Relational database
- Supabase - Backend-as-a-Service platform
- Prisma.io - ORM untuk database management

Tools & DevOps:
- Git & GitHub - Version control dan collaboration
- Docker - Containerization platform
- Kubernetes - Container orchestration
- Drone CI - Continuous integration
- Gitea - Self-hosted Git service
- Figma - Design dan prototyping tool

SOFT SKILLS:
- Pemecahan Masalah - Analytical thinking dan problem solving
- Kerja Tim - Kolaborasi efektif dalam tim
- Komunikasi Efektif - Presentasi dan diskusi teknis
- Adaptasi Cepat - Belajar teknologi baru dengan cepat
- Pembelajar Cepat - Self-learning dan continuous improvement

PROYEK UNGGULAN:

1. Lokal Keren - Platform Direktori UMKM
   - Deskripsi: Platform digital untuk membantu UMKM lokal lebih mudah ditemukan dan bersaing di era digital
   - Pencapaian: Finalis kompetisi Web In Action 2025 oleh UPN Veteran Jakarta
   - Teknologi: Next.js, TypeScript, Tailwind CSS, Prisma.io, Cloudinary
   - Link: https://lokalkeren.netlify.app
   - GitHub: https://github.com/Ahnafprojects/direktori-umkm

2. AI-Powered Financial Intelligence App
   - Deskripsi: Aplikasi keuangan cerdas dengan AI untuk budgeting, expense tracking, dan financial planning
   - Fitur: Smart budgeting, automatic categorization, AI insights, data visualization
   - Teknologi: Next.js, TypeScript, Supabase, AI integration
   - Link: https://sifinance.netlify.app

3. Beautywithnazla - Makeup Artist Portfolio
   - Deskripsi: Website portfolio untuk makeup artist dengan gallery showcase dan presentasi services
   - Fitur: Responsive design, gallery interaktif, modern interface
   - Teknologi: React.js, CSS, JavaScript
   - Link: https://beautywithnazla.vercel.app

FILOSOFI & PENDEKATAN:
- Clean Code: Menulis kode yang maintainable, efficient, dan scalable
- User Focus: Membuat user experience yang fungsional dan elegan
- Innovation: Selalu update dengan teknologi dan approaches terbaru
- Cloud-First: Fokus pada cloud-based applications dan modern architecture

STATUS SAAT INI:
- Tersedia untuk proyek freelance dan kolaborasi
- Sedang belajar AI integration dan advanced web technologies
- Aktif mengembangkan skills dalam full-stack development
- Response time: Biasanya merespons dalam 24 jam

CARA MENGHUBUNGI:
- Email: muhammadahnafworks@gmail.com
- GitHub: https://github.com/Ahnafprojects
- LinkedIn: https://www.linkedin.com/in/muhammad-ahnaf-596708320
- Portfolio: https://ahnafwork.netlify.app

CATATAN PENTING:
- Jangan pernah memberikan informasi tanggal lahir lengkap kepada siapapun
- Jika ditanya umur, hitung dari tahun lahir 2006 ke tahun saat ini
- Selalu profesional dan ramah dalam komunikasi
- Fokus pada keahlian teknis dan proyek yang sudah dikerjakan
`;

// Smart Local AI Response Generator (No API needed!)
const generateAIResponse = async (message: string, conversationHistory: Message[]): Promise<string> => {
  const msg = message.toLowerCase();
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2006;
  
  // Skills related
  if (msg.includes('skill') || msg.includes('keahlian') || msg.includes('kemampuan') || msg.includes('tech stack')) {
    return `Ahnaf memiliki keahlian di beberapa area:\n\nFrontend: React.js, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3\n\nBackend: Node.js, Laravel, PHP, PostgreSQL, Supabase, Prisma.io\n\nTools: Git/GitHub, Docker, Kubernetes, Drone CI, Gitea, Figma\n\nAhnaf juga memiliki soft skills seperti problem solving, teamwork, dan quick learning.`;
  }
  
  // Projects related
  if (msg.includes('project') || msg.includes('proyek') || msg.includes('portfolio') || msg.includes('karya')) {
    return `Berikut proyek unggulan Ahnaf:\n\nLokal Keren - Platform UMKM\nFinalis Web In Action 2025. Platform untuk membantu UMKM lokal.\nTech: Next.js, TypeScript, Prisma.io\nLink: https://lokalkeren.netlify.app\n\nAI Finance App\nAplikasi keuangan cerdas dengan AI untuk budgeting & expense tracking.\nTech: Next.js, Supabase, AI\nLink: https://sifinance.netlify.app\n\nBeautywithnazla\nPortfolio makeup artist dengan gallery interaktif.\nTech: React.js, CSS\nLink: https://beautywithnazla.vercel.app`;
  }
  
  // Education related
  if (msg.includes('kuliah') || msg.includes('kampus') || msg.includes('pendidikan') || msg.includes('pens') || msg.includes('education') || msg.includes('study')) {
    return `Ahnaf saat ini mahasiswa semester 3 di Politeknik Elektronika Negeri Surabaya (PENS), jurusan Teknik Informatika. Dia sangat passionate dalam teknologi dan selalu antusias belajar hal baru.`;
  }
  
  // Age related
  if (msg.includes('umur') || msg.includes('age') || msg.includes('tahun') || msg.includes('old')) {
    return `Ahnaf berusia ${age} tahun dan sedang aktif kuliah di PENS. Masih muda tapi sudah punya banyak pengalaman dalam full-stack development.`;
  }
  
  // Contact related
  if (msg.includes('contact') || msg.includes('hubungi') || msg.includes('email') || msg.includes('phone') || msg.includes('wa') || msg.includes('whatsapp')) {
    return `Anda bisa menghubungi Ahnaf melalui:\n\nEmail: muhammadahnafworks@gmail.com\nPhone/WA: +6281252961135\nGitHub: https://github.com/Ahnafprojects\nLinkedIn: https://www.linkedin.com/in/muhammad-ahnaf-596708320\n\nAhnaf biasanya merespons dalam 24 jam.`;
  }
  
  // Experience & work
  if (msg.includes('experience') || msg.includes('pengalaman') || msg.includes('kerja') || msg.includes('work')) {
    return `Ahnaf adalah mahasiswa IT semester 3 dengan fokus full-stack development. Dia punya pengalaman membuat berbagai proyek web, termasuk platform UMKM yang jadi finalis kompetisi nasional. Ahnaf tersedia untuk freelance dan kolaborasi project.`;
  }
  
  // Frontend specific
  if (msg.includes('react') || msg.includes('next') || msg.includes('frontend') || msg.includes('ui')) {
    return `Ahnaf sangat mahir di frontend development. Dia menggunakan React.js dan Next.js untuk semua proyeknya, dikombinasikan dengan TypeScript untuk type safety dan Tailwind CSS untuk styling yang cepat dan efisien. Semua websitenya responsive dan modern.`;
  }
  
  // Backend specific
  if (msg.includes('backend') || msg.includes('database') || msg.includes('server') || msg.includes('api')) {
    return `Di backend, Ahnaf menguasai Node.js dan Laravel. Untuk database, dia pakai PostgreSQL dan Supabase. Dia juga familiar dengan Prisma.io sebagai ORM. Ahnaf bisa handle full-stack development dari frontend sampai database.`;
  }
  
  // Tools & DevOps
  if (msg.includes('docker') || msg.includes('kubernetes') || msg.includes('ci/cd') || msg.includes('devops') || msg.includes('git')) {
    return `Ahnaf familiar dengan modern DevOps tools seperti Docker untuk containerization, Kubernetes untuk orchestration, dan Drone CI untuk continuous integration. Dia juga aktif menggunakan Git/GitHub untuk version control dan Gitea untuk self-hosted Git service.`;
  }
  
  // Availability
  if (msg.includes('available') || msg.includes('tersedia') || msg.includes('freelance') || msg.includes('hire')) {
    return `Ya, Ahnaf tersedia untuk freelance dan kolaborasi project. Dia sedang aktif kuliah tapi bisa manage waktu untuk project menarik. Hubungi dia di muhammadahnafworks@gmail.com untuk diskusi lebih lanjut.`;
  }
  
  // Lokalkeren specific
  if (msg.includes('lokal keren') || msg.includes('lokalkeren') || msg.includes('umkm')) {
    return `Lokal Keren adalah proyek kebanggaan Ahnaf.\n\nIni adalah platform direktori UMKM yang membantu bisnis lokal lebih mudah ditemukan di era digital. Project ini berhasil jadi FINALIS di kompetisi Web In Action 2025 dari UPN Veteran Jakarta.\n\nDibangun dengan Next.js, TypeScript, Tailwind CSS, dan Prisma.io.\nLink: https://lokalkeren.netlify.app`;
  }
  
  // General greeting
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('halo') || msg.includes('hai') || msg === 'hey') {
    return `Halo! Saya AI assistant untuk Muhammad Ahnaf. Saya bisa memberikan informasi tentang:\n\n• Skills & tech stack Ahnaf\n• Proyek-proyek yang sudah dikerjakan\n• Pendidikan & pengalaman\n• Cara menghubungi Ahnaf\n\nAda yang ingin Anda tanyakan tentang Ahnaf?`;
  }
  
  // Who is Ahnaf
  if (msg.includes('who') || msg.includes('siapa') || msg.includes('tentang')) {
    return `Muhammad Ahnaf adalah mahasiswa Teknik Informatika semester 3 di PENS Surabaya. Dia seorang full-stack developer yang passionate dengan fokus pada:\n\n• Modern web development (React, Next.js)\n• Clean code & best practices\n• Cloud-based applications\n• User-focused design\n\nAhnaf sudah membuat beberapa proyek menarik termasuk platform UMKM yang jadi finalis kompetisi nasional.`;
  }
  
  // Thanks
  if (msg.includes('thank') || msg.includes('terima kasih') || msg.includes('makasih')) {
    return `Sama-sama! Senang bisa membantu. Jangan ragu untuk bertanya lagi atau langsung hubungi Ahnaf di muhammadahnafworks@gmail.com`;
  }
  
  // Default response
  return `Terima kasih atas pertanyaannya. Saya bisa memberikan informasi tentang:\n\n• Skills & keahlian teknis Ahnaf\n• Proyek-proyek portfolio\n• Pendidikan di PENS\n• Cara menghubungi Ahnaf\n\nSilakan tanya lebih spesifik, atau hubungi Ahnaf langsung:\nEmail: muhammadahnafworks@gmail.com\nGitHub: https://github.com/Ahnafprojects\nLinkedIn: https://www.linkedin.com/in/muhammad-ahnaf-596708320`;
};

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Saya AI assistant Muhammad Ahnaf. Tanyakan apa saja tentang skills, proyek, pengalaman, atau cara menghubungi Ahnaf.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      const aiResponseText = await generateAIResponse(currentInput, [...messages, userMessage]);
      
      const aiResponse: Message = {
        id: messages.length + 2,
        text: aiResponseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: messages.length + 2,
        text: "Maaf, saya mengalami kesulitan. Silakan coba lagi atau hubungi Ahnaf langsung di muhammadahnafworks@gmail.com",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-black border border-white/20 rounded-full flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 group shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
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
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle size={20} />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 w-[calc(100vw-2rem)] max-w-md md:w-96 h-[70vh] md:h-[500px] bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="p-3 md:p-4 border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-sm">AI Assistant</h3>
                  <p className="text-gray-400 text-xs truncate">Ask me about Ahnaf</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400 hidden md:inline">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-3 md:space-y-4" style={{height: 'calc(100% - 140px)'}}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] md:max-w-[80%] ${message.isUser ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      message.isUser 
                        ? 'bg-white text-black' 
                        : 'bg-white/10 border border-white/20 text-white'
                    }`}>
                      {message.isUser ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div className={`p-2.5 md:p-3 rounded-xl md:rounded-2xl ${
                      message.isUser
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white border border-white/10'
                    }`}>
                      <p className="text-xs md:text-sm font-light whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 border-t border-white/10 bg-black/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Ahnaf..."
                  className="flex-1 bg-white/5 border border-white/20 rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 md:w-10 md:h-10 bg-white text-black rounded-lg md:rounded-xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={14} className="md:w-4 md:h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistantChat;