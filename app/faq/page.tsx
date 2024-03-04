import Navbar from "../components/navbar"
import Contact from "../components/contact"
import Faq from "../components/faq"
import FaqHero from "../components/faq-hero"

export default function FaqPage() {
  return (
    <>
      <div className="relative">
        <Navbar></Navbar>
        <FaqHero></FaqHero>
        <Faq></Faq>
        <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[-1] pointer-events-none select-none animate-background" />
      </div>

      <Contact></Contact>
    </>

  )
}
