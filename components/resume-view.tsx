"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Code, GraduationCap, Rocket, User } from "lucide-react";
import { civicNetHighlights, headstraitAchievements, litAchievements } from "@/lib/resume-data";
import { FIGMA_PROTOTYPE_URL } from "@/lib/links";

export default function ResumeView() {
  return (
    <div className="space-y-8 py-4 text-left">
      {/* Contact Information */}
      <div className="border-b border-border/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Sufyan Kamil
          </h2>
          <p className="text-muted-foreground text-sm font-semibold tracking-wide mt-1 uppercase">Software Engineer | UI/UX & Front-End | Flutter, React, Figma</p>
        </div>
        <div className="text-sm text-muted-foreground md:text-right space-y-0.5">
          <p>Dubai, UAE</p>
          <p>sufyankamil15@gmail.com</p>
          <p>sufyankamil.com · linkedin.com/in/sufyankamil · github.com/sufyankamil</p>
        </div>
      </div>

      {/* Professional Summary */}
      <div>
        <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
          <User className="h-5 w-5 text-primary" /> Professional Summary
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Software Engineer with 6 years of experience building mobile and web applications for banking,
          fintech and AI products serving 50M+ users. My focus is user interfaces: I turn product
          requirements, user flows and wireframes into high-fidelity, accessible, responsive screens, and
          I build them in Flutter and React. I'm experienced with design systems, reusable component
          libraries, developer handover and reviewing implemented UI against approved designs, backed by
          solid knowledge of APIs, architecture and CI/CD.
        </p>
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
                  <h4 className="text-xl font-bold leading-none">UI/UX Designer</h4>
                  <p className="text-primary font-semibold text-sm mt-1.5">
                    Lauren Information Technologies
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 rounded-full px-3 py-0.5 text-[10px] font-mono">
                  July 2023 - October 2026
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
                  <p className="text-primary font-semibold text-sm mt-1.5">Headstrait Software</p>
                </div>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 rounded-full px-3 py-0.5 text-[10px] font-mono">
                  Jan 2021 - Apr 2023
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

      {/* Personal Project */}
      <div>
        <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
          <Rocket className="h-5 w-5 text-primary" /> Personal Project
        </h3>
        <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="mb-4">
              <h4 className="text-xl font-bold leading-none">CivicNet | AI-Powered Community Help App</h4>
              <p className="text-primary font-semibold text-sm mt-1.5">
                Solo Designer & Developer: End-to-End Product Design and Development
              </p>
              <p className="text-xs text-muted-foreground mt-2 space-x-2">
                <a className="underline hover:text-primary" href="https://apps.apple.com/us/app/civicnet/id6761416586" target="_blank" rel="noopener noreferrer">App Store</a>
                <span>·</span>
                <a className="underline hover:text-primary" href="https://github.com/sufyankamil/ai-civicnet" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span>·</span>
                <a className="underline hover:text-primary" href={FIGMA_PROTOTYPE_URL} target="_blank" rel="noopener noreferrer">Figma Prototype</a>
              </p>
            </div>
            <div className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
              {civicNetHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-primary mt-1 select-none font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Tech Stack:</span> Figma, Flutter, Dart, GetX, GoRouter,
              Supabase, PostgreSQL, pgvector, Gemini API, Firebase, Google Maps, GitHub Actions.
            </p>
          </CardContent>
        </Card>
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
                  Saraswati College of Engineering, University of Mumbai
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
          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300 md:col-span-2">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">UI/UX & Design</h4>
              <div className="flex flex-wrap gap-2">
                {["Figma", "High-Fidelity UI Design", "Wireframe-to-UI Execution", "Interactive Prototyping", "Design Systems", "Responsive Design", "Interaction Patterns", "Accessibility (WCAG basics)", "UI States", "Developer Handover", "Design QA"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["Dart", "TypeScript", "JavaScript", "Kotlin", "Java"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Mobile & Web</h4>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "React Native", "React", "Next.js", "Flutter Web", "Node.js"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "MySQL", "Oracle"].map((tech) => (
                  <Badge key={tech} className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/20 transition-colors text-[10px] font-mono rounded-full px-3 py-0.5">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-card/45 backdrop-blur-md rounded-2xl hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-3">Cloud & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {["Firebase", "Supabase", "GitHub Actions", "CI/CD", "Automated Testing", "Agile/Scrum"].map((tech) => (
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
                  <span>National Level Project Competition</span>
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
