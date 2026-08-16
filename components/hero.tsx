"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, Layers, Mail, Smartphone, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "sonner";

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FloatingIcon({
  icon: Icon,
  delay,
  x,
  y,
}: {
  icon: LucideIcon;
  delay: number;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      className="absolute text-primary/10 pointer-events-none hidden lg:block"
      style={{ left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{
        y: [-20, 20, -20],
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
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(800px circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.1), transparent 80%)`
  );

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
          background: spotlightBackground,
        }}
      />

      {/* Floating Background Icons */}
      <FloatingIcon icon={Smartphone} delay={0} x={64} y={96} />
      <FloatingIcon icon={Code2} delay={1} x={800} y={80} />
      <FloatingIcon icon={Layers} delay={2} x={720} y={360} />
      <FloatingIcon icon={Cpu} delay={0.5} x={96} y={400} />

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
                Software Engineer | Mobile Engineer
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  innovative solutions
                </span>{" "}
                for mobile & web
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm a Software Engineer & Mobile Developer passionate about building elegant,
                high-performance applications. Specializing in full-stack mobile, web, and
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
                  { icon: GithubIcon, href: "https://github.com/sufyankamil", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/sufyankamil/", label: "LinkedIn" },
                  { 
                    icon: Mail, 
                    onClick: () => {
                      navigator.clipboard.writeText("sufyankamil15@gmail.com");
                      toast.success("Email ID copied to clipboard!");
                    }, 
                    label: "Email" 
                  }
                ].map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {"onClick" in social ? (
                      <button
                        onClick={social.onClick}
                        className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={social.href || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    )}
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
                  alt="Sufyan Kamil - Software & Mobile Engineer"
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
