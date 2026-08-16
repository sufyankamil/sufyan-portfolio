"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, Smartphone, Globe as WebIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

// Update the projects array with actual image paths that will work reliably
const projects = [
  {
    id: 1,
    title: "TransitMS — Driver / Parent / Para",
    description:
      "Shared React Native app with role-specific builds for drivers, parents, and paras—covering routes, live GPS, attendance, and real-time trip coordination from dispatch to drop-off.",
    image: "/projects/sentryms_cover.png",
    tags: ["React Native", "Live GPS", "Role-based Builds", "Real-time Tracking"],
    category: "mobile",
  },
  {
    id: 2,
    title: "Transit Rider — Passenger App",
    description:
      "Passenger-facing React Native app for non-emergency medical transport—book trips, track live status on a map, and manage visits, history, and support.",
    image: "/projects/sentry_rider_cover.png",
    tags: ["React Native", "Maps", "Trip Booking", "NEMT"],
    category: "mobile",
  },
  {
    id: 3,
    title: "Transit Web Portal",
    description:
      "Next.js operations dashboard for school districts—route planning, live trip monitoring, fleet and student management, and admin workflows for safe daily transport.",
    image: "/projects/sentryride_web_cover.png",
    tags: ["Next.js", "React", "TypeScript", "Operations Dashboard"],
    category: "web",
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
  },
  {
    id: 5,
    title: "OAuth Web App",
    description:
      "A secure authentication system built with Flutter for web, implementing OAuth protocols for seamless third-party authentication.",
    image: "/projects/oauth_web_app_cover.png",
    tags: ["Flutter Web", "OAuth", "Firebase Auth", "REST API"],
    category: "web",
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
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const sectionRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 35, stiffness: 140 }
  // Section background counter-parallax
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [40, -40]), springConfig)
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, -40]), springConfig)

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Dynamic Background Parallax Bubbles */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden opacity-55 dark:opacity-30">
        <div className="absolute top-1/4 -left-20 w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mb-20 text-left"
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
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            A curated showcase of mobile apps and custom web platforms, highlighting clean architecture, interactive animations, and responsive system design.
          </p>
        </motion.div>
 
        <Tabs defaultValue="all" className="mb-20">
          <div className="flex justify-start mb-12 border-b border-border/20 pb-4">
            <TabsList className="bg-transparent gap-6 h-auto p-0">
              {["all", "mobile", "web"].map((tab) => (
                <TabsTrigger 
                  key={tab}
                  value={tab} 
                  onClick={() => setActiveTab(tab)}
                  className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-2 text-sm font-bold uppercase tracking-wider text-muted-foreground border-b-2 border-transparent transition-all"
                >
                  {tab === "all" ? "All Projects" : tab === "mobile" ? "Mobile Apps" : "Web Apps"}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
 
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
 
          <TabsContent value="mobile" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
 
          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
 
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
            <Link href="https://github.com/sufyankamil" target="_blank" rel="noopener noreferrer">
              View More on GitHub <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
 
function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
 
  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 220 })
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 220 })
 
  // 3D Card Tilt transforms
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"])
 
  // Inner Image window-parallax translation (opposite movement direction)
  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-8%", "8%"])
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-8%", "8%"])

  // Asymmetric staggered top spacing class based on index
  const getStaggerClass = (idx: number) => {
    if (idx % 3 === 1) return "md:translate-y-12"
    if (idx % 3 === 2) return "md:translate-y-24"
    return ""
  }
 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }
 
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      style={{ perspective: "1000px" }}
      className={`h-full ${getStaggerClass(index)}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full cursor-pointer"
      >
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-[0_45px_75px_-20px_rgba(var(--primary-rgb),0.2)] dark:hover:shadow-[0_45px_75px_-20px_rgba(0,255,255,0.15)] border border-border/40 bg-card/30 hover:bg-card/75 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/50 backdrop-blur-md rounded-[2.2rem] hover:-translate-y-6 transition-all duration-700 group relative" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Index Counter Watermark in background */}
          <div className="absolute right-6 top-48 text-[7.5rem] font-black text-foreground/[0.03] select-none pointer-events-none font-mono">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>

          {/* Inner Image Frame */}
          <div className="relative h-40 min-[460px]:h-60 w-full overflow-hidden rounded-[2rem] m-2.5 max-w-[calc(100%-1.25rem)]" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity z-10" />
            
            {/* Sliding Image Parallax */}
            <motion.div 
              style={{ x: imgX, y: imgY, scale: 1.22 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </motion.div>

            {/* Badge overlay */}
            <div className="absolute top-4 left-4 z-20" style={{ transform: "translateZ(30px)" }}>
              <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border/50 rounded-full px-3 py-1 text-[10px] font-bold">
                {project.category === "mobile" ? <Smartphone className="w-3 h-3 mr-1" /> : <WebIcon className="w-3 h-3 mr-1" />}
                {project.category === "mobile" ? "Mobile" : "Web"}
              </Badge>
            </div>
          </div>

          {/* Floated content details */}
          <CardContent className="flex-grow p-7 relative flex flex-col" style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight" style={{ transform: "translateZ(25px)" }}>
              {project.title}
            </h3>
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
              <div className="flex gap-3 pt-2" style={{ transform: "translateZ(35px)" }}>
                <Button asChild size="sm" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" /> Code
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

