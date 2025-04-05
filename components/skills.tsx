"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

// Update the skills array with the user's actual skills
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
      { name: "ReactJS", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    category: "Databases & Backend",
    items: [
      { name: "Firebase", level: 90 },
      { name: "MySQL", level: 85 },
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
]

// Update the technologies array with the user's actual technologies
const technologies = [
  { name: "Flutter", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Dart", icon: "/placeholder.svg?height=80&width=80" },
  { name: "React", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Node.js", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Firebase", icon: "/placeholder.svg?height=80&width=80" },
  { name: "MySQL", icon: "/placeholder.svg?height=80&width=80" },
  { name: "MongoDB", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Git", icon: "/placeholder.svg?height=80&width=80" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            My technical skills and proficiency in various technologies related to Flutter development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
                  <div className="space-y-6">
                    {skillGroup.items.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-card p-4 rounded-full shadow-md mb-3 w-20 h-20 flex items-center justify-center">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

