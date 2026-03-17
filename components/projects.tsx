"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe as WebIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

// Update the projects array with actual image paths that will work reliably
const projects = [
  {
    id: 1,
    title: "Donor Connect",
    description:
      "A mobile application connecting blood donors with recipients, featuring real-time notifications and location-based matching.",
    image: "/projects/donor_connect_cover.png",
    tags: ["Flutter", "Firebase", "Google Maps API", "Real-time Database"],
    github: "https://github.com/sufyankamil/donor-connect",
    demo: "https://github.com/sufyankamil/donor-connect",
    category: "mobile",
  },
  {
    id: 2,
    title: "OAuth Web App",
    description:
      "A secure authentication system built with Flutter for web, implementing OAuth protocols for seamless third-party authentication.",
    image: "/projects/oauth_web_app_cover.png",
    tags: ["Flutter Web", "OAuth", "Firebase Auth", "REST API"],
    github: "https://github.com/sufyankamil",
    demo: "https://github.com/sufyankamil",
    category: "web",
  },
  {
    id: 3,
    title: "SaaS-ScrapeFlow",
    description:
      "A full-stack web application for automated web scraping, data extraction, and analysis with customizable workflows.",
    image: "/projects/saas_scrapeflow_cover.png",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/sufyankamil/SaaS-ScrapeFlow",
    demo: "https://github.com/sufyankamil/SaaS-ScrapeFlow",
    category: "web",
  },
  {
    id: 4,
    title: "CivicNet",
    description:
      "A Flutter application designed to connect, help, and build community, empowering users to engage in civic activities.",
    image: "/projects/civicnet_feature_graphic.png",
    tags: ["Flutter", "Dart", "Community", "Supabase", "Firebase"],
    github: "https://github.com/sufyankamil/ai-civicnet",
    demo: "https://github.com/sufyankamil/ai-civicnet",
    category: "mobile",
  },
  {
    id: 5,
    title: "CryptoTracker",
    description:
      "A comprehensive cryptocurrency tracking application offering real-time market data, portfolio management, and price alerts.",
    image: "/projects/crypto_tracker_cover.png",
    tags: ["React Native", "Redux", "CoinGecko API", "Charts"],
    github: "https://github.com/sufyankamil",
    demo: "https://github.com/sufyankamil",
    category: "mobile",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-6">My Projects</h2>
          <p className="text-lg text-muted-foreground">
            Explore my portfolio of Flutter applications spanning various domains and showcasing different technical
            capabilities and design approaches.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setActiveTab("mobile")}>
                Mobile Apps
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setActiveTab("web")}>
                Web Apps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button asChild size="lg">
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
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-primary/10 bg-background/50 backdrop-blur-sm group">
          <div className="relative h-56 w-full overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 transition-opacity z-10" />
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index < 2}
            />
            <div className="absolute top-4 right-4 z-20">
              <Badge className="bg-background/80 backdrop-blur-md text-foreground border-primary/20">
                {project.category === "mobile" ? <Smartphone className="w-3 h-3 mr-1" /> : <WebIcon className="w-3 h-3 mr-1" />}
                {project.category === "mobile" ? "Mobile" : "Web"}
              </Badge>
            </div>
          </div>
          <CardContent className="flex-grow p-6 relative" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <Button asChild size="sm" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground group/btn">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" /> Code
                </Link>
              </Button>
              <Button asChild size="sm" className="rounded-full shadow-lg shadow-primary/10">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Demo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

