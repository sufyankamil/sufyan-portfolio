"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Layers, Smartphone, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Clean Code",
      description:
        "I write clean, maintainable code following best practices and design patterns.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Responsive Design",
      description:
        "Creating interfaces that work flawlessly across all device sizes and orientations.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Performance Focused",
      description:
        "Building high-performance apps with smooth animations and efficient resource usage.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Architecture",
      description:
        "Implementing scalable architectures like BLoC, Provider, and GetX for maintainable apps.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-6">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a Flutter developer with a degree in Computer Engineering. I
            have experience working with a variety of technologies, including
            HTML, CSS, JavaScript, React, Flutter, Node.js, and MongoDB. I
            specialize in creating clean, efficient code and finding innovative
            solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-card rounded-xl p-6 md:p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                My journey spans across Frontend, Backend, Cloud, and Mobile
                Development, evolving into a comprehensive Full Stack skillset. I
                have experience working with a variety of technologies, including
                HTML, CSS, JavaScript, React, React Native, Flutter, Node.js, and
                MongoDB. In my current role as a Flutter Developer at Lauren
                Information Technologies, I am leading the development of
                cross-platform applications using Flutter, ensuring high-quality
                deliverables across web and mobile platforms.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me playing cricket or
                listening to music.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-primary font-bold">4+</span>
                </div>
                <div>
                  <h4 className="font-medium">Years Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    In mobile development
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-primary font-bold">20+</span>
                </div>
                <div>
                  <h4 className="font-medium">Projects Completed</h4>
                  <p className="text-sm text-muted-foreground">
                    Across various industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
