import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Benefits() { 

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
        <section className="bg-secondary tablet-s:px-[2rem] mobile:px-[1rem] h-screen overflow-y-auto">
            <h1 className="text-primary text-center tracking-wide"
            >Insert the Multiple Benefits of the Company
            </h1>

            <div className="flex justify-center items-center mt-14 tablet-s:mt-10 mb-10 gap-24 tablet-s:flex-col-reverse tablet-s:gap-6">
                <div className="flex flex-col justify-center items-start gap-5 w-[40rem] tablet-s:w-[100%]">
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 1. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 2. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 3. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 4. Insert another sentence about the benefit."></BenefitsItem>
                </div>

                <img src="/images/benefits.webp" className="w-[30rem] tablet-s:w-[20rem]"></img>
            </div>

            <div className="flex justify-center items-center mt-14 tablet-s:mt-10 mb-10 gap-24 tablet-s:flex-col-reverse tablet-s:gap-6">
                <div className="flex flex-col justify-center items-start gap-5 w-[40rem] tablet-s:w-[100%]">
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 1. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 2. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 3. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 4. Insert another sentence about the benefit."></BenefitsItem>
                </div>

                <img src="/images/benefits.webp" className="w-[30rem] tablet-s:w-[20rem]"></img>
            </div>

            <div className="flex justify-center items-center mt-14 tablet-s:mt-10 mb-10 gap-24 tablet-s:flex-col-reverse tablet-s:gap-6">
                <div className="flex flex-col justify-center items-start gap-5 w-[40rem] tablet-s:w-[100%]">
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 1. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 2. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 3. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 4. Insert another sentence about the benefit."></BenefitsItem>
                </div>

                <img src="/images/benefits.webp" className="w-[30rem] tablet-s:w-[20rem]"></img>
            </div>
        </section>
    )
}