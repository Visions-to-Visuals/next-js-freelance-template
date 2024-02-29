import { useState, useEffect, useRef } from 'react';
import experienceData from './experience-data';

export default function Experience() {

    function ExperienceItem({ text, year, image }) {
        return (
            <div className='flex justify-center mx-auto gap-[5rem] sticky top-[5rem] z-10 tablet-s:flex-col tablet-s:items-center tablet-s:top-[8rem] tablet-s:z-auto'>
                <img src={image} className='w-[30rem] rounded-[2rem] tablet-s:w-[10rem] tablet-s:h-[8rem] tablet-s:hidden'></img>
                <img src="images/circle.png" className='w-[5rem] h-[5rem] rounded-[2rem] tablet-s:z-[10]'></img>
                <div className='flex-col w-[30rem] text-primary bg-accent px-[2rem] py-[1rem] rounded-[2rem] tablet-s:w-[28rem] mobile:w-[90%] laptop-s:z-[20]'>
                    <h2 className='text-[3rem] font-[600] tracking-widest tablet-s:text-center'>{year}</h2>
                    <p className='text-[1.2rem] tablet-s:text-[1rem] tablet-s:text-center tablet-s:mb-4'>{text}</p>
                </div>
            </div>
        )
    }

    return (
        <section className="px-[2rem] mobile:px-[1rem] relative">
            <h1 className="text-primary tracking-wide mb-[5rem]">INTRODUCING OVER 50 YEARS OF EXPERIENCE</h1>
            <div className="flex justify-center">
                <div className="w-[.8rem] bg-primary absolute top-[15rem] bottom-0 m-auto mx-0 tablet-s:top-[17rem]"></div>
            </div>
            <div className='flex flex-col gap-[30rem] mb-[20rem] laptop-s:mb-[10rem]'>
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
