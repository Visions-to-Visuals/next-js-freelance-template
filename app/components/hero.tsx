export default function HeroSection() {
    return (
    <>
        <div className="flex flex-row justify-center items-top gap-[5rem] mt-14">
            <div className="w-[42rem] max-w-[45rem] font-[Outfit] text-primary">
                <h1 className="text-[7rem] leading-[7rem] font-[700]">
                    Name of the Company
                </h1>
                <p className="text-[1.5rem] font-[500] mt-[4rem] pr-6 pl-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna ut aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris aliquip commodo consequat.
                </p>
            </div>
            <img className="h-[30rem] rounded-3xl" src="images/photo.jpg"></img>
        </div>

        <div className="flex justify-center items-center mt-10">
            <button className="font-[Outfit] font-[600] text-primary flex text-[1.5rem] 
            px-8 py-2 bg-secondary rounded-[15px] hover:bg-accent hover:text-secondary 
            duration-200 ease-in">Explore the Galaxy</button>
        </div>
    </>
    )
}