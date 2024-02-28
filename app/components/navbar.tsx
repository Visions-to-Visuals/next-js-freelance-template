"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleOverlay = () => setOverlayVisible(!overlayVisible);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function NavItem({ text, page }) {
        return (
            <a href={page}>
                <li className="px-2 cursor-pointer font-[700] duration-300">{text}</li>
            </a>
        );
    }

    return (
        <>
            {isMobile ? (
                <nav className={`h-[4.5rem] flex justify-between items-center px-[4vw] sticky top-0 z-[40] duration-300 ${scrollPosition > 0 ? 'bg-accent' : 'bg-transparent'}`}>
                    <div className={`fixed top-0 bottom-0 z-10 bg-accent duration-500 ease-in-out ${overlayVisible ? 'right-0' : '-right-[300px]'} w-[300px] mobile:w-[240px]`}>
                        <ul className="flex flex-col items-center justify-center px-4 gap-y-10 text-primary mt-[8rem] text-[1.2rem]">
                            <NavItem text="Home" page="/" />
                            <NavItem text="Project Gallery" page="/project-gallery" />
                            <NavItem text="FAQs" page="/faq" />
                            <NavItem text="Contact" page="" />
                        </ul>
                    </div>
                    <img className="h-[2.2rem] cursor-pointer" src="favicon.ico" />
                    <FontAwesomeIcon
                        icon={overlayVisible ? faXmark : faBars}
                        className="cursor-pointer text-3xl z-10"
                        color="white"
                        onClick={toggleOverlay}
                    />
                </nav>
            ) : (
                <nav className="h-[6rem] flex justify-end items-center px-[2rem] tablet-s:h-[4rem]">
                    <ul className="flex flex-row items-center justify-center px-4 gap-x-8 text-primary text-[16px] laptop:text-[16px] laptop-s:text-[14px] tablet:text-[12px]">
                        <NavItem text="Home" page="/" />
                        <NavItem text="Project Gallery" page="/project-gallery" />
                        <NavItem text="FAQs" page="/faq" />
                        <NavItem text="Contact" page="" />
                    </ul>
                </nav>
            )}
        </>
    );
}
