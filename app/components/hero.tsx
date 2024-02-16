export default function HeroSection() {
    return (
    <div className="min-h-screen">
        <div className="flex flex-row justify-center items-center gap-[6rem]
        tablet-s:flex-col tablet-s:items-center tablet-s:px-[2rem] tablet-s:gap-[3rem]
        mobile:mt-6 mobile:px-[1rem]">
            <div className="w-[42rem] max-w-[45rem] tabelt-s:max-w-[100%] text-primary 
            tablet-s:justify-center tablet-s:text-center tablet-s:w-[100%]">
                <h1 className="text-[7rem] leading-[7rem] font-[700]
                tablet-s:w-[100%] tablet-s:text-[4rem] tablet-s:leading-[4rem] mobile:text-[4rem] mobile:leading-[4.5rem]">
                    <span className="text-[8.2rem]">Schoolland</span> Construction
                </h1>
                <p className="text-[1.5rem] font-[500] mt-[3rem] pr-6 pl-4
                tablet-s:text-[1.1rem] tablet-s:mt-[2rem] tablet-s:px-[4vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna ut aliqua. Ut enim ad minim veniam, 
                quis nostrud.
                </p>
            </div>
            <img className="h-[28rem]
            tablet-s:hidden" 
            src="images/timothy.png"></img>

            <img className="hidden
            tablet-s:w-[90%] tablet-s:inline-block" 
            src="images/mobilephoto.jpg"></img>
        </div>

        <div className="flex justify-center items-center mt-[6rem] pb-[7rem]">
            <button className="font-[600] text-dark flex text-[1.5rem] 
            px-8 py-2 bg-primary rounded-[15px] hover:bg-accent hover:text-primary
            duration-200 ease-in
            tablet-s:text-[1.2rem] tablet-s:px-10 tablet-s:mt-4 mobile:mt-8 mobile:text-[1.4rem]"
            >WHAT WE OFFER</button>
        </div>
    </div>
    )
}