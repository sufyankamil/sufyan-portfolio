"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award, Calendar } from "lucide-react"

// Replace the experiences array with the user's actual work experience
const experiences = [
  {
    title: "Flutter Developer",
    company: "Lauren Information Technologies Pvt. Ltd.",
    period: "July 2023 - Present",
    description:
      "Developing cross-platform mobile applications using Flutter and Dart with a focus on performance and user experience.",
    achievements: [
      "Developed cross-platform mobile apps using Flutter & Dart, ensuring high performance",
      "Designed responsive UI/UX and integrated Firebase for real-time updates",
      "Implemented secure authentication & role-based access control",
      "Optimized app security and API integrations using Node.js",
      "Streamlined development with Flutterflow and Agile practices",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Headstrait Software LLP",
    period: "Jan 2022 - Apr 2023",
    description:
      "Built and maintained full-stack web and mobile applications using modern technologies and best practices.",
    achievements: [
      "Built full-stack web & mobile applications using Flutter, React, and Node.js",
      "Developed RESTful APIs, reducing integration time by 30%",
      "Improved app performance & security, reducing crash rates by 15%",
      "Led testing & CI/CD efforts, cutting defects by 50%",
    ],
  },
]

// Replace the certifications array with the user's actual certifications
const certifications = [
  {
    title: "Flutter Certified Application Developer",
    issuer: "Android ATC",
    date: "2022",
    description: "Professional certification for Flutter development skills and best practices.",
  },
  {
    title: "National Level Project Competition",
    issuer: "ISTE",
    date: "2021",
    description: "Recognition for outstanding project work at the national level.",
  },
  {
    title: "Cisco NetAcad",
    issuer: "ISTE National Level Codathon",
    date: "2021",
    description: "Participation and recognition in national level coding competition.",
  },
  {
    title: "Research Publication",
    issuer: "IRJET Journal",
    date: "Dec 2020",
    description: "Published research on Palm Vein Technology, highlighting advancements in biometric authentication.",
  },
]

// Add the education section to the component
export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-6">Experience & Education</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey, education, and credentials in Flutter development and related technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <Badge variant="outline" className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" /> {exp.period}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-4">{exp.company}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <p className="font-medium">Key Responsibilities & Achievements:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold my-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              Education
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">B.E. in Computer Engineering</h4>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" /> 2019-2022
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">Saraswati College of Engineering, Navi Mumbai</p>
                  <p className="text-muted-foreground">CGPA - 8.3</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">{cert.title}</h4>
                        <Badge variant="outline">{cert.date}</Badge>
                      </div>
                      <p className="text-primary text-sm mb-2">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              Achievements
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Top Performer Recognition</h4>
                  <p className="text-primary text-sm mb-2">Internship Studio</p>
                  <p className="text-muted-foreground text-sm">
                    Recognized as a Top Performer during the Internship at Internship Studio for outstanding
                    contributions in web development and improving user engagement by 15%
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

