"use client";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
    const closeMobileMenu = () => setOverlayVisible(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    function NavItem( {text, page} ) {
        return (
            <a href={page}>
                <li className="px-2 cursor-pointer font-[700] font-[Outfit] duration-300 hover:text-accent">{text}</li>
            </a>
        )
    }

    return(
        <>
            {isMobile ? (
            <nav className="h-[6rem] flex justify-between items-center px-[4vw] tablet-s:h-[4rem]">
                <div className={`fixed top-0 bottom-0 z-10 bg-accent
                duration-500 ease-in-out ${overlayVisible ? 'right-0' : '-right-[300px]'} w-[300px] mobile:w-[240px]`}>
                    <ul className="flex flex-col items-center justify-center px-4 gap-y-10 
                    text-secondary mt-[8rem] text-[1.2rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Projects" page=""></NavItem>
                        <NavItem text="FAQ" page=""></NavItem>
                        <NavItem text="About" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </ul>
                </div>

                <img className="h-[2.2rem] cursor-pointer" src="favicon.ico"></img>
                <FontAwesomeIcon
                icon={overlayVisible ? faXmark : faBars}
                className="cursor-pointer text-3xl z-10"
                color="white"
                onClick={toggleOverlay}
                />
            </nav>

            ):( 

            <nav className="h-[6rem] flex justify-between items-center px-[2rem] tablet-s:h-[4rem]">
                <img className="h-[3rem] cursor-pointer" src="favicon.ico"></img>
                <ul className="flex flex-row items-center justify-center px-4 gap-x-8
                text-primary text-[18px] laptop:text-[16px] laptop-s:text-[14px] tablet:text-[12px]">
                    <NavItem text="Home" page=""></NavItem>
                    <NavItem text="Projects" page=""></NavItem>
                    <NavItem text="FAQ" page=""></NavItem>
                    <NavItem text="About" page=""></NavItem>
                    <NavItem text="Contact" page=""></NavItem>
                </ul>
            </nav>
            )}
        </>
    )
}