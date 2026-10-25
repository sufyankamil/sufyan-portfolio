"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code, Layers, Smartphone, Zap } from "lucide-react";
import { ScrollParallax } from "@/components/scroll-parallax";
import { useRef } from "react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Normalized x/y mouse coordinate percentages relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to 3D rotation angles
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 250 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 250 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 150 };
  
  // Grid shifts slightly in direction of mouse
  const gridX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const gridY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-16, 16]), springConfig);

  // Background bubbles move in opposite direction
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [35, -35]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [35, -35]), springConfig);

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const features = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Clean Code",
      description:
        "I write clean, maintainable code following best practices and design patterns.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive Design",
      description:
        "Creating interfaces that work flawlessly across all device sizes and orientations.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Focused",
      description:
        "Building high-performance apps with smooth animations and efficient resource usage.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Clean Architecture",
      description:
        "Implementing clean architectures, design patterns (MVVM, SOLID), and modular, testable codebases.",
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      onMouseMove={handleSectionMouseMove}
      className="relative py-16 md:py-24 bg-muted/50 overflow-hidden"
    >
      {/* Decorative Parallax Background Elements (moves opposite to grid) */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <ScrollParallax yOffset={120} className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <ScrollParallax yOffset={-140} className="absolute bottom-12 -right-12 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">01 / WHO I AM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a Senior Software Engineer with a degree in Computer Engineering and 6+ years of
            experience across AI, Fintech & Banking. I work across application architecture,
            RESTful APIs, backend services, databases, authentication, cloud services, CI/CD and
            third-party SDK integrations, with Flutter, React Native, Next.js, React, TypeScript
            and Node.js as my core stack.
          </p>
        </motion.div>

        <motion.div style={{ x: gridX, y: gridY }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <Card className="h-full border border-border/50 bg-card/30 hover:bg-card/85 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative" style={{ transformStyle: "preserve-3d" }}>
                  {/* Micro-glow spot */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  <CardContent className="p-8 flex flex-col items-start text-left h-full" style={{ transformStyle: "preserve-3d" }}>
                    <div className="mb-6 relative w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-md" style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
                      {/* Backdrop Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ transform: "translateZ(30px)" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ transform: "translateZ(20px)" }}>{feature.description}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-card/35 dark:bg-zinc-900/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-border/40 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Subtle background section marker */}
          <div className="absolute -right-10 -bottom-10 text-[10rem] font-black text-foreground/[0.02] pointer-events-none select-none">
            01
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-primary rounded-full"></span>
                <h3 className="text-2xl font-bold tracking-tight">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I've built backend and mobile systems serving 300,000+ concurrent users at
                99.9% uptime, and cut production defects by ~60% through modular architecture,
                CI/CD and automated testing. At Lauren Information Technologies I build Axis
                Bank internet banking features in Flutter for a 50M+ user base, a real-time
                transportation platform in React Native and Next.js, and the web portal for a
                Dubai education marketplace with AI-based institution matching.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me playing cricket or
                listening to music.
              </p>
            </div>
            <div className="lg:col-span-2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex flex-col items-center justify-center text-center shadow-inner hover:-translate-y-1 transition-all duration-300">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">6+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Years Experience
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-accent/5 dark:bg-accent/10 border border-accent/10 flex flex-col items-center justify-center text-center shadow-inner hover:-translate-y-1 transition-all duration-300">
                  <span className="text-4xl md:text-5xl font-extrabold text-accent mb-2 tracking-tight">50M+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Users Served
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
