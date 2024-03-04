"use client"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import faqData from "./faq-data";

export default function Faq() {

    const [showAnswer, setShowAnswer] = useState<{ [key: string]: boolean }>({});

    const toggleAnswer = (index: number) => {
        setShowAnswer(prevState => {
            const newState = { ...prevState };
            newState[index] = !newState[index];
            return newState; 
        });
    };

    function Container( { index, question, answer } ) {
        const controls = useAnimation();
 
        const handleClick = () => {
            toggleAnswer(index);
        };

        return(
            <div className="w-[70%] mx-auto bg-primary rounded-3xl px-10 py-[2rem]">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <p className="text-dark font-[600] text-[1.3rem] text-center select-none">{question}</p>
                    <motion.div animate={controls}>
                        <FontAwesomeIcon icon={faHouse} className="w-[2.3rem] h-[2.3rem] mb-1 select-none text-accent"></FontAwesomeIcon>
                    </motion.div>
                </div>

                {showAnswer[index] && (
                    <p className="bg-white mt-[2rem] mb-[.5rem] text-[1.1rem] text-dark ease-in-out duration-300 cursor-text">{answer}</p>
                )}
            </div>
        )
    }

    console.log(faqData)

    const renderContainers = () => {
        return faqData.map((item, index) => (
            <Container key={index} index={index} question={item.question} answer={item.answer} />
        ));
    };

    return (
        <section className="flex flex-col gap-y-[3rem]">
            {renderContainers()}
        </section>
    );
}