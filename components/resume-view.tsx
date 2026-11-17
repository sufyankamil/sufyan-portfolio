"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

export default function ResumeView() {
  const litAchievements = [
      "Built Axis Bank (4th largest bank in India) internet banking features in Flutter with a user base of 50 Mn+, covering OAuth authentication, fraud and dispute management and transaction flows, with encrypted API calls and secure on-device storage.",
      "Developed React Native mobile applications for a real-time transportation platform, implementing GPS tracking, trip management, route planning, pre-trip inspections, notifications, localization, maps, and role-based workflows across iOS and Android.",
      "Developed the corresponding operations portal using Next.js, React, and TypeScript, supporting route planning, live trip monitoring, fleet management, analytics, and administrative workflows.",
      "Built the web portal for a Dubai education marketplace targeting 400,000+ school and university students (Next.js, React, TypeScript, Turborepo), with AI-based matching that recommends institutions from each user's fee range, course interests and location.",
      "Delivered verified institution microsites, admin approval workflows, multi-stage admissions with status tracking, and role-based access for students, parents and institutions.",
      "Integrated RESTful APIs, Firebase, Mapbox, third-party SDKs, cloud services, and native Android components, optimizing performance, reliability, and cross-platform functionality.",
      "Improved development velocity by ~30% and reduced production defects by ~60% through modular architecture, reusable components, CI/CD, automated testing, and structured release processes.",
    ];

  const headstraitAchievements = [
      "Engineered and scaled backend and mobile infrastructure supporting 300,000+ concurrent users with 99.9% uptime through distributed architecture, database optimization, and high-availability design.",
      "Improved platform performance by ~20% and reduced API response times by ~30% through architectural refactoring, backend optimization, and database query tuning.",
      "Built a low-code application platform with Flutter Web and React UI modules, Node.js services, and automated code/service generators, accelerating app creation by ~50%, reducing manual errors by ~60%, and saving 14+ hours per project.",
      "Developed responsive, reusable frontend components using React (hooks, state management, REST integration) to improve scalability and maintainability.",
      "Delivered a Web3 cross-chain marketplace with smart contracts, decentralized identity, and token-based payments across 4 networks with 99.9% uptime, ~15% higher transaction success rates, and ~250ms lower latency.",
      "Led development of a secure digital banking platform with KYC workflows, user dashboards, and transaction controls, including React admin and analytics panels, reducing onboarding time by 30% and unauthorized transactions by ~20%.",
    ];

  return (
    <div className="space-y-8 py-4 text-left">
      {/* Contact Information */}
      <div className="border-b border-border/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Mohd Sufyan Asghar Kamil
          </h2>
          <p className="text-muted-foreground text-sm font-semibold tracking-wide mt-1 uppercase">Senior Software Engineer | Mobile Engineering | AI, Flutter & React Native</p>
        </div>
        <div className="text-sm text-muted-foreground md:text-right space-y-0.5">
          <p>Dubai, UAE</p>
          <p>sufyankamil15@gmail.com</p>
          <p>sufyankamil.com · linkedin.com/in/sufyankamil · github.com/sufyankamil</p>
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
                  <h4 className="text-xl font-bold leading-none">Senior Software Engineer</h4>
                  <p className="text-primary font-semibold text-sm mt-1.5">
                    Lauren Information Technologies
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
