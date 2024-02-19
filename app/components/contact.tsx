export default function Contact() {
    return(
        <section className="bg-secondary tablet-s:px-[2rem] mobile:px-[1rem]">
            <h1 className="text-primary text-center tracking-wide"
            >CONTACT US TODAY TO LEARN MORE
            </h1>

            <div className="flex flex-col py-[2rem] px-[4rem] tablet-s:px-[2rem] my-[3rem] rounded-2xl w-[55rem] tablet-s:w-[100%] m-auto 
            gap-8 font-[500] font-[Outfit] text-[1.2rem] text-dark duration-300 tablet-s:text-[1rem]">
                <input type="text" placeholder="Full Name"
                className="rounded-2xl px-4 py-2"></input>
                <input type="email" placeholder="Email"
                className="rounded-2xl px-4 py-2"></input>
                <textarea placeholder="We want to hear more about what you're looking for"
                className="rounded-2xl p-4 h-[15rem]"></textarea>
                <button className="bg-primary rounded-2xl p-3 font-[700] hover:bg-accent hover:text-primary duration-200">SEND MESSAGE</button>
            </div>
        </section>
        
    )
}