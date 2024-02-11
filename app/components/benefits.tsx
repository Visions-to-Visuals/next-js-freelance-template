import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Benefits() { 

    function BenefitsItem( {text} ) {
        return(
        <div className='flex gap-5 items-start hover:bg-secondary duration-200 p-5 rounded-3xl'>
            <FontAwesomeIcon icon={faCheck} className="text-primary w-[1.2rem] pt-1 min-w-[1.2rem]"/>
            <p className="font-[500] font-[Outfit] bg-transparent
            text-primary text-[1.3rem]">{text}</p>
        </div>
        )
    }

    return(
        <section className="bg-background py-14">
            <h1 className="font-[700] font-[Outfit] text-primary text-center 
            text-[3rem] tracking-wide"
            >Insert the Different Benefits of the Company
            </h1>

            <div className="flex justify-center items-center mt-14 mb-10 gap-24">
                <div className="flex flex-col justify-center items-start gap-5 w-[40rem]">
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 1. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 2. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 3. Insert another sentence about the benefit."></BenefitsItem>
                    <BenefitsItem 
                    text="Insert a sentence from the company about Benefit Number 4. Insert another sentence about the benefit."></BenefitsItem>
                </div>

                <img src="/images/benefits.webp" className="w-[30rem]"></img>
            </div>
        </section>
    )
}