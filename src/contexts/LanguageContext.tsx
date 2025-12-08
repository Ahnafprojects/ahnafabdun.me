'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.title': 'Muhammad Ahnaf',
    'hero.subtitle': 'Software Engineer & Web Developer',
    'hero.description': 'Crafting digital experiences through clean code and thoughtful design. Based in Indonesia, working globally.',
    'hero.viewWork': 'View Work',
    'hero.getInTouch': 'Get In Touch',
    
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect with me',
    
    // About
    'about.title': 'About',
    'about.description': 'Focused on creating meaningful digital experiences through clean code and thoughtful design.',
    'about.intro1': "I'm a software engineer passionate about building efficient, scalable solutions. My work spans full-stack development with a particular focus on modern web technologies and cloud-based applications.",
    'about.intro2': 'Based in Surabaya, Indonesia. I believe in writing clean, maintainable code and creating user experiences that are both functional and elegant.',
    'about.currently': 'Currently',
    'about.available': 'Available for Projects',
    'about.availableDesc': 'Open to freelance work and exciting collaborations',
    'about.learning': 'Learning & Growing',
    'about.learningDesc': 'Exploring AI integration and advanced web technologies',
    'about.philosophy': 'Philosophy',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Writing maintainable and efficient code that scales',
    'about.userFocus': 'User Focus',
    'about.userFocusDesc': 'Creating experiences that users actually want to use',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Staying ahead with modern technologies and approaches',
    'about.cta': "Let's work together",
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected work that demonstrates my approach to solving complex problems through clean, functional design.',
    'projects.viewLive': 'View Live',
    'projects.source': 'Source',
    'projects.moreGithub': 'More projects on GitHub',
    
    // Project 1 - Lokal Keren
    'project1.title': 'Lokal Keren - UMKM Directory Platform',
    'project1.description': 'A digital platform to help local MSMEs (UMKM) be more easily discovered and compete in the digital era. Finalist at Web In Action 2025 competition by UPN Veteran Jakarta.',
    'project1.category': 'Fullstack',
    
    // Project 2 - Finance App
    'project2.title': 'AI-Powered Financial Intelligence App',
    'project2.description': 'An intelligent finance app that helps users save money, track expenses, and achieve financial goals with AI-powered insights. Features smart budgeting, automatic categorization, and insightful analytics with beautiful data visualization.',
    'project2.category': 'Fullstack',
    
    // Project 3 - Beauty Portfolio
    'project3.title': 'Beautywithnazla - Makeup Artist Portfolio',
    'project3.description': 'A stunning static portfolio website for a makeup artist featuring profile information, gallery showcase, services, and skills presentation. Built with engaging responsive gallery design, modern interface, and optimized performance.',
    'project3.category': 'Frontend',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I work with to build modern applications.',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.tools': 'Tools & Others',
    
    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'Professional journey and key milestones in my development career.',
    'experience.present': 'Present',
    'experience.responsibilities': 'Responsibilities',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's discuss your project or explore opportunities to work together.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.getInTouch': 'Get In Touch',
    'contact.connect': 'Connect',
    'contact.location': 'Surabaya, Indonesia',
    'contact.available': 'Available for freelance projects',
    'contact.response': 'Usually respond within 24 hours',
    
    // Footer
    'footer.tagline': 'Crafting digital experiences with precision and creativity. Always learning, always growing.',
    'footer.navigation': 'Navigation',
    'footer.connect': 'Connect',
    'footer.backToTop': 'Back to top',
    'footer.copyright': 'Muhammad Ahnaf',
    'footer.built': 'Designed & Built with passion',
  },
  id: {
    // Hero
    'hero.title': 'Muhammad Ahnaf',
    'hero.subtitle': 'Software Engineer & Pengembang Web',
    'hero.description': 'Menciptakan pengalaman digital melalui kode yang bersih dan desain yang bijaksana. Berbasis di Indonesia, bekerja secara global.',
    'hero.viewWork': 'Lihat Karya',
    'hero.getInTouch': 'Hubungi Saya',
    
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.projects': 'Proyek',
    'nav.skills': 'Keahlian',
    'nav.contact': 'Kontak',
    'nav.connect': 'Terhubung dengan saya',
    
    // About
    'about.title': 'Tentang',
    'about.description': 'Fokus menciptakan pengalaman digital yang bermakna melalui kode bersih dan desain yang bijaksana.',
    'about.intro1': 'Saya adalah seorang software engineer yang passionate dalam membangun solusi yang efisien dan scalable. Pekerjaan saya mencakup pengembangan full-stack dengan fokus khusus pada teknologi web modern dan aplikasi berbasis cloud.',
    'about.intro2': 'Berbasis di Surabaya, Indonesia. Saya percaya pada penulisan kode yang bersih dan mudah dipelihara, serta menciptakan pengalaman pengguna yang fungsional dan elegan.',
    'about.currently': 'Saat Ini',
    'about.available': 'Tersedia untuk Proyek',
    'about.availableDesc': 'Terbuka untuk pekerjaan freelance dan kolaborasi menarik',
    'about.learning': 'Belajar & Berkembang',
    'about.learningDesc': 'Menjelajahi integrasi AI dan teknologi web canggih',
    'about.philosophy': 'Filosofi',
    'about.cleanCode': 'Kode Bersih',
    'about.cleanCodeDesc': 'Menulis kode yang mudah dipelihara dan efisien yang dapat berkembang',
    'about.userFocus': 'Fokus Pengguna',
    'about.userFocusDesc': 'Menciptakan pengalaman yang benar-benar diinginkan pengguna',
    'about.innovation': 'Inovasi',
    'about.innovationDesc': 'Selalu terdepan dengan teknologi dan pendekatan modern',
    'about.cta': 'Mari bekerja sama',
    
    // Projects
    'projects.title': 'Proyek',
    'projects.subtitle': 'Karya pilihan yang mendemonstrasikan pendekatan saya dalam memecahkan masalah kompleks melalui desain yang bersih dan fungsional.',
    'projects.viewLive': 'Lihat Live',
    'projects.source': 'Kode Sumber',
    'projects.moreGithub': 'Lebih banyak proyek di GitHub',
    
    // Project 1 - Lokal Keren
    'project1.title': 'Lokal Keren - Platform Direktori UMKM',
    'project1.description': 'Platform digital untuk membantu UMKM lokal lebih mudah ditemukan dan bersaing di era digital. Finalis kompetisi Web In Action 2025 yang diselenggarakan oleh UPN Veteran Jakarta.',
    'project1.category': 'Fullstack',
    
    // Project 2 - Finance App
    'project2.title': 'Aplikasi Keuangan Cerdas dengan AI',
    'project2.description': 'Aplikasi keuangan cerdas yang membantu pengguna menghemat uang, melacak pengeluaran, dan mencapai tujuan keuangan dengan wawasan berbasis AI. Fitur budgeting pintar, kategorisasi otomatis, dan analitik mendalam dengan visualisasi data yang cantik.',
    'project2.category': 'Fullstack',
    
    // Project 3 - Beauty Portfolio
    'project3.title': 'Beautywithnazla - Portfolio Makeup Artist',
    'project3.description': 'Website portfolio statis yang menakjubkan untuk seorang makeup artist yang menampilkan informasi profil, galeri karya, layanan, dan presentasi keahlian. Dibangun dengan desain galeri responsif yang menarik, antarmuka modern, dan performa yang optimal.',
    'project3.category': 'Frontend',
    
    // Skills
    'skills.title': 'Keahlian',
    'skills.subtitle': 'Teknologi dan alat yang saya gunakan untuk membangun aplikasi modern.',
    'skills.frontend': 'Pengembangan Frontend',
    'skills.backend': 'Pengembangan Backend',
    'skills.tools': 'Tools & Lainnya',
    
    // Experience
    'experience.title': 'Pengalaman',
    'experience.subtitle': 'Perjalanan profesional dan pencapaian utama dalam karir pengembangan saya.',
    'experience.present': 'Sekarang',
    'experience.responsibilities': 'Tanggung Jawab',
    
    // Contact
    'contact.title': 'Kontak',
    'contact.subtitle': 'Mari diskusikan proyek Anda atau jelajahi peluang untuk bekerja sama.',
    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.subject': 'Subjek',
    'contact.message': 'Pesan',
    'contact.send': 'Kirim Pesan',
    'contact.getInTouch': 'Hubungi Saya',
    'contact.connect': 'Terhubung',
    'contact.location': 'Surabaya, Indonesia',
    'contact.available': 'Tersedia untuk proyek freelance',
    'contact.response': 'Biasanya merespons dalam 24 jam',
    
    // Footer
    'footer.tagline': 'Menciptakan pengalaman digital dengan presisi dan kreativitas. Selalu belajar, selalu berkembang.',
    'footer.navigation': 'Navigasi',
    'footer.connect': 'Terhubung',
    'footer.backToTop': 'Kembali ke atas',
    'footer.copyright': 'Muhammad Ahnaf',
    'footer.built': 'Dirancang & Dibangun dengan passion',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const handleSetLanguage = (lang: Language) => {
    console.log('Changing language to:', lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
