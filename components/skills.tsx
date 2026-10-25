"use client";

import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, Database, Layers, ShieldCheck, Smartphone, Terminal, Zap } from "lucide-react";
import Image from "next/image";

const technologies = [
  { name: "Flutter", icon: "/tech/flutter.svg" },
  { name: "Dart", icon: "/tech/dart.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Firebase", icon: "/tech/firebase.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "React Native", icon: "/tech/react.svg" },
  { name: "Supabase", icon: "/tech/supabase.svg" },
];

function BentoCard({
  children,
  className = "",
  glowColor = "rgba(var(--primary-rgb), 0.15)"
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 80%)`
  );

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`overflow-hidden relative border border-border/40 bg-card/30 hover:bg-card/75 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/50 backdrop-blur-md rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: spotlightBg,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </Card>
  );
}

export default function Skills() {
  // Split technologies into two rows for the marquee
  const row1 = technologies.slice(0, 5);
  const row2 = technologies.slice(5);

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration blur bubbles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-left max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">03 / ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive engineering toolkit focused on building high-performance cross-platform
            mobile applications, scalable web solutions, and clean, modular systems.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">

          {/* Main Skill: Software & Mobile Engineering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3 lg:row-span-2"
          >
            <BentoCard className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3.5 bg-primary/10 text-primary rounded-2xl shadow-inner">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Software & Mobile Engineering</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  Extensive experience designing robust cross-platform mobile apps,
                  implementing clean architecture, and building production-ready web portals.
                </p>
                <div className="space-y-6 mt-auto">
                  {[
                    { name: "Flutter & React Native", usedIn: "TransitMS, Transit Rider, Donor Connect, CivicNet" },
                    { name: "Frontend (React / Next.js)", usedIn: "Pathways DXB, Transit Web Portal" },
                    { name: "Backend (Node.js & Databases)", usedIn: "Node.js & Supabase APIs, SaaS-ScrapeFlow" }
                  ].map((skill) => (
                    <div key={skill.name} className="border-l-2 border-primary/40 pl-4">
                      <span className="font-semibold text-sm block mb-1">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">
                        Shipped in: <span className="text-foreground/80">{skill.usedIn}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </BentoCard>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <BentoCard className="h-full" glowColor="rgba(var(--accent-rgb, 0, 255, 255), 0.15)">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent/10 text-accent rounded-xl">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "JS / TypeScript", icon: Terminal },
                    { name: "Dart", icon: Smartphone },
                    { name: "Java", icon: Code2 },
                    { name: "Kotlin", icon: Layers }
                  ].map((item) => (
                    <div key={item.name} className="relative group">
                      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-muted/30 hover:bg-muted/70 transition-all border border-border/10 cursor-help">
                        <item.icon size={18} className="text-primary" />
                        <span className="font-medium text-xs tracking-wide">{item.name}</span>
                      </div>
                      {/* Interactive Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 bg-zinc-950 dark:bg-zinc-900 text-zinc-100 dark:text-zinc-200 border border-zinc-800 text-[10px] p-2.5 rounded-xl shadow-2xl z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-200 text-center leading-normal font-mono">
                        {item.name === "JS / TypeScript" && "Used for Node.js backends & React/Next.js frontends."}
                        {item.name === "Dart" && "Primary language for Flutter mobile applications."}
                        {item.name === "Java" && "Used for native Android modules & SDK integrations."}
                        {item.name === "Kotlin" && "Used for native Android bridges & background services."}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </BentoCard>
          </motion.div>

          {/* Backend & Databases */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <BentoCard className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                    <Database size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Data & Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: "Firebase", desc: "Auth, Firestore, Cloud Messaging & Analytics." },
                    { name: "Supabase", desc: "Postgres database, Edge Functions & real-time sync." },
                    { name: "MongoDB", desc: "Document storage for Node.js APIs & scrapers." },
                    { name: "PostgreSQL", desc: "Relational modeling, analytical queries & views." },
                    { name: "Node.js", desc: "Express / Koa API frameworks & scraping workers." }
                  ].map((db) => (
                    <div key={db.name} className="relative group">
                      <span className="px-4 py-2 bg-background border border-border/50 hover:border-primary/45 rounded-full text-xs font-semibold hover:text-primary transition-all duration-300 cursor-help block">
                        {db.name}
                      </span>
                      {/* Interactive Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 bg-zinc-950 dark:bg-zinc-900 text-zinc-100 dark:text-zinc-200 border border-zinc-800 text-[10px] p-2.5 rounded-xl shadow-2xl z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-200 text-center leading-normal font-mono">
                        {db.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </BentoCard>
          </motion.div>

          {/* Extra: Tools */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <BentoCard className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <ShieldCheck size={20} />
                  <h3 className="font-bold text-sm">Workflow</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Git", desc: "Version control, multi-dev merges & pull reviews." },
                    { name: "CI/CD", desc: "GitHub Actions, Fastlane & TestFlight pipelines." },
                    { name: "Docker", desc: "Containerizing web services & local databases." },
                    { name: "Agile", desc: "Daily scrums, Jira tracking & sprint scopes." }
                  ].map(t => (
                    <div key={t.name} className="relative group">
                      <Badge variant="outline" className="border-accent/20 bg-accent/5 text-accent text-[9px] font-bold rounded-full px-2.5 cursor-help">
                        {t.name}
                      </Badge>
                      {/* Interactive Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-44 bg-zinc-950 dark:bg-zinc-900 text-zinc-100 dark:text-zinc-200 border border-zinc-800 text-[10px] p-2 rounded-xl shadow-2xl z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-200 text-center leading-normal font-mono">
                        {t.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </BentoCard>
          </motion.div>

          {/* Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-4"
          >
            <BentoCard className="h-full border-dashed">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <div className="space-y-1">
                  <h3 className="font-bold text-base">Continuous Learning</h3>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">"Always exploring new architectural patterns and cloud-native solutions."</p>
                </div>
                <Zap className="text-primary/40 animate-pulse flex-shrink-0" size={32} />
              </CardContent>
            </BentoCard>
          </motion.div>

        </div>

        {/* Infinite Sliding Marquees */}
        <div className="border-t border-border/10 pt-16 overflow-hidden flex flex-col gap-6 relative">
          {/* Row 1: Left-scrolling marquee */}
          <div aria-hidden="true" className="flex w-full overflow-hidden select-none pointer-events-none mask-image">
            <motion.div
              className="flex gap-12 flex-shrink-0"
              animate={{ x: [0, -400] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...row1, ...row1, ...row1].map((tech, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative w-8 h-8 opacity-75">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain grayscale hover:grayscale-0 transition-all" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right-scrolling marquee */}
          <div aria-hidden="true" className="flex w-full overflow-hidden select-none pointer-events-none mask-image">
            <motion.div
              className="flex gap-12 flex-shrink-0"
              animate={{ x: [-400, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...row2, ...row2, ...row2].map((tech, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative w-8 h-8 opacity-75">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain grayscale hover:grayscale-0 transition-all" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
