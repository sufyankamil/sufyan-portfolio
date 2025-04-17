"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

export default function ResumeView() {
  return (
    <div className="space-y-8 py-4">
      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Mohd Sufyan Asghar Kamil</h2>
          <p className="text-muted-foreground">Flutter Developer</p>
        </div>
        <div className="space-y-1 text-sm">
          <p>Email: info@sufyankamil.com</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" /> Work Experience
        </h3>

        <Card className="mb-4">
          <CardContent className="p-5">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h4 className="font-bold">Flutter Developer</h4>
                <p className="text-primary">
                  Lauren Information Technologies Pvt. Ltd.
                </p>
              </div>
              <Badge variant="outline">July 2023 - Present</Badge>
            </div>
            <ul className="list-disc list-inside space-y-1 mt-3 text-muted-foreground">
              <li>
                Developed cross-platform mobile apps using Flutter & Dart,
                ensuring high performance.
              </li>
              <li>
                Designed responsive UI/UX and integrated Firebase for real-time
                updates.
              </li>
              <li>
                Implemented secure authentication & role-based access control.
              </li>
              <li>
                Optimized app security and API integrations using Node.js.
              </li>
              <li>
                Streamlined development with Flutterflow and Agile practices.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h4 className="font-bold">Full Stack Developer</h4>
                <p className="text-primary">Headstrait Software LLP</p>
              </div>
              <Badge variant="outline">Jan 2022 - Apr 2023</Badge>
            </div>
            <ul className="list-disc list-inside space-y-1 mt-3 text-muted-foreground">
              <li>
                Built full-stack web & mobile applications using Flutter, React,
                and Node.js.
              </li>
              <li>Developed RESTful APIs, reducing integration time by 30%.</li>
              <li>
                Improved app performance & security, reducing crash rates by
                15%.
              </li>
              <li>Led testing & CI/CD efforts, cutting defects by 50%.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" /> Education
        </h3>

        <Card>
          <CardContent className="p-5">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h4 className="font-bold">B.E. in Computer Engineering</h4>
                <p className="text-primary">
                  Saraswati College of Engineering, Navi Mumbai
                </p>
              </div>
              <Badge variant="outline">2019 - 2022</Badge>
            </div>
            <p className="mt-2 text-muted-foreground">CGPA - 8.3</p>
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" /> Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Java</Badge>
                <Badge>Python</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Dart</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-2">Mobile & Web</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Flutter</Badge>
                <Badge>ReactJS</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>Node.js</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-2">Databases</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>MySQL</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-2">Cloud & Backend</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Firebase</Badge>
                <Badge>Git</Badge>
                <Badge>CI/CD</Badge>
                <Badge>JIRA</Badge>
                <Badge>Notion</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" /> Certifications &
          Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-2">Certifications</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Android ATC - Flutter Certified Application Developer</li>
                <li>National Level Project Competition</li>
                <li>Cisco NetAcad at ISTE National Level Codathon</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-2">Achievements</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Recognized as a Top Performer during the Internship at
                  Internship Studio for outstanding contributions in web
                  development and improving user engagement by 15%
                </li>
                <li>
                  Published research on Palm Vein Technology in IRJET Journal
                  (Dec 2020), highlighting advancements in biometric
                  authentication and secure personal identification systems
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
