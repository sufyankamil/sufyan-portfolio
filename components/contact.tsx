"use client";

import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Trigger when the user is within 150px of the bottom of the page
      if (scrollHeight - scrollTop - clientHeight < 150) {
        setShowPrompt(true);
      } else {
        setShowPrompt(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sufyankamil15@gmail.com");
    toast.success("Email copied", {
      description: "sufyankamil15@gmail.com copied to clipboard!",
    });
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowPrompt(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      {/* Huge Background Typography (Layered Behind Content) */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[16vw] font-black leading-none tracking-tighter text-black/10 select-none">
          LET'S TALK
        </h2>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center">
        {/* Floating mockup card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-md bg-stone-100 dark:bg-zinc-950 text-foreground rounded-[2.5rem] p-8 border-4 border-stone-200/50 dark:border-zinc-800 shadow-2xl flex flex-col items-center gap-6"
        >
          {/* Header indicator inside card */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">Let's Connect</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Feel free to reach out via email or connect with me on professional platforms.
            </p>
          </div>

          {/* Sizable pill-shaped email box */}
          <a
            href="mailto:sufyankamil15@gmail.com"
            className="w-full flex items-center justify-between gap-4 p-4 rounded-full bg-white dark:bg-zinc-900 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group text-left"
          >
            <span className="font-semibold text-xs md:text-sm pl-4 tracking-wide truncate">
              Send an Email
            </span>
            <div className="p-3 bg-primary text-primary-foreground rounded-full group-hover:scale-105 transition-transform shadow-md">
              <Mail className="h-4 w-4" />
            </div>
          </a>

          {/* Social connect outline buttons */}
          <div className="flex gap-3 w-full">
            <a
              href="https://www.linkedin.com/in/sufyankamil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 text-center rounded-full border border-border bg-background hover:bg-muted text-xs font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LINKEDIN
            </a>
            <a
              href="https://github.com/sufyankamil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 text-center rounded-full border border-border bg-background hover:bg-muted text-xs font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              GITHUB
            </a>
          </div>

          <p className="text-[10px] text-muted-foreground font-mono">
            * Typically replies within 24 hours
          </p>
        </motion.div>
      </div>

      {/* Floating Scroll End Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-8 sm:max-w-sm z-50 bg-card/95 dark:bg-zinc-950/95 backdrop-blur-md border border-primary/20 shadow-2xl rounded-3xl p-5 text-foreground"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase font-mono mb-1 block">End of Page 👋</span>
                <h4 className="font-bold text-base leading-tight mb-1 text-foreground">Let's start a conversation!</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                  Thanks for browsing! If you have any projects, questions, or just want to chat, feel free to reach out.
                </p>
              </div>
              <button 
                onClick={handleDismiss} 
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 p-1.5 rounded-full transition-colors"
                aria-label="Close message"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2 px-4 bg-primary text-primary-foreground dark:text-zinc-900 font-bold rounded-full text-xs hover:bg-primary/90 transition-all text-center shadow-md shadow-primary/10"
              >
                Copy Email
              </button>
              <a
                href="https://www.linkedin.com/in/sufyankamil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 bg-background hover:bg-muted text-foreground font-bold rounded-full text-xs border border-border transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
