import Navbar from "../components/navbar"
import GalleryHero from "../components/gallery-hero"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function ProjectGallery() {
  return (
    <>
      <div className="backgroundRepeater">
        <Navbar></Navbar>
        <GalleryHero></GalleryHero>
        <Gallery></Gallery>
      </div>
      
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}
