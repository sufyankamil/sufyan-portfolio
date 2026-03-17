"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="overflow-hidden border-primary/10 shadow-2xl bg-background/50 backdrop-blur-sm">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="flex-1 p-8 bg-primary text-primary-foreground flex flex-col justify-center items-center md:items-start text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">Let's Build Something Great</h3>
                  <p className="opacity-90 mb-8 max-w-xs">
                    Whether you have a specific project in mind or just want to say hi, my inbox is always open.
                  </p>
                  <div className="flex flex-col gap-4 w-full">
                    <a href="mailto:sufyankamil@hotmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="font-medium">sufyankamil@hotmail.com</span>
                    </a>
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-xl mb-6">Social Connect</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/sufyankamil", label: "GitHub" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/sufyankamil/", label: "LinkedIn" }
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="p-4 bg-muted rounded-2xl hover:bg-primary/10 hover:text-primary transition-all shadow-sm"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-muted-foreground">
                    Usually responds within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
