"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sufyankamil15@gmail.com");
    toast({
      title: "Email Copied",
      description: "sufyankamil15@gmail.com copied to clipboard!",
    });
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
          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-between gap-4 p-4 rounded-full bg-white dark:bg-zinc-900 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
          >
            <span className="font-semibold text-xs md:text-sm pl-4 tracking-wide truncate">
              sufyankamil15@gmail.com
            </span>
            <div className="p-3 bg-primary text-primary-foreground rounded-full group-hover:scale-105 transition-transform shadow-md">
              <Mail className="h-4 w-4" />
            </div>
          </button>

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
    </section>
  );
}
