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
  title: "Muhammad Ahnaf Abdun | Professional Portfolio",
  description: "  Welcome to the professional portfolio of Muhammad Ahnaf Abdun. Explore my projects, skills, and experience in web development.",
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