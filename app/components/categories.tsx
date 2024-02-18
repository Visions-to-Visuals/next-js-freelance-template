export default function Categories() {

    function CategoryItem({number, text}) {
        return(
            <div>
                <h2 className="text-[5rem] font-[Outfit] font-[600] text-center tablet-s:text-[4rem]">{number}</h2>
                <p className="font-[Outfit] text-[1.3rem] text-center">{text}</p>
            </div>
        )
    }



    return(
    <section className="bg-primary py-14 text-secondary px-[2rem]">
        <h1 className="text-center tracking-wide"
        >Insert the Company's Previous Work and Clients
        </h1>
        <p className="font-[Outfit] w-[58rem] mx-auto text-center mt-10 text-[1.3rem] tablet-s:w-[100%] tablet-s:text-[1.1rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. 
        Augue neque gravida in fermentum et sollicitudin ac orci phasellus. 
        Neque egestas congue quisque egestas sed do eiusmod pretium aenean.
        </p>

        <div className="flex justify-center items-center mt-[3rem] gap-[10rem] mb-10 
        tablet-s:flex-wrap tablet-s:gap-[4rem] tablet-s:mt-[2rem]">
            <CategoryItem number="50+" text="Years of Experience"></CategoryItem>
            <CategoryItem number="250+" text="Projects Completed"></CategoryItem>
            <CategoryItem number="100+" text="Five Star Reviews"></CategoryItem>
        </div>
    </section>
    )
}