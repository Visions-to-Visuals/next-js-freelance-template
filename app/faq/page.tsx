import Navbar from "../components/navbar"
import Contact from "../components/contact"
import Faq from "../components/faq"
import FaqHero from "../components/faq-hero"
import Footer from "../components/footer"
import Image from "next/image"


export default function FaqPage() {
  return (
    <>
      <div className="backgroundRepeater">
        <Navbar></Navbar>
        <FaqHero></FaqHero>
        <Faq></Faq>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </>

  )
}
