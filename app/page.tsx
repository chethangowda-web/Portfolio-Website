import { About } from "@/components/portfolio/about"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { CursorGlow } from "@/components/portfolio/cursor-glow"
import { Experience } from "@/components/portfolio/experience"
import { Footer } from "@/components/portfolio/footer"
import { Hero } from "@/components/portfolio/hero"
import { Navbar } from "@/components/portfolio/navbar"
import { Projects } from "@/components/portfolio/projects"
import { ScrollProgress } from "@/components/portfolio/scroll-progress"
import { Skills } from "@/components/portfolio/skills"

export default function Page() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
