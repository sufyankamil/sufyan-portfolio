"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Smartphone, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import ResumeView from "./resume-view";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Sandbox", href: "#sandbox" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Get the navbar height after component mounts
    const navbar = document.querySelector("header");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function - made reusable with useCallback
  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement> | null, href: string) => {
      if (e) e.preventDefault();

      // Close mobile menu if open
      if (isOpen) {
        setIsOpen(false);
      }

      // Add a small delay to ensure the mobile menu is closed before scrolling
      setTimeout(() => {
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
          // Get the updated navbar height
          const currentNavbarHeight =
            document.querySelector("header")?.offsetHeight || navbarHeight;

          // Calculate offset
          // Adding a larger offset to ensure content is clearly visible
          const yOffset = -(currentNavbarHeight + 30);
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });

          // Update URL without page reload
          window.history.pushState(null, "", href);
        }
      }, 100); // Small delay to ensure mobile menu is closed
    },
    [isOpen, navbarHeight]
  );

  // Export scroll function for use in other components
  useEffect(() => {
    // Make the function available globally
    window.scrollToSection = (sectionId: string) => {
      handleScrollToSection(null, sectionId);
    };

    return () => {
      // Clean up
      delete window.scrollToSection;
    };
  }, [handleScrollToSection]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, "#home")}
              className="text-2xl font-bold text-primary flex items-center gap-2"
            >
              <Smartphone className="h-8 w-8 text-primary" strokeWidth={2.5} />
              <span>
                Sufyan<span className="text-accent">Kamil</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setShowResume(true)}
              >
                Resume
              </Button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                className="text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="text-foreground hover:text-primary py-2 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  onClick={() => {
                    setIsOpen(false);
                    setShowResume(true);
                  }}
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Dialog */}
      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Sufyan Kamil - Resume
            </DialogTitle>
          </DialogHeader>
          <ResumeView />
        </DialogContent>
      </Dialog>
    </>
  );
}

declare global {
  interface Window {
    scrollToSection?: (sectionId: string) => void;
  }
}
