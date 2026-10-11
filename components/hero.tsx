"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Cpu, Layers, Mail, Smartphone, Monitor, Tablet, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { toast } from "sonner";
import { ScrollParallax } from "@/components/scroll-parallax";

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FloatingIcon({
  icon: Icon,
  delay,
  x,
  y,
  yOffset = 80,
}: {
  icon: LucideIcon;
  delay: number;
  x: number;
  y: number;
  yOffset?: number;
}) {
  return (
    <ScrollParallax
      yOffset={yOffset}
      className="absolute pointer-events-none hidden lg:block"
      style={{ left: x, top: y }}
    >
      <motion.div
        className="text-primary/10"
        initial={{ opacity: 0 }}
        animate={{
          y: [-20, 20, -20],
          opacity: 0.15,
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay,
          },
          opacity: { duration: 1 },
        }}
      >
        <Icon size={48} />
      </motion.div>
    </ScrollParallax>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("mobile");
  const [isIntroActive, setIsIntroActive] = useState(false);
  const words = ["interactive UIs", "next-gen apps", "full-stack webs", "cloud pipelines"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const delay = isIntroActive ? 1500 : 5500;
    const interval = setInterval(() => {
      setDeviceType((prev) => {
        if (prev === "mobile") return "tablet";
        if (prev === "tablet") return "desktop";
        return "mobile";
      });
    }, delay);
    return () => clearInterval(interval);
  }, [isIntroActive]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroActive(false);
    }, 4500); // 4.5 seconds intro
    return () => clearTimeout(timer);
  }, []);

  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(800px circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.1), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Function to handle smooth scrolling
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    if (window.scrollToSection) {
      window.scrollToSection(sectionId);
    } else {
      // Fallback if the global function isn't available yet
      const element = document.getElementById(sectionId.replace("#", ""));
      if (element) {
        const navbarHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const yOffset = -(navbarHeight + 30);
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const renderScreenContent = (device: "mobile" | "tablet" | "desktop", isXL: boolean) => {
    return (
      <div className="relative w-full h-full bg-zinc-950 overflow-hidden flex flex-col justify-end p-5 text-white">
        {/* Sleek Typographic "Coming Soon" Placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 select-none p-4 text-center">
          <div className="absolute w-32 h-32 rounded-full bg-primary/15 blur-3xl animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-bold text-primary tracking-widest uppercase font-mono mb-2">Preview</span>
          <span className="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Coming Soon...
          </span>
        </div>
        {/* Screen Shadows & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

        {/* Profile overlay details inside mock screen */}
        <div className={`relative z-20 text-white select-none text-left ${isXL ? "space-y-3 p-2" : "space-y-2"}`}>
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold tracking-wide ${isXL ? "text-[11px]" : "text-[9px]"}`}>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            ACTIVE — {device.toUpperCase()}
          </div>
          <div>
            <h3 className={`font-bold tracking-tight leading-tight ${isXL ? "text-2xl" : "text-lg"}`}>Sufyan Kamil</h3>
            <p className={`font-mono text-zinc-400 ${isXL ? "text-xs" : "text-[10px]"}`}>SDE — Mobile & Cloud</p>
          </div>
          {/* Minimal Stack Badge details */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["RN", "FLUTTER", "NEXT.JS", "NODE"].map((tech) => (
              <span key={tech} className={`bg-white/10 hover:bg-white/20 rounded border border-white/5 transition-all font-mono font-medium ${isXL ? "px-2 py-1 text-[10px]" : "px-1.5 py-0.5 text-[8px]"}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden group"
    >
      {/* Fullscreen Intro Preloader */}
      {isIntroActive && (
        <div className="fixed inset-0 z-[9999] bg-background flex flex-col justify-center items-center p-4">
          {/* Skip Intro button */}
          <button
            onClick={() => setIsIntroActive(false)}
            className="absolute top-8 right-8 z-[60] px-4 py-2 rounded-full border border-border hover:bg-muted text-xs font-semibold text-foreground transition-all bg-card/50"
          >
            Skip Intro
          </button>
          
          {/* Subtitle loader status */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-[10px] uppercase tracking-widest font-mono">
              Simulating Responsive Viewports
            </span>
            <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            </div>
          </div>

          <div style={{ perspective: "1200px" }} className="relative group p-4 flex justify-center items-center w-full max-w-[36rem] h-[34rem] select-none scale-105 md:scale-110">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-3xl opacity-75"></div>

            {/* Stateful Animated Frame Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={deviceType}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full flex justify-center items-center"
              >
                {deviceType === "mobile" && (
                  <div className="relative w-72 h-[34rem]" style={{ transformStyle: "preserve-3d" }}>
                    {/* Metallic 3D Bezel Extrusions */}
                    <div className="absolute inset-0 bg-zinc-800 rounded-[2.5rem]" style={{ transform: "translateZ(-2px)" }} />
                    <div className="absolute inset-0 bg-zinc-850 rounded-[2.5rem]" style={{ transform: "translateZ(-4px)" }} />
                    <div className="absolute inset-0 bg-zinc-900 rounded-[2.5rem] shadow-2xl" style={{ transform: "translateZ(-6px)" }} />

                    {/* Front Screen Card */}
                    <div className="absolute inset-0 bg-zinc-950 rounded-[2.5rem] p-2.5 border-4 border-zinc-800 flex flex-col overflow-hidden" style={{ transform: "translateZ(0px)" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-800 rounded-b-2xl z-30 flex items-center justify-between px-3 text-[8px] text-zinc-550 font-mono">
                        <span>9:41</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-750"></div>
                        <span>100%</span>
                      </div>
                      <div className="flex-1 rounded-[1.8rem] overflow-hidden border border-zinc-850">
                        {renderScreenContent("mobile", true)}
                      </div>
                    </div>
                  </div>
                )}
 
                {deviceType === "tablet" && (
                  <div className="relative w-[24rem] h-[31rem]" style={{ transformStyle: "preserve-3d" }}>
                    {/* Metallic 3D Bezel Extrusions */}
                    <div className="absolute inset-0 bg-zinc-800 rounded-[2rem]" style={{ transform: "translateZ(-2px)" }} />
                    <div className="absolute inset-0 bg-zinc-850 rounded-[2rem]" style={{ transform: "translateZ(-4px)" }} />
                    <div className="absolute inset-0 bg-zinc-900 rounded-[2rem] shadow-2xl" style={{ transform: "translateZ(-6px)" }} />

                    {/* Front Screen Card */}
                    <div className="absolute inset-0 bg-zinc-950 rounded-[2rem] p-3 border-4 border-zinc-800 flex flex-col overflow-hidden" style={{ transform: "translateZ(0px)" }}>
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-850 z-30 border border-zinc-705"></div>
                      <div className="flex-1 rounded-[1.4rem] overflow-hidden border border-zinc-850">
                        {renderScreenContent("tablet", true)}
                      </div>
                    </div>
                  </div>
                )}
 
                {deviceType === "desktop" && (
                  <div className="relative flex flex-col items-center w-full max-w-[34rem]" style={{ transformStyle: "preserve-3d" }}>
                    <div className="relative w-full h-[20rem]" style={{ transformStyle: "preserve-3d" }}>
                      {/* Metallic 3D Bezel Extrusions */}
                      <div className="absolute inset-0 bg-zinc-800 rounded-t-xl" style={{ transform: "translateZ(-2px)" }} />
                      <div className="absolute inset-0 bg-zinc-850 rounded-t-xl" style={{ transform: "translateZ(-4px)" }} />

                      {/* Front Screen Card */}
                      <div className="absolute inset-0 bg-zinc-950 rounded-t-xl p-2.5 border-t-4 border-x-4 border-zinc-800 shadow-2xl flex flex-col overflow-hidden" style={{ transform: "translateZ(0px)" }}>
                        <div className="flex-1 rounded-t-lg overflow-hidden border border-zinc-850">
                          {renderScreenContent("desktop", true)}
                        </div>
                      </div>
                    </div>
                    <div className="w-[101.5%] h-4 bg-zinc-800 rounded-b-xl flex items-center justify-center border-b-2 border-zinc-700 shadow-md" style={{ transform: "translateZ(-2px)" }}>
                      <div className="w-12 h-1 bg-zinc-900 rounded-full"></div>
                    </div>
                    <div className="w-16 h-8 bg-zinc-700 border-x border-zinc-600" style={{ transform: "translateZ(-4px)" }}></div>
                    <div className="w-32 h-2 bg-zinc-800 rounded-t-lg border-t border-zinc-650" style={{ transform: "translateZ(-6px)" }}></div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Huge Background Typography (Layered Behind Content) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center pointer-events-none select-none opacity-[0.04] dark:opacity-[0.025] transition-opacity duration-300">
        <span className="text-[14vw] font-extrabold tracking-tighter leading-none text-foreground text-center">
          SUFYAN
        </span>
        <span className="text-[14vw] font-extrabold tracking-tighter leading-none text-foreground text-center">
          KAMIL
        </span>
      </div>

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: spotlightBackground,
        }}
      />

      {/* Floating Background Icons */}
      <FloatingIcon icon={Smartphone} delay={0} x={64} y={96} yOffset={120} />
      <FloatingIcon icon={Code2} delay={1} x={800} y={80} yOffset={-160} />
      <FloatingIcon icon={Layers} delay={2} x={720} y={360} yOffset={100} />
      <FloatingIcon icon={Cpu} delay={0.5} x={96} y={400} yOffset={-120} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20"
              >
                Software Engineer | Mobile Engineer
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight flex flex-wrap items-center">
                Building&nbsp;
                <span className="inline-flex relative h-[1.1em] min-w-[290px] sm:min-w-[360px] md:min-w-[460px] lg:min-w-[620px] overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: 35, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -35, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent whitespace-nowrap"
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>{" "}
                for mobile & web
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm a Software Engineer & Mobile Developer passionate about building elegant,
                high-performance applications. Specializing in full-stack mobile, web, and
                cross-platform technologies to bring complex ideas to life.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                  <a
                    href="#projects"
                    onClick={(e) => handleSmoothScroll(e, "#projects")}
                  >
                    Explore My Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                  >
                    Let's Connect
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {[
                  { icon: GithubIcon, href: "https://github.com/sufyankamil", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/sufyankamil/", label: "LinkedIn" },
                  { 
                    icon: Mail, 
                    onClick: () => {
                      navigator.clipboard.writeText("sufyankamil15@gmail.com");
                      toast.success("Email ID copied to clipboard!");
                    }, 
                    label: "Email" 
                  }
                ].map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {"onClick" in social ? (
                      <button
                        onClick={social.onClick}
                        className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={social.href || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 hidden min-[460px]:flex flex-col justify-center items-center relative z-10 min-h-[34rem]"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <div className="relative group p-4 flex justify-center items-center w-full max-w-[28rem] h-[32rem]">
              {/* Outer Diagonal Orbit Ring */}
              <motion.div
                className="absolute inset-0 m-2 border border-primary/20 rounded-[50%] pointer-events-none"
                style={{
                  transform: "rotateX(65deg) rotateY(-15deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Opposite Diagonal Orbit Ring */}
              <motion.div
                className="absolute inset-0 m-6 border border-accent/25 rounded-[50%] pointer-events-none"
                style={{
                  transform: "rotateX(55deg) rotateY(25deg)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 to-accent/15 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-65 transition duration-1000"></div>

              {/* Stateful Animated Frame Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={deviceType}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -15 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full flex justify-center items-center"
                >
                  {deviceType === "mobile" && (
                    <div className="relative w-56 h-[27rem] bg-zinc-950 rounded-[2.2rem] p-2 border-4 border-zinc-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
                      {/* Status Bar notch area */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-800 rounded-b-2xl z-30 flex items-center justify-between px-3 text-[7px] text-zinc-500 font-mono">
                        <span>9:41</span>
                        <div className="w-1 h-1 rounded-full bg-zinc-900 border border-zinc-700"></div>
                        <span>100%</span>
                      </div>
                      <div className="flex-1 rounded-[1.6rem] overflow-hidden border border-zinc-850">
                        {renderScreenContent("mobile", false)}
                      </div>
                    </div>
                  )}

                  {deviceType === "tablet" && (
                    <div className="relative w-[19rem] h-[25rem] bg-zinc-950 rounded-[1.6rem] p-2.5 border-4 border-zinc-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
                      {/* Tablet Camera notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-850 z-30 border border-zinc-700"></div>
                      <div className="flex-1 rounded-[1rem] overflow-hidden border border-zinc-855">
                        {renderScreenContent("tablet", false)}
                      </div>
                    </div>
                  )}

                  {deviceType === "desktop" && (
                    <div className="relative flex flex-col items-center w-full max-w-[27rem] transition-all duration-300">
                      {/* Monitor Screen */}
                      <div className="relative w-full h-[16rem] bg-zinc-950 rounded-t-xl p-2 border-t-4 border-x-4 border-zinc-800 shadow-2xl flex flex-col overflow-hidden">
                        <div className="flex-1 rounded-t-lg overflow-hidden border border-zinc-850">
                          {renderScreenContent("desktop", false)}
                        </div>
                      </div>
                      {/* Monitor bottom bezel */}
                      <div className="w-[101.5%] h-3.5 bg-zinc-800 rounded-b-xl flex items-center justify-center border-b-2 border-zinc-700 shadow-md">
                        <div className="w-10 h-1 bg-zinc-900 rounded-full"></div>
                      </div>
                      {/* Monitor Stand */}
                      <div className="w-12 h-6 bg-zinc-700 border-x border-zinc-600 shadow-inner"></div>
                      {/* Monitor Base */}
                      <div className="w-28 h-1.5 bg-zinc-800 rounded-t-lg border-t border-zinc-650"></div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
