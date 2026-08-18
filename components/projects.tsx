"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, Smartphone, Globe as WebIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "TransitMS — Driver / Parent / Para",
    description:
      "Shared React Native app with role-specific builds for drivers, parents, and paras—covering routes, live GPS, attendance, and real-time trip coordination from dispatch to drop-off.",
    image: "/projects/sentryms_cover.png",
    tags: ["React Native", "Live GPS", "Role-based Builds", "Real-time Tracking"],
    category: "mobile",
    featured: true,
  },
  {
    id: 2,
    title: "Transit Rider — Passenger App",
    description:
      "Passenger-facing React Native app for non-emergency medical transport—book trips, track live status on a map, and manage visits, history, and support.",
    image: "/projects/sentry_rider_cover.png",
    tags: ["React Native", "Maps", "Trip Booking", "NEMT"],
    category: "mobile",
    featured: false,
  },
  {
    id: 3,
    title: "Transit Web Portal",
    description:
      "Next.js operations dashboard for school districts—route planning, live trip monitoring, fleet and student management, and admin workflows for safe daily transport.",
    image: "/projects/sentryride_web_cover.png",
    tags: ["Next.js", "React", "TypeScript", "Operations Dashboard"],
    category: "web",
    featured: true,
  },
  {
    id: 4,
    title: "Donor Connect",
    description:
      "A mobile application connecting blood donors with recipients, featuring real-time notifications and location-based matching.",
    image: "/projects/donor_connect_cover.png",
    tags: ["Flutter", "Firebase", "Google Maps API", "Real-time Database"],
    github: "https://github.com/sufyankamil/donor-connect",
    category: "mobile",
    featured: false,
  },
  {
    id: 5,
    title: "OAuth Web App",
    description:
      "A secure authentication system built with Flutter for web, implementing OAuth protocols for seamless third-party authentication.",
    image: "/projects/oauth_web_app_cover.png",
    tags: ["Flutter Web", "OAuth", "Firebase Auth", "REST API"],
    category: "web",
    featured: false,
  },
  {
    id: 6,
    title: "SaaS-ScrapeFlow",
    description:
      "A full-stack web application for automated web scraping, data extraction, and analysis with customizable workflows.",
    image: "/projects/saas_scrapeflow_cover.png",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/sufyankamil/SaaS-ScrapeFlow",
    category: "web",
    featured: false,
  },
  {
    id: 7,
    title: "CivicNet",
    description:
      "A Flutter application designed to connect, help, and build community, empowering users to engage in civic activities.",
    image: "/projects/civicnet_feature_graphic.png",
    tags: ["Flutter", "Dart", "Community", "Supabase", "Firebase"],
    github: "https://github.com/sufyankamil/ai-civicnet",
    category: "mobile",
    featured: false,
  },
  {
    id: 8,
    title: "CryptoTracker",
    description:
      "A comprehensive cryptocurrency tracking application offering real-time market data, portfolio management, and price alerts.",
    image: "/projects/crypto_tracker_cover.png",
    tags: ["React Native", "Redux", "CoinGecko API", "Charts"],
    github: "https://github.com/sufyankamil",
    category: "mobile",
    featured: false,
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 140 };
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [45, -45]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [45, -45]), springConfig);

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background Glows */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 -left-20 w-[45rem] h-[45rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            className="max-w-2xl text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">02 / PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works & Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated showcase of mobile apps and custom web platforms, highlighting clean architecture, interactive animations, and responsive system design.
            </p>
          </motion.div>

          {/* Sliding Tab Pill Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex gap-1.5 p-1 bg-muted/40 border border-border/40 rounded-full w-fit backdrop-blur-md self-start md:self-end"
          >
            {["all", "mobile", "web"].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-350 z-10 ${
                    isActive ? "text-primary-foreground dark:text-zinc-900" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "all" ? "All Projects" : tab === "mobile" ? "Mobile Apps" : "Web Apps"}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-20">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
            <Link href="https://github.com/sufyankamil" target="_blank" rel="noopener noreferrer">
              View More on GitHub <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 30, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 30, stiffness: 200 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5%", "5%"]);
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-5%", "5%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Bento Span Logic
  const isFeatured = project.featured;
  const gridSpan = isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
      className={`h-full ${gridSpan}`}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full group"
      >
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 border border-border/40 bg-card/30 hover:bg-card/75 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/50 backdrop-blur-md rounded-[2.5rem] transition-all duration-500 relative p-4" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Card Hover Glow effect */}
          <div className="absolute -inset-px bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

          <div className={`flex flex-col h-full gap-6 ${isFeatured ? "lg:flex-row lg:items-center" : ""}`}>
            
            {/* Left/Top side: Device Frame Mockup */}
            <div 
              className={`relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-muted/40 border border-border/20 p-4 transition-all duration-500 ${
                isFeatured 
                  ? "w-full lg:w-1/2 aspect-[4/3] lg:aspect-square flex-shrink-0" 
                  : "w-full aspect-[4/3]"
              }`}
              style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
            >
              {/* Parallax Image Content */}
              <motion.div 
                style={{ x: imgX, y: imgY, scale: 1.1 }}
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none blur-2xl rounded-[2rem]"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>

              {project.category === "mobile" ? (
                /* Sleek Custom CSS Mobile Phone Frame */
                <div className="relative mx-auto w-[180px] h-[320px] lg:w-[200px] lg:h-[350px] bg-zinc-900 rounded-[2.2rem] border-[5px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden group-hover:border-primary/40 transition-colors duration-500 flex-shrink-0">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-zinc-800 rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                  </div>
                  {/* Screen image */}
                  <div className="relative w-full h-full overflow-hidden bg-zinc-950">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        project.image.includes("feature_graphic")
                          ? "object-contain"
                          : "object-cover object-top"
                      }`}
                    />
                  </div>
                </div>
              ) : (
                /* Sleek Custom Browser Window Mockup */
                <div className="w-full max-w-[90%] mx-auto bg-zinc-950 rounded-xl overflow-hidden border border-border/50 shadow-2xl flex flex-col group-hover:border-primary/40 transition-colors duration-500">
                  {/* Browser top header */}
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-muted/20 border-b border-border/30">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    <div className="ml-3 flex-grow max-w-[140px] bg-muted/40 rounded text-[8px] text-muted-foreground/80 px-2 py-0.5 text-center truncate font-mono select-none">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.dev
                    </div>
                  </div>
                  {/* Web preview image */}
                  <div className="relative aspect-[1.6/1] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}

              {/* Badge Overlays */}
              <div className="absolute top-4 left-4 z-20" style={{ transform: "translateZ(30px)" }}>
                <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border/50 rounded-full px-3 py-1 text-[10px] font-bold">
                  {project.category === "mobile" ? <Smartphone className="w-3 h-3 mr-1" /> : <WebIcon className="w-3 h-3 mr-1" />}
                  {project.category === "mobile" ? "Mobile" : "Web"}
                </Badge>
              </div>
            </div>

            {/* Right/Bottom side: Info details */}
            <CardContent 
              className={`flex-grow flex flex-col p-4 relative justify-center ${
                isFeatured ? "w-full lg:w-1/2" : "w-full"
              }`} 
              style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center justify-between mb-3" style={{ transform: "translateZ(10px)" }}>
                <h3 className="text-2xl font-extrabold group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed" style={{ transform: "translateZ(15px)" }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-6 mt-auto" style={{ transform: "translateZ(20px)" }}>
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[9px] font-mono rounded-full px-2.5">
                    {tag}
                  </Badge>
                ))}
              </div>

              {project.github && (
                <div className="flex gap-3 pt-2" style={{ transform: "translateZ(25px)" }}>
                  <Button asChild size="sm" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm transition-all duration-300">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" /> Code
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
