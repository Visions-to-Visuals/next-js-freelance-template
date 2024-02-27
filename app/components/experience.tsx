import { useState, useEffect, useRef } from 'react';
import experienceData from './experience-data';

export default function Experience() {

    function ExperienceItem({ text, year, image }) {
        return (
            <div className='flex justify-center mx-auto gap-[5rem] sticky top-[5rem] z-10'>
                <img src={image} className='w-[30rem] rounded-[2rem]'></img>
                <img src="images/circle.png" className='w-[5rem] h-[5rem] rounded-[2rem]'></img>
                <div className='flex-col w-[30rem] text-primary bg-accent px-[2rem] py-[1rem] rounded-[2rem]'>
                    <h2 className='text-[3rem] font-[600] tracking-widest'>{year}</h2>
                    <p className='text-[1.2rem]'>{text}</p>
                </div>
            </div>
        )
    }

    return (
        <section className="px-[2rem] mobile:px-[1rem] relative">
            <h1 className="text-primary tracking-wide mb-[5rem]">INTRODUCING OVER 50 YEARS OF EXPERIENCE</h1>
            <div className="flex justify-center">
                <div className="w-[.8rem] bg-primary absolute top-[15rem] bottom-0 m-auto mx-0"></div>
            </div>
            <div className='flex flex-col gap-[30rem] mb-[20rem]'>
                {experienceData.map((item, index) => (
                    <ExperienceItem
                        key={index}
                        text={item.text}
                        year={item.year}
                        image={item.image}
                    />
                ))}
            </div>
            <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[0] pointer-events-none" />
        </section>
    )
}
