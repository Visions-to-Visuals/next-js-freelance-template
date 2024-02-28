"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection({setScrollToCategories}) {

    const scrollToCategories = () => {
        setScrollToCategories(true);
        const categoriesSection = document.getElementById('categoriesSection');
        if (categoriesSection) {
            window.scrollTo({
                top: categoriesSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
    <div className="z-25">
        <div className="flex flex-row justify-center items-center gap-[6rem]
        tablet-s:flex-col tablet-s:items-center tablet-s:px-[2rem] tablet-s:gap-[3rem]
        mobile:mt-6 mobile:px-[1rem]">
            <div className="w-[42rem] max-w-[45rem] tablet-s:max-w-[100%] text-primary 
            tablet-s:justify-center tablet-s:text-center tablet-s:w-[100%]">
                <h1 className="text-[7rem] leading-[7rem]
                tablet-s:w-[100%] tablet-s:text-[4rem] tablet-s:leading-[4rem] mobile:text-[4rem] mobile:leading-[4.5rem]">
                    <span className="text-[8.2rem] tablet-s:text-[15vw] tracking-wide">Schoolland</span> Construction
                </h1>
                <p className="text-[1.5rem] font-[500] mt-[3rem] pr-6 pl-4
                tablet-s:text-[1.1rem] tablet-s:mt-[2rem] tablet-s:px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna ut aliqua. Ut enim ad minim veniam, 
                quis nostrud.
                </p>
            </div>
            
            <img className="h-[28rem]
            tablet-s:hidden" 
            src="images/timothy.png"></img>

            <img className="hidden
            tablet-s:w-[0%] tablet-s:inline-block" 
            src="images/timothy.png"></img>
        </div>

        <div className="flex justify-center items-center mt-[7rem] pb-[7rem] relative">
            <FontAwesomeIcon icon={faCircle}
            className="absolute top-[-9rem] text-primary w-[1rem] h-[1rem] opacity-0 animate-circle3"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} 
            className="absolute top-[-7.5rem] text-primary w-[1.5rem] h-[1.5rem] opacity-0 animate-circle2"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} 
            className="absolute top-[-5.5rem] text-primary w-[2rem] h-[2rem] opacity-0 animate-circle1"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faAngleDown}
            className="absolute top-[-4rem] text-primary w-[3.5rem] h-[3.5rem] opacity-0 animate-arrow"></FontAwesomeIcon>

            <button className="font-[600] text-dark flex text-[1.5rem] 
            px-8 py-2 bg-primary rounded-[15px] hover:bg-accent hover:text-primary
            duration-200 ease-in
            tablet-s:text-[1.2rem] tablet-s:px-10 tablet-s:mt-4 mobile:mt-8 mobile:text-[1.4rem]"
            onClick={scrollToCategories}>WHAT WE OFFER</button>
        </div>
    </div>
    )
}