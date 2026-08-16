"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, Calendar, ChevronDown, GraduationCap, Trophy } from "lucide-react";

const experiences = [
  {
    title: "Software & Mobile Engineer",
    company: "Lauren Information Technologies Pvt. Ltd.",
    period: "July 2023 - Present",
    description:
      "Developing scalable cross-platform applications and web systems using Flutter, React Native, Next.js, and Node.js, focusing on clean architecture, real-time telemetry, and logistics workflows.",
    achievements: [
      "Architected cross-platform mobile apps using Flutter & React Native, improving system performance and offline capabilities",
      "Built TransitMS, a modular React Native system with dynamic configurations for role-specific builds (drivers, parents, paras)—integrating live GPS telemetry and real-time synchronization",
      "Developed Transit Rider, a passenger app for NEMT booking, route optimization, and live maps tracking",
      "Delivered administrative dashboards for Transit Web Portal (Next.js/TypeScript) for fleet monitoring and route scheduling",
      "Implemented secure authentication and role-based access controls across backend microservices",
      "Optimized API endpoints and backend queries (Node.js/Supabase) to reduce latency and security vulnerabilities",
      "Maintained CI/CD pipelines, automated builds, and streamlined Agile team deliverables",
    ],
  },
  {
    title: "Software Engineer",
    company: "Headstrait Software LLP",
    period: "Jan 2022 - Apr 2023",
    description:
      "Built and maintained scalable web services and cross-platform applications using modern design patterns.",
    achievements: [
      "Built robust full-stack applications using React, Flutter, Node.js, and relational databases",
      "Developed RESTful APIs and middleware, reducing integration overhead by 30%",
      "Improved performance & security profiles, reducing application crash rates by 15%",
      "Established automated testing frameworks and CI/CD pipelines, cutting post-release defects by 50%",
    ],
  },
];

const certifications = [
  {
    title: "Flutter Certified Application Developer",
    issuer: "Android ATC",
    date: "2022",
    description:
      "Professional certification for Flutter development skills and best practices.",
  },
  {
    title: "National Level Project Competition",
    issuer: "ISTE",
    date: "2021",
    description:
      "Recognition for outstanding project work at the national level.",
  },
  {
    title: "Cisco NetAcad",
    issuer: "ISTE National Level Codathon",
    date: "2021",
    description:
      "Participation and recognition in national level coding competition.",
  },
  {
    title: "Research Publication",
    issuer: "IRJET Journal",
    date: "Dec 2020",
    description:
      "Published research on Palm Vein Technology, highlighting advancements in biometric authentication.",
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default expand first job

  return (
    <section id="experience" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">04 / JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My professional career path, official credentials, academic background, and notable industry recognitions.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience & Education Column */}
          <div className="lg:col-span-8 space-y-12">
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Work Experience</h3>
              </div>
              
              <div className="space-y-6 relative border-l-2 border-border/60 ml-4 pl-6 md:pl-8">
                {experiences.map((exp, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <span className={`absolute -left-[35px] md:-left-[43px] top-7 w-4 h-4 rounded-full border-2 border-background transition-colors duration-300 ${
                        isExpanded ? "bg-primary" : "bg-zinc-400 dark:bg-zinc-700"
                      }`} />

                      <Card 
                        className={`overflow-hidden border border-border/40 bg-card/40 backdrop-blur-md rounded-2xl hover:border-primary/30 transition-all duration-300 group cursor-pointer shadow-md ${
                          isExpanded ? "shadow-lg border-primary/25 bg-card/65" : ""
                        }`}
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                            <div>
                              <h4 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{exp.title}</h4>
                              <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 px-3 py-1 font-mono text-[10px] rounded-full">
                                <Calendar className="mr-1.5 h-3 w-3" /> {exp.period}
                              </Badge>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-muted-foreground"
                              >
                                <ChevronDown size={18} />
                              </motion.div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden border-t border-border/20 pt-4 mt-4"
                              >
                                <p className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                                  Key Achievements
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                                  {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                                      <span className="text-primary mt-1 select-none">•</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Education</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="ml-4"
              >
                <Card className="overflow-hidden border border-border/40 bg-card/30 rounded-2xl shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                      <h4 className="text-xl font-bold leading-tight">B.E. in Computer Engineering</h4>
                      <Badge variant="outline" className="flex items-center rounded-full px-3 text-[10px] font-mono border-border/80">
                        <Calendar className="mr-1.5 h-3 w-3" /> 2019-2022
                      </Badge>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-3">
                      Saraswati College of Engineering, Navi Mumbai
                    </p>
                    <p className="text-muted-foreground text-xs font-mono bg-muted/60 dark:bg-zinc-800/40 inline-block px-3 py-1 rounded-md border border-border/20">
                      CGPA: 8.3 / 10
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
 
          {/* Certifications & Achievements Column */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Award size={22} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Card className="overflow-hidden border border-border/40 bg-card/30 rounded-2xl hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h4 className="font-bold text-sm leading-snug">{cert.title}</h4>
                          <span className="text-[10px] font-mono bg-muted dark:bg-zinc-800/50 px-2 py-0.5 rounded text-muted-foreground border border-border/30">
                            {cert.date}
                          </span>
                        </div>
                        <p className="text-primary text-xs font-semibold mb-2">{cert.issuer}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Trophy size={22} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Achievements</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border border-border/40 bg-card/30 rounded-2xl hover:border-primary/20 transition-all duration-300 shadow-sm">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-sm mb-2">Top Performer Recognition</h4>
                    <p className="text-primary text-xs font-semibold mb-2">Internship Studio</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Recognized as a Top Performer during the Internship at
                      Internship Studio for outstanding contributions in web
                      development and improving user engagement by 15%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
