"use client"
import { useState, useEffect } from 'react';

export default function Cover() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <div className="fixed flex flex-col h-screen z-[50]">
                <div className="fixed top-0 w-full h-[50vh] bg-secondary z-[50] animate-topCover"></div>
                <div className="fixed bottom-0 w-full h-[50vh] bg-secondary z-[50] animate-bottomCover"></div>
            </div>

            {isVisible && (
                <div className="fixed flex items-center justify-center z-[100] gap-[5rem] top-[16rem] w-[100%] mx-auto tablet-s:top-[12rem]">
                    <h1 className="text-primary text-[8rem] leading-[10rem] tracking-wide animate-welcome opacity-0 tablet-s:text-[10vw]">Welcome to</h1>
                    {/* <h1 className="text-primary text-[8rem] leading-[10rem] tracking-wide animate-welcome opacity-0">to</h1> */}
                </div>
            )}
        </>
    );
}