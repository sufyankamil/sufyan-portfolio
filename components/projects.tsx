"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Update the projects array with actual image paths that will work reliably
const projects = [
  {
    id: 1,
    title: "Donor Connect",
    description:
      "A mobile application connecting blood donors with recipients, featuring real-time notifications and location-based matching.",
    image: "/placeholder.svg?height=400&width=600&text=Donor+Connect",
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
    image: "/placeholder.svg?height=400&width=600&text=OAuth+Web+App",
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
    image: "/placeholder.svg?height=400&width=600&text=SaaS+ScrapeFlow",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/sufyankamil/SaaS-ScrapeFlow",
    demo: "https://github.com/sufyankamil/SaaS-ScrapeFlow",
    category: "web",
  },
  {
    id: 4,
    title: "TaskMate",
    description:
      "A productivity mobile application for task management with features like reminders, categories, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600&text=TaskMate",
    tags: ["Flutter", "Firebase", "Local Storage", "Notifications"],
    github: "https://github.com/sufyankamil/taskMate",
    demo: "https://github.com/sufyankamil/taskMate",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority={index < 2}
          />
        </div>
        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-center">
          <Button asChild variant="outline" size="sm">
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

