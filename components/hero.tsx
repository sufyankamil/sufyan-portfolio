"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // Use the global scroll function if available
    if (window.scrollToSection) {
      window.scrollToSection(sectionId)
    } else {
      // Fallback if the global function isn't available yet
      const element = document.getElementById(sectionId.replace("#", ""))
      if (element) {
        const navbarHeight = document.querySelector("header")?.offsetHeight || 0
        const yOffset = -(navbarHeight + 30)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Flutter Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Building <span className="text-primary">innovative solutions</span> with Flutter
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm a Flutter developer with a degree in Computer Engineering. I have a passion for creating clean,
                efficient code and finding innovative solutions to complex problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
                    Contact Me
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://github.com/sufyankamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GitHub className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sufyankamil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <a
                  href="mailto:sufyankamil@hotmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/profile.png"
                alt="Sufyan Kamil - Flutter Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

