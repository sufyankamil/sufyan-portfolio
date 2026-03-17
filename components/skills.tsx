"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layers, Layout, ShieldCheck, Smartphone, Terminal, Zap } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Dart", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
    ],
  },
  {
    category: "Mobile & Web Development",
    items: [
      { name: "Flutter", level: 95 },
      { name: "React Native", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    category: "Databases & Backend",
    items: [
      { name: "Firebase", level: 90 },
      { name: "Supabase", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "JIRA", level: 80 },
      { name: "Agile", level: 85 },
    ],
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: "https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg",
  },
  {
    name: "Dart",
    icon: "https://dart-code.gallerycdn.vsassets.io/extensions/dart-code/dart-code/3.109.20250404/1743679141664/Microsoft.VisualStudio.Services.Icons.Default",
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    name: "Node.js",
    icon: "https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg",
  },
  {
    name: "Firebase",
    icon: "https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png",
  },
  {
    name: "MySQL",
    icon: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
  },
  {
    name: "MongoDB",
    icon: "https://w7.pngwing.com/pngs/115/190/png-transparent-mongodb-original-logo-icon-thumbnail.png",
  },
  {
    name: "Git",
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "React Native",
    icon: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
  },
  {
    name: "Supabase",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Technical <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A specialized toolkit focused on building high-performance, 
            cross-platform mobile applications and scalable web solutions.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          
          {/* Main Skill: Flutter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3 lg:row-span-2"
          >
            <Card className="h-full bg-primary/[0.03] border-primary/20 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Smartphone size={120} />
              </div>
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Mobile Mastery</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Extensive experience in Flutter & Dart, building secure and 
                  fluid cross-platform applications with pixel-perfect UI.
                </p>
                <div className="space-y-6 mt-auto">
                  {[
                    { name: "Flutter", level: 95 },
                    { name: "React Native", level: 85 },
                    { name: "Dart", level: 95 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2.5 bg-primary/10" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Card className="h-full bg-card border-primary/10 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 text-accent rounded-xl">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Development Core</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "JavaScript", icon: Terminal },
                    { name: "Java", icon: Cpu },
                    { name: "Python", icon: Layers },
                    { name: "HTML/CSS", icon: Layout }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <item.icon size={18} className="text-primary" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend & Databases */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-xl">
                    <Database size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Data & Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Firebase", "Supabase", "MongoDB", "PostgreSQL", "Node.js"].map((db) => (
                    <span key={db} className="px-4 py-2 bg-background border border-primary/10 rounded-full text-sm font-medium hover:text-primary transition-colors cursor-default">
                      {db}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Extra: Tools */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <Card className="h-full bg-accent/[0.02] border-accent/20">
              <CardContent className="p-6">
                 <div className="flex items-center gap-3 mb-4 text-accent">
                    <ShieldCheck size={20} />
                    <h3 className="font-bold">Workflow</h3>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {["Git", "CI/CD", "Docker", "Agile"].map(t => (
                      <Badge key={t} variant="outline" className="border-accent/30 text-accent font-medium">{t}</Badge>
                    ))}
                 </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-4"
          >
            <Card className="h-full bg-muted/30 border-primary/5 border-dashed">
              <CardContent className="p-6 flex items-center justify-between">
                 <div className="space-y-1">
                    <h3 className="font-bold text-lg">Continuous Learning</h3>
                    <p className="text-sm text-muted-foreground italic">"Always exploring new architectural patterns and cloud-native solutions."</p>
                 </div>
                 <Zap className="text-primary/40 animate-pulse" size={32} />
              </CardContent>
            </Card>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-primary/5"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
                 <div className="relative w-12 h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      unoptimized={true}
                    />
                 </div>
                <span className="text-xs font-semibold uppercase tracking-tighter text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


