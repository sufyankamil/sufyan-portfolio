"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

export default function ResumeView() {
  const litAchievements = [
    "Architected cross-platform mobile apps using Flutter & React Native, improving system performance and offline capabilities.",
    "Built TransitMS, a shared React Native codebase with role-specific builds for drivers, parents, and paras—routes, live GPS, and trip coordination.",
    "Developed Transit Rider, a passenger React Native app for NEMT trip booking, live map tracking, and visit management.",
    "Delivered features for Transit Web Portal (Next.js/React/TypeScript)—route planning, live monitoring, and admin workflows.",
    "Designed responsive UI/UX and integrated Firebase for real-time updates.",
    "Implemented secure authentication & role-based access control.",
    "Optimized app security and API integrations using Node.js.",
    "Streamlined development with Flutterflow and Agile practices."
  ];

  const headstraitAchievements = [
    "Built robust full-stack web & mobile applications using React, Flutter, and Node.js.",
    "Developed RESTful APIs, reducing integration time by 30%.",
    "Improved app performance & security, reducing crash rates by 15%.",
    "Led testing & CI/CD efforts, cutting defects by 50%."
  ];

  return (
    <div className="space-y-8 py-4 text-left">
      {/* Contact Information */}
      <div className="border-b border-border/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Mohd Sufyan Asghar Kamil
          </h2>
          <p className="text-muted-foreground text-sm font-semibold tracking-wide mt-1 uppercase">Software Engineer | Mobile Engineer</p>
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" /> Work Experience
        </h3>

        <div className="space-y-6">
          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold leading-none">Software & Mobile Engineer</h4>
                  <p className="text-primary font-semibold text-sm mt-1.5">
                    Lauren Information Technologies Pvt. Ltd.
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 rounded-full px-3 py-0.5 text-[10px] font-mono">
                  July 2023 - Present
                </Badge>
              </div>
              <div className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                {litAchievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary mt-1 select-none font-bold">•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold leading-none">Software Engineer</h4>
                  <p className="text-primary font-semibold text-sm mt-1.5">Headstrait Software LLP</p>
                </div>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 rounded-full px-3 py-0.5 text-[10px] font-mono">
                  Jan 2022 - Apr 2023
                </Badge>
              </div>
              <div className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                {headstraitAchievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary mt-1 select-none font-bold">•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" /> Education
        </h3>

        <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-xl font-bold leading-none">B.E. in Computer Engineering</h4>
                <p className="text-primary font-semibold text-sm mt-1.5">
                  Saraswati College of Engineering, Navi Mumbai
                </p>
              </div>
              <Badge variant="outline" className="rounded-full px-3 py-0.5 text-[10px] font-mono">2019 - 2022</Badge>
            </div>
            <p className="mt-4 text-muted-foreground text-sm font-mono bg-muted/50 dark:bg-zinc-800/40 inline-block px-3 py-1 rounded-md border border-border/20">
              CGPA: 8.3 / 10
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
          <Code className="h-5 w-5 text-primary" /> Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "JavaScript", "Dart", "Swift", "Kotlin"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Mobile & Web</h4>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "React Native", "ReactJS", "Next.js", "HTML/CSS", "Node.js"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "MongoDB", "Supabase"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Cloud & Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Firebase", "Git / GitHub", "CI/CD", "Docker", "JIRA", "Notion"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div>
        <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
          <Award className="h-5 w-5 text-primary" /> Certifications & Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6">
              <h4 className="font-bold text-sm mb-3">Certifications</h4>
              <div className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-1 select-none font-bold">•</span>
                  <span>Android ATC - Flutter Certified Application Developer</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-1 select-none font-bold">•</span>
                  <span>National Level Project Competition Certificate</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-1 select-none font-bold">•</span>
                  <span>Cisco NetAcad at ISTE National Level Codathon</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6">
              <h4 className="font-bold text-sm mb-3">Achievements</h4>
              <div className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-1 select-none font-bold">•</span>
                  <span>Recognized as a Top Performer during the Internship at Internship Studio for outstanding contributions in web development and improving user engagement by 15%.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-1 select-none font-bold">•</span>
                  <span>Published research on Palm Vein Technology in IRJET Journal (Dec 2020), highlighting advancements in biometric authentication and secure personal identification systems.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
