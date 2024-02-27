"use client"
import { useState, useEffect, useRef } from 'react';

export default function Experience() { 

    function ExperienceItem( {text, year, image} ) {
        return(
            <div className='flex justify-center mx-auto gap-[5rem] mb-[35rem] sticky top-[5rem] z-10'>
                <img src={image} className='w-[30rem] rounded-[2rem]'></img>
                <img src="images/circle.png" className='w-[5rem] h-[5rem] rounded-[2rem]'></img>
                <div className='flex-col w-[30rem] text-primary bg-accent px-[2rem] py-[1rem] rounded-[2rem]'>
                    <h2 className='text-[3rem] font-[600] tracking-widest'>{year}</h2>
                    <p className='text-[1.2rem]'>{text}</p>
                </div>
            </div>
        )
    }

    return(
        <section className="px-[2rem] mobile:px-[1rem] relative">
            <h1 className="text-primary tracking-wide mb-[5rem]">INTRODUCING OVER 50 YEARS OF EXPERIENCE</h1>
            <div className="flex justify-center">
                <div className="w-[.8rem] bg-primary absolute top-[15rem] bottom-0 m-auto mx-0"></div>
            </div>
            <ExperienceItem 
            text="Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad do minim veniam, quis SED nostrud exercitation ullamco laboriS. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt si amet." 
            year="1987"
            image="images/experience1.png">
            </ExperienceItem> 

            <ExperienceItem 
            text="Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad do minim veniam, quis SED nostrud exercitation ullamco laboriS. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt si amet." 
            year="2003"
            image="images/experience2.png">
            </ExperienceItem>

            <ExperienceItem 
            text="Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad do minim veniam, quis SED nostrud exercitation ullamco laboriS. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt si amet." 
            year="2019"
            image="images/experience3.png">
            </ExperienceItem>


            <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[0] pointer-events-none" />
        </section>
    )
}

