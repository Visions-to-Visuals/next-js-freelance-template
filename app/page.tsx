import Background from "./components/background"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero"
import Categories from "./components/categories"
import Benefits from "./components/benefits"
import Showcase from "./components/showcase"
import Contact from "./components/contact"
import Cover from "./components/cover"

export default function Home() {
  return (
    <>
      <Cover></Cover>
      <Background></Background>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Benefits></Benefits>
      <Showcase></Showcase>
      <Contact></Contact>
    </>
  )
}
