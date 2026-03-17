"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, Github as GitHub, Layers, Linkedin, Mail, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Function to handle smooth scrolling
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    if (window.scrollToSection) {
      window.scrollToSection(sectionId);
    } else {
      // Fallback if the global function isn't available yet
      const element = document.getElementById(sectionId.replace("#", ""));
      if (element) {
        const navbarHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const yOffset = -(navbarHeight + 30);
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const FloatingIcon = ({ icon: Icon, delay, x, y }: any) => (
    <motion.div
      className="absolute text-primary/10 pointer-events-none hidden lg:block"
      initial={{ x, y, opacity: 0 }}
      animate={{
        y: [y - 20, y + 20, y - 20],
        opacity: 0.15,
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        },
        opacity: { duration: 1 },
      }}
    >
      <Icon size={48} />
    </motion.div>
  );

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden group"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.1), transparent 80%)`
          ),
        }}
      />

      {/* Floating Background Icons */}
      <FloatingIcon icon={Smartphone} delay={0} x="10%" y="20%" />
      <FloatingIcon icon={Code2} delay={1} x="85%" y="15%" />
      <FloatingIcon icon={Layers} delay={2} x="75%" y="70%" />
      <FloatingIcon icon={Cpu} delay={0.5} x="15%" y="75%" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20"
              >
                Flutter & React Native Developer
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  innovative solutions
                </span>{" "}
                for mobile & web
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm a Mobile App Developer passionate about creating elegant, 
                high-performance applications. Specializing in Flutter and 
                cross-platform technologies to bring complex ideas to life.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                  <a
                    href="#projects"
                    onClick={(e) => handleSmoothScroll(e, "#projects")}
                  >
                    Explore My Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                  >
                    Let's Connect
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {[
                  { icon: GitHub, href: "https://github.com/sufyankamil", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sufyankamil/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:sufyankamil@hotmail.com", label: "Email" }
                ].map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-background shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Sufyan Kamil - Flutter Developer"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
