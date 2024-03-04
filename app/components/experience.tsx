"use client"
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Experience() { 

    function BenefitsItem( {text} ) {
        return(
        <div className='flex gap-5 items-start hover:bg-secondary duration-200 p-5 rounded-3xl 
        tablet-s:p-4 tablet-s:gap-3'>
            <FontAwesomeIcon icon={faCheck} className="text-primary w-[1.2rem] pt-1 min-w-[1.2rem]"/>
            <p className="font-[500] font-[Outfit] bg-transparent
            text-primary text-[1.3rem] tablet-s:text-[1.1rem]">{text}</p>
        </div>
        )
    }

    return(
        <section className="tablet-s:px-[2rem] mobile:px-[1rem] h-screen overflow-y-auto relative">
            <h1 className="text-primary tracking-wide" >INTRODUCING OVER 50 YEARS OF EXPERIENCE</h1>



            <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[0] pointer-events-none" />
        </section>
    )
}