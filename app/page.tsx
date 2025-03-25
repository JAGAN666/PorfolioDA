import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Publications from "@/components/sections/publications"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import ScrollProgress from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

