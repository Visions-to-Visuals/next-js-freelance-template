import Navbar from "../components/navbar"
import GalleryHero from "../components/gallery-hero"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function ProjectGallery() {
  return (
    <>
      <div className="relative">
        <Navbar></Navbar>
        <GalleryHero></GalleryHero>
        <Gallery></Gallery>
        <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[-1] pointer-events-none select-none animate-background" />
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}
