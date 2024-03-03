"use client"
import React, { useRef } from 'react';
import categories from "./gallery-data";

export default function Gallery() {

    const categoryRefs = categories.map(() => useRef<HTMLDivElement | null>(null));

    function Category({ text, index }: { text: string; index: number }) {
        const handleClick = () => {
            const element = categoryRefs[index]?.current;
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - 40, 
                    behavior: 'smooth',
                });
            }
        };

        return (
            <p className="category py-2 cursor-pointer" onClick={handleClick}>{text}</p>
        );
    }

    function Image({ image }: { image: string }) {
        return (
            <img src={image} className="w-[27rem] rounded-xl" alt="Gallery Image" />
        );
    }

    function CategorySection({ category, index }: { category: { text: string; images: string[] }; index: number }) {
        const { text, images } = category;
        return (
            <div key={text} ref={categoryRefs[index]}>
                <h2 className="text-primary text-[2.5rem] font-[600] bg-accent rounded-3xl w-[57rem] px-6 py-2 uppercase">{text}</h2>
                <div className="flex flex-wrap w-[57rem] gap-x-[2rem] gap-y-[2rem] mt-[2rem] justify-center mb-[8rem]">
                    {images.map((image, index) => (
                        <Image key={index} image={image} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section className="flex justify-center gap-[6rem] animate-faq opacity-0">
            <div className="text-primary text-[1.5rem] font-[500] flex flex-col gap-y-[2rem] h-fit sticky top-[3rem]">
                {categories.map((category, index) => (
                    <Category key={index} text={category.text} index={index} />
                ))}
            </div>

            <div className="flex flex-col">
                {categories.map((category, index) => (
                    <CategorySection key={index} category={category} index={index} />
                ))}
            </div>
        </section>
    );
}
