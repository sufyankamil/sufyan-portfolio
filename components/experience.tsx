"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, Calendar, ChevronDown, GraduationCap, Trophy } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Lauren Information Technologies",
    period: "July 2023 - Present",
    description:
      "Building secure banking features, real-time transportation apps and AI-assisted web platforms with Flutter, React Native, Next.js and TypeScript.",
    achievements: [
      "Built Axis Bank (4th largest bank in India) internet banking features in Flutter with a user base of 50 Mn+, covering OAuth authentication, fraud and dispute management and transaction flows, with encrypted API calls and secure on-device storage",
      "Developed React Native mobile applications for a real-time transportation platform, implementing GPS tracking, trip management, route planning, pre-trip inspections, notifications, localization, maps, and role-based workflows across iOS and Android",
      "Developed the corresponding operations portal using Next.js, React, and TypeScript, supporting route planning, live trip monitoring, fleet management, analytics, and administrative workflows",
      "Built the web portal for a Dubai education marketplace targeting 400,000+ school and university students (Next.js, React, TypeScript, Turborepo), with AI-based matching that recommends institutions from each user's fee range, course interests and location",
      "Delivered verified institution microsites, admin approval workflows, multi-stage admissions with status tracking, and role-based access for students, parents and institutions",
      "Integrated RESTful APIs, Firebase, Mapbox, third-party SDKs, cloud services, and native Android components, optimizing performance, reliability, and cross-platform functionality",
      "Improved development velocity by ~30% and reduced production defects by ~60% through modular architecture, reusable components, CI/CD, automated testing, and structured release processes",
    ],
  },
  {
    title: "Software Engineer",
    company: "Headstrait Software",
    period: "Jan 2021 - Apr 2023",
    description:
      "Scaled backend and mobile infrastructure, built a low-code app platform, and delivered Web3 and digital banking products.",
    achievements: [
      "Engineered and scaled backend and mobile infrastructure supporting 300,000+ concurrent users with 99.9% uptime through distributed architecture, database optimization, and high-availability design",
      "Improved platform performance by ~20% and reduced API response times by ~30% through architectural refactoring, backend optimization, and database query tuning",
      "Built a low-code application platform with Flutter Web and React UI modules, Node.js services, and automated code/service generators, accelerating app creation by ~50%, reducing manual errors by ~60%, and saving 14+ hours per project",
      "Developed responsive, reusable frontend components using React (hooks, state management, REST integration) to improve scalability and maintainability",
      "Delivered a Web3 cross-chain marketplace with smart contracts, decentralized identity, and token-based payments across 4 networks with 99.9% uptime, ~15% higher transaction success rates, and ~250ms lower latency",
      "Led development of a secure digital banking platform with KYC workflows, user dashboards, and transaction controls, including React admin and analytics panels, reducing onboarding time by 30% and unauthorized transactions by ~20%",
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
    title: "Cisco NetAcad — National Level Codathon",
    issuer: "ISTE",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

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
                      {/* Interactive pulsing Timeline dot */}
                      <div className="absolute -left-[37px] md:-left-[45px] top-6.5 z-20 flex items-center justify-center w-5 h-5">
                        {isExpanded ? (
                          <div className="relative flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-primary/45 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary border-2 border-background" />
                          </div>
                        ) : (
                          <span className="block w-3.5 h-3.5 rounded-full border-2 border-background bg-zinc-400 dark:bg-zinc-700 transition-colors duration-300 group-hover:bg-primary/50" />
                        )}
                      </div>

                      <Card 
                        className={`overflow-hidden border border-border/40 bg-card/30 dark:bg-zinc-900/10 backdrop-blur-md rounded-2xl hover:border-primary/30 transition-all duration-500 group cursor-pointer shadow-md relative ${
                          isExpanded ? "shadow-xl border-primary/30 bg-card/60 dark:bg-zinc-900/30 ring-1 ring-primary/10" : ""
                        }`}
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      >
                        {/* Hover Gradient Border top bar */}
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                            <div>
                              <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
                                {exp.title}
                              </h4>
                              <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 px-3 py-1 font-mono text-[10px] rounded-full">
                                <Calendar className="mr-1.5 h-3 w-3 inline-block" /> {exp.period}
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
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden border-t border-border/20 pt-4 mt-4"
                              >
                                <p className="font-bold text-xs uppercase tracking-widest text-primary mb-4 font-mono">
                                  Key Achievements & Accomplishments
                                </p>
                                <ul className="flex flex-col gap-3 text-muted-foreground">
                                  {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed hover:text-foreground transition-colors duration-300">
                                      <span className="text-primary mt-1 select-none flex-shrink-0">•</span>
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
                      Saraswati College of Engineering, University of Mumbai
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
              <div className="relative">
                {/* Embla Viewport */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-2xl border border-border/40 bg-card/30" ref={emblaRef}>
                  <div className="flex">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex-[0_0_100%] min-w-0 p-1">
                        <Card className="border-0 bg-transparent shadow-none">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3 gap-2">
                              <h4 className="font-extrabold text-sm leading-snug text-foreground">{cert.title}</h4>
                              <span className="text-[10px] font-mono bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20 flex-shrink-0">
                                {cert.date}
                              </span>
                            </div>
                            <p className="text-primary text-xs font-semibold mb-3">{cert.issuer}</p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {cert.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi && emblaApi.scrollTo(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex ? "bg-primary w-5" : "bg-muted"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
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
