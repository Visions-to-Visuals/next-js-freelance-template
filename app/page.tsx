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

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <>
      <Cover></Cover>
      <Background></Background>
      <Navbar></Navbar>

      <div className="min-h-screen tablet-s:min-h-0 tablet-s:pt-[3rem]">
        <HeroSection></HeroSection>
      </div>

      <Categories></Categories>
      <Experience></Experience>
      <Team></Team>
      <Contact></Contact>
    </>
  )
}
