import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import InteractionSandbox from "@/components/interaction-sandbox";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sufyan Kamil | Software Engineer | Mobile Engineer",
  description:
    "Professional portfolio of Sufyan Kamil, showcasing Software Engineering, Full Stack, and Mobile Development skills and projects",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <InteractionSandbox />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
