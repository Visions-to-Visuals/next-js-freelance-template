"use client"
import { useEffect, useState } from "react";
import Background from "./components/background"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero"
import Experience from "./components/experience"
import Categories from "./components/categories"
import Team from "./components/team"
import Contact from "./components/contact"
import Cover from "./components/cover"
import Footer from "./components/footer";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);
  const [scrollToCategories, setScrollToCategories] = useState(false);

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <>
      <Cover></Cover>

      {isMobile ? (
        <>
          <Navbar></Navbar>
          <div className="relative">
            <HeroSection setScrollToCategories={setScrollToCategories}></HeroSection>
            <div className="flex justify-center">
              <img className="hidden z-[-1] absolute bottom-0 tablet-s:w-[21rem] mobile:w-[24rem] tablet-s:inline-block" 
              src="images/TimothyTransparent.png">
              </img>
            </div>
          </div>
        </>
      ) : (
        <>
        <Background></Background>
          <div className="min-h-screen">
          <Navbar></Navbar>
            <HeroSection setScrollToCategories={setScrollToCategories}></HeroSection>
          </div>
        </>
      )
    }
      <Categories scrollToCategories={scrollToCategories}></Categories>
      <Experience></Experience>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>

    </>
  )
}
