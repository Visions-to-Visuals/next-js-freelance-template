"use client"
import { useRef, useEffect } from "react";

export default function Background() {
    const backgroundRef = useRef(null);

    useEffect(() => {
        function setHeight() {
            if (backgroundRef.current) {
                const heroSectionHeight = backgroundRef.current.offsetHeight;
                backgroundRef.current.style.minHeight = `${heroSectionHeight}px`;
            }
        }
        setHeight();
        window.addEventListener("resize", setHeight);
        return () => {
            window.removeEventListener("resize", setHeight);
        };
    }, []);

    return (
        <>
            <div
                ref={backgroundRef}
                className="bg-background bg-cover bg-no-repeat bg-center w-full h-full absolute z-[-1] min-h-[700px]"
            ></div>
            <div
                className="absolute w-full h-full bg-cover bg-[#182C25] opacity-80 z-[-1] min-h-[700px]"
            ></div>
        </>
    );
}
