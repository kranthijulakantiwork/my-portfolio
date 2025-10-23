import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
