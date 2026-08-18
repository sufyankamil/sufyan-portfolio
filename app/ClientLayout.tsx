"use client";

import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <style jsx global>{`
            html {
              scroll-padding-top: 6rem; /* Adjust this value based on your navbar height */
            }
          `}</style>
          
          {/* Top Horizontal Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[9999] origin-[0%]"
            style={{ scaleX: scrollYProgress }}
          />

          {children}
          <Toaster />

          {/* Floating Back to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="fixed bottom-8 left-8 z-[9999] p-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20 border-0"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
