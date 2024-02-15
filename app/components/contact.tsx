export default function Contact() {
    return(
        <section className="bg-background py-14 tablet-s:px-[2rem] mobile:px-[1rem]">
            <h1 className="font-[700] font-[Outfit] text-primary text-center tracking-wide"
            >Contact Us Today and Learn More
            </h1>

            <div className="flex flex-col bg-secondary py-[3rem] px-[4rem] tablet-s:px-[2rem] my-[3rem] rounded-2xl w-[60rem] tablet-s:w-[100%] m-auto 
            gap-8 font-[500] font-[Outfit] text-[1.2rem] text-secondary duration-300 tablet-s:text-[1rem]">
                <input type="text" placeholder="Full Name"
                className="rounded-2xl px-4 py-2"></input>
                <input type="email" placeholder="Email"
                className="rounded-2xl px-4 py-2"></input>
                <textarea placeholder="Message"
                className="rounded-2xl p-4 h-[15rem]"></textarea>
                <button className="bg-primary rounded-2xl p-3 font-[700] hover:bg-accent hover:text-primary duration-200">SEND MESSAGE</button>
            </div>
        </section>
        
    )
}