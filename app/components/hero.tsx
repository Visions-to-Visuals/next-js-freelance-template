export default function HeroSection() {
    return (
    <>
        <div className="flex flex-row justify-center items-top gap-[5rem] mt-14 
        tablet-s:flex-col tablet-s:items-center tablet-s:mt-2 tablet-s:px-[2rem] tablet-s:gap-[3rem]">
            <div className="w-[42rem] max-w-[45rem] tabelt-s:max-w-[100%] font-[Outfit] text-primary 
            tablet-s:justify-center tablet-s:text-center tablet-s:w-[100%]">
                <h1 className="text-[7rem] leading-[7rem] font-[700] 
                tablet-s:w-[100%] tablet-s:text-[8.4vw] tablet-s:leading-[12vw]">
                    Name of the Company
                </h1>
                <p className="text-[1.5rem] font-[500] mt-[4rem] pr-6 pl-2
                tablet-s:text-[1rem] tablet-s:mt-[2vw] tablet-s:px-[4vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna ut aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris aliquip commodo consequat.
                </p>
            </div>
            <img className="h-[30rem] rounded-3xl
            tablet-s:hidden" 
            src="images/photo.jpg"></img>

            <img className="rounded-3xl hidden
            tablet-s:w-[90%] tablet-s:inline-block" 
            src="images/mobilephoto.jpg"></img>
        </div>

        <div className="flex justify-center items-center mt-10 pb-[7rem]">
            <button className="font-[Outfit] font-[600] text-primary flex text-[1.5rem] 
            px-8 py-2 bg-secondary rounded-[15px] hover:bg-accent hover:text-secondary 
            duration-200 ease-in
            tablet-s:text-[1.2rem] tablet-s:px-10 tablet-s:mt-4"
            >Explore the Galaxy</button>
        </div>
    </>
    )
}