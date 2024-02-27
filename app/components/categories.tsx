"use client"
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Categories() {
    // ref for the section
    const sectionRef = useRef();
    const centerLineRef = useRef(); 
    let scrolledY = -999999;
    let lineBottom = -999999;
    function CategoryItemLeft({text, width}) {
        const controls = useAnimation();
        const { ref, inView } = useInView({ threshold: 1 });
        const reference = useRef<HTMLDivElement | null>(null);
        useEffect(() => {

            const handleScroll = () => {
                // get the absolute position of the element
                if (reference.current) {
                    const rect = reference.current.getBoundingClientRect();
                    const position = rect.bottom;
                    if (position < lineBottom) {
                        controls.start({ opacity: 1}, { duration: 0.4 });
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [lineBottom]); // re-run the effect when the lineBottom changes

        return(
            <motion.div 
                className="relative flex items-center z-[20]"
                ref={reference} // attach the ref to the element
                initial={{ opacity: 0}}
                animate={controls}
            >
                <h1 className="text-[3rem] text-primary bg-secondary px-6 py-4 rounded-[2rem] cursor-pointer hover:bg-accent duration-200">{text}</h1>
                <div style={{ width: width }} className="h-[.8rem] bg-secondary right-[-16rem] top-[50%]"></div>
            </motion.div>
        )
    }

    function CategoryItemRight({text, width}) {
        const controls = useAnimation();
        const { ref, inView } = useInView({ threshold: 1 });
        const reference = useRef<HTMLDivElement | null>(null);
        useEffect(() => {

            const handleScroll = () => {
                // get the absolute position of the element
                if (reference.current) {
                    const rect = reference.current.getBoundingClientRect();
                    const position = rect.bottom;
                    if (position < lineBottom) {
                        controls.start({ opacity: 1}, { duration: 0.4 });
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [lineBottom]); // re-run the effect when the lineBottom changes

        return(
            <motion.div 
                className="relative flex items-center flex-row-reverse z-[20]"
                ref={reference}
                initial={{ opacity: 0}}
                animate={controls}
            >
                <h1 className="text-[3rem] text-primary bg-secondary px-6 py-4 rounded-[2rem] cursor-pointer hover:bg-accent duration-200">{text}</h1>
                <div style={{ width: width }} className="h-[.8rem] bg-secondary left-[-13.5rem] top-[50%]"></div>
            </motion.div>
        )
    }
    
    useEffect(() => {
        window.addEventListener('scroll', function() {
            var scrolled = window.scrollY;
            // get the height of the section in pixels
            if (sectionRef.current) {
                let scrollHeight = (sectionRef.current as HTMLDivElement).scrollHeight;
                scrolled -= scrollHeight + 200;
            }
            // if the scrolled value is greater than the last value
            if (scrolled > scrolledY) {
                scrolledY = scrolled;
            }
            // make sure the center line does not go past the bottom of its parent
            if (scrolledY > 0) {
                scrolledY = 0;
            }
            if (centerLineRef.current) {
                (centerLineRef.current as HTMLDivElement).style.transform = `translateY(${scrolledY}px)`;
            }
            if (centerLineRef.current) {
                const centerLine = centerLineRef.current as HTMLDivElement;
                centerLine.style.transform = `translateY(${scrolledY}px)`;
            
                const rect = centerLine.getBoundingClientRect();
                const centerLineBottomPosition = rect.bottom;
                lineBottom = centerLineBottomPosition;
            }
            // hide the part of the line that is outside of its parent
        });
    });

    return(
        <section className="bg-primary text-dark px-[2rem] relative overflow-hidden" id="categoriesSection" ref={sectionRef}>
            <div className="flex justify-center">
                <div className="w-[.8rem] bg-secondary absolute top-0 bottom-0 m-auto mx-0" ref={centerLineRef}></div>
            </div>


            <div className="flex justify-center items-center mt-[2rem] mb-14 gap-0 z-[20] tablet-s:flex-wrap tablet-s:gap-[4rem] tablet-s:mt-[2rem]">
                <div className="flex flex-col gap-y-[5rem]">
                    <CategoryItemLeft text="KITCHENS" width="18.2rem"></CategoryItemLeft>
                    <CategoryItemLeft text="OUTDOOR" width="17.5rem"></CategoryItemLeft>
                    <CategoryItemLeft text="CLOSETS" width="20rem"></CategoryItemLeft>
                    <CategoryItemLeft text="ADDITIONS" width="16.4rem"></CategoryItemLeft>
                </div>

                <div className="flex flex-col gap-y-[5rem]">
                    <CategoryItemRight text="BATHROOMS" width="14rem"></CategoryItemRight>
                    <CategoryItemRight text="FIREPLACES" width="16rem"></CategoryItemRight>
                    <CategoryItemRight text="NEW HOMES" width="15rem"></CategoryItemRight>
                </div>
            </div>

            {/* <div className="flex justify-center items-end gap-6 z-[20]">
                <h1 className="tracking-wide pr-4">TRANSFORMING YOUR</h1>
                <img src="images/houses.png" className="w-[70px] pb-1"></img>
                <h1 className="tracking-wide">INTO A NEW HOME</h1>
            </div> */}

            <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-40 z-0 pointer-events-none"></img>
        </section>
    )
}
