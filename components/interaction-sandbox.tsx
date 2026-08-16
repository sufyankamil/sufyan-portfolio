"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Move, TouchpadIcon as Touch, Zap, Sparkles, BookOpen, Brain, Network, Radio } from "lucide-react";
import { useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function InteractionSandbox() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(0);
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  const spawnParticles = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const colors = ["#00f2fe", "#4facfe", "#f093fb", "#f5576c", "#a8c0ff"];
    const newParticles = Array.from({ length: 8 }).map((_, idx) => ({
      id: Math.random() + idx,
      x: x,
      y: y,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setParticles((prev) => [...prev, ...newParticles].slice(-32));
  };

  const lessons = [
    {
      icon: <Brain className="text-primary w-5 h-5" />,
      title: "Tactile Response & UX Feel",
      summary: "Animations should follow physical mass mechanics. Replacing linear transitions with damp-sprung movements increases perceived fluidity, keeping mobile users engaged with reactive feedback loops.",
    },
    {
      icon: <Network className="text-accent w-5 h-5" />,
      title: "Resilient Offline Caching",
      summary: "Handling connection dropouts gracefully via local-first cache queries (SQLite/Supabase) delivers sub-100ms response times. Sync happens in background pipelines once telemetry registers online status.",
    },
    {
      icon: <Radio className="text-emerald-400 w-5 h-5" />,
      title: "State Sync & Telemetry",
      summary: "High-frequency coordinates mapping (like live GPS tracking) requires buffered telemetry pipelines to prevent rendering bottlenecks, resolving memory leaks across mobile threads.",
    }
  ];

  return (
    <section id="sandbox" className="hidden md:block py-24 bg-background relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">05 / SANDBOX</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Micro-Interactions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Lessons Learned</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An interactive sandbox for testing spring physics UI models, alongside engineering principles derived from building production systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Sandbox Control Playground */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Magnetic Drag */}
            <BentoSandboxCard 
              title="Magnetic Drag Node" 
              description="Grab the sphere and drag it. It snaps back immediately on release using elastic constraints."
              icon={<Move size={18} />}
            >
              <div ref={dragConstraintsRef} className="relative w-full h-40 bg-background/40 rounded-2xl border border-border/50 flex items-center justify-center overflow-hidden">
                <motion.div
                  drag
                  dragConstraints={dragConstraintsRef}
                  dragElastic={0.15}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
                  whileDrag={{ scale: 1.25 }}
                  className="w-14 h-14 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground shadow-lg cursor-grab active:cursor-grabbing relative"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-110" />
                  <Move size={18} className="relative z-10" />
                </motion.div>
              </div>
            </BentoSandboxCard>

            {/* Bubble Emitter */}
            <BentoSandboxCard 
              title="Particle Emitter" 
              description="Click the button to fire floating canvas particles that drift upward and fade away."
              icon={<Sparkles size={18} />}
            >
              <div className="relative w-full h-40 bg-background/40 rounded-2xl border border-border/50 flex items-center justify-center overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={spawnParticles}
                  className="px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/20 text-xs tracking-wider uppercase relative overflow-hidden"
                >
                  Emit Sparks
                </motion.button>

                {/* Particle canvas overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <AnimatePresence>
                    {particles.map((p) => {
                      const angle = Math.random() * Math.PI * 2;
                      const distance = 40 + Math.random() * 50;
                      const driftX = Math.cos(angle) * distance;
                      const driftY = -50 - Math.random() * 60;
                      return (
                        <motion.span
                          key={p.id}
                          initial={{ x: p.x - 4, y: p.y - 4, scale: 1.8, opacity: 1 }}
                          animate={{ x: p.x + driftX, y: p.y + driftY, scale: 0.1, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.85, ease: "easeOut" }}
                          style={{ backgroundColor: p.color }}
                          className="absolute w-2.5 h-2.5 rounded-full"
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </BentoSandboxCard>

            {/* Fluid Toggle */}
            <BentoSandboxCard 
              title="Fluid Jelly Switch" 
              description="A spring-loaded switch that morphs shape organically when toggled."
              icon={<Touch size={18} />}
              className="md:col-span-2"
            >
              <div className="w-full h-36 bg-background/40 rounded-2xl border border-border/50 flex items-center justify-center">
                <FluidToggle />
              </div>
            </BentoSandboxCard>

          </div>

          {/* Right panel: Lessons Learned Accordion */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card className="h-full border border-border/40 bg-card/30 backdrop-blur-md rounded-[2rem] p-7 md:p-8 flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Lessons Learned</h3>
              </div>
              
              <div className="space-y-4 flex-grow">
                {lessons.map((lesson, idx) => {
                  const isSelected = selectedLesson === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedLesson(isSelected ? null : idx)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        isSelected 
                          ? "border-primary/20 bg-primary/[0.03]" 
                          : "border-border/30 hover:border-border/60 hover:bg-muted/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {lesson.icon}
                          <h4 className="font-bold text-sm leading-snug">{lesson.title}</h4>
                        </div>
                        <motion.span
                          animate={{ rotate: isSelected ? 45 : 0 }}
                          className="text-muted-foreground flex-shrink-0"
                        >
                          +
                        </motion.span>
                      </div>
                      
                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-3 text-xs text-muted-foreground leading-relaxed"
                          >
                            {lesson.summary}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

function BentoSandboxCard({ title, description, icon, children, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group ${className}`}
    >
      <Card className="h-full border border-border/40 bg-card/30 backdrop-blur-md rounded-[2rem] hover:border-primary/25 hover:shadow-md transition-all duration-500">
        <CardContent className="p-6 md:p-7 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              {icon}
            </div>
            <h3 className="font-bold text-sm leading-none">{title}</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-5">{description}</p>
          <div className="mt-auto w-full flex justify-center">
            {children}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FluidToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div 
      className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer border border-border/60 transition-colors duration-300 ${
        isOn ? "bg-primary justify-end" : "bg-muted-foreground/20 justify-start"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary-foreground font-bold"
        layout
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 20
        }}
      />
    </div>
  );
}
