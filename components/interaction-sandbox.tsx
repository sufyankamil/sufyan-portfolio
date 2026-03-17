"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Move, TouchpadIcon as Touch, Zap } from "lucide-react";
import { useState } from "react";

export default function InteractionSandbox() {
  return (
    <section id="sandbox" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Interactive Playground
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Micro-Interaction <span className="text-primary">Sandbox</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of physics-based UI elements and tactile micro-interactions 
            that make mobile apps feel alive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Springy Button */}
          <SandboxCard 
            title="Springy Button" 
            description="Physics-based scale and rotation response."
            icon={<Zap size={20} />}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg shadow-primary/20"
            >
              Push Me
            </motion.button>
          </SandboxCard>

          {/* Liquid Toggle */}
          <SandboxCard 
            title="Fluid Toggle" 
            description="Smooth, organic transition state."
            icon={<Touch size={20} />}
          >
            <FluidToggle />
          </SandboxCard>

          {/* Inertial Drag */}
          <SandboxCard 
            title="Inertial Drag" 
            description="Tactile dragging with momentum."
            icon={<Move size={20} />}
          >
            <div className="relative w-full h-32 bg-background/50 rounded-xl border border-dashed border-primary/20 flex items-center justify-center overflow-hidden">
                <motion.div
                    drag
                    dragConstraints={{ left: -60, right: 60, top: -20, bottom: 20 }}
                    dragElastic={0.2}
                    whileDrag={{ scale: 1.2, zIndex: 10 }}
                    className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-xl cursor-grab active:cursor-grabbing"
                >
                    <Move size={24} />
                </motion.div>
            </div>
          </SandboxCard>
        </div>
      </div>
    </section>
  );
}

function SandboxCard({ title, description, icon, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full bg-card border-primary/5 hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-8 flex flex-col items-center text-center h-full">
          <div className="mb-6 p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-10">{description}</p>
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
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? "bg-primary justify-end" : "bg-muted-foreground/20 justify-start"}`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </div>
  );
}
