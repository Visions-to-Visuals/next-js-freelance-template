import Navbar from "../components/navbar"
import Contact from "../components/contact"
import Faq from "../components/faq"
import FaqHero from "../components/faq-hero"

export default function FaqPage() {
  return (
    <>
      <Navbar></Navbar>
      <FaqHero></FaqHero>
      <Faq></Faq>
      <Contact></Contact>
    </>
  )
}
