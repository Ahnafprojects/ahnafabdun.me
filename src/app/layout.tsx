// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AIAssistantChat from '@/components/common/AIAssistantChat';
import CustomCursor from '@/components/common/CustomCursor';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: "Your Name - Professional Portfolio",
  description: "A professional portfolio built with Next.js, Tailwind CSS, and Three.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        inter.variable,
        poppins.variable
      )}>
        <LanguageProvider>
          <CustomCursor />
          {children}
          <AIAssistantChat />
        </LanguageProvider>
      </body>
    </html>
  );
}