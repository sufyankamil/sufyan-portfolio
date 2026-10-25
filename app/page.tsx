import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import { GateExperience } from "@/components/three/GateExperience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sufyan Kamil",
  url: "https://sufyankamil.com",
  jobTitle: "Senior Software Engineer",
  image: "https://sufyankamil.com/images/sufyan-kamil.webp",
  worksFor: { "@type": "Organization", name: "Lauren Information Technologies" },
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
  knowsAbout: ["React Native", "Flutter", "Next.js", "React", "TypeScript", "Node.js", "Supabase", "Firebase"],
  sameAs: ["https://github.com/sufyankamil", "https://www.linkedin.com/in/sufyankamil/", "https://flutter-mastery.hashnode.dev/"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <GateExperience />
        <Hero />
        <div className="border-t border-border/20" />
        <About />
        <div className="border-t border-border/20" />
        <Projects />
        <div className="border-t border-border/20" />
        <Skills />
        <div className="border-t border-border/20" />
        <Experience />
        <div className="border-t border-border/20" />
        <Blog />
        <div className="border-t border-border/20" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
