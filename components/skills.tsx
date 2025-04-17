"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            My technical skills and proficiency in various technologies related
            to Flutter development.
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
                  <h3 className="text-xl font-bold mb-6">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-6">
                    {skillGroup.items.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
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

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-card p-2 rounded-full shadow-md mb-3 w-24 h-24 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain p-2"
                    unoptimized={true} // This helps with external URLs
                  />
                </div>
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
