"use client"
import { useEffect } from "react";
import Background from "./components/background"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero"
import Experience from "./components/experience"
import Categories from "./components/categories"
import Team from "./components/team"
import Contact from "./components/contact"
import Cover from "./components/cover"
import { useState } from "react";

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
      <Background></Background>

      {isMobile ? (
        <>
          <Navbar></Navbar>
          <div className="min-h-screen tablet-s:min-h-0 tablet-s:pt-[3rem]">
            <HeroSection setScrollToCategories={setScrollToCategories}></HeroSection>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen tablet-s:min-h-0 tablet-s:pt-[3rem]">
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
    </>
  )
}
