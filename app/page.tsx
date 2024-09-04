import Navbar from "../components/Navbar"
import Hero from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <nav>
      <Navbar/>
      </nav>
      <section id="home" className="md:h-[95vh] h-[80vh] overflow-hidden">
      <Hero/>
      </section>
      <section id="about" className="h-full text-white pb-0">
      <About/>
      </section>
      <section id="projects" className="h-full text-white pb-0">
      <Projects/>
      </section>
      <footer id="contacts" className="md:h-[70vh] h-[150vh] text-white ">
      <Contact/>
      <Footer/>
      </footer>
    </main>
  );
}
