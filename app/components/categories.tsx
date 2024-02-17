export default function Categories() {

    function CategoryItem( {name, image} ) {
        return(
            <div className="flex flex-col">
                <div className="w-[16rem] aspect-[2/3] bg-secondary rounded-3xl
                hover:scale-[1.05] hover:bg-accent duration-300 cursor-pointer laptop-s:w-[14rem]">
                    <img src={image} className="rounded-3xl w-[16em] aspect-[2/3] object-cover laptop-s:w-[14rem]"></img>
                </div>
                <p className="text-center mt-5 font-[500] font-[Outfit]
                 text-dark text-[1.3rem] tablet-s:text-[1.1rem]">{name}</p>
            </div>
        )
    }

    return(
        <section className="bg-primary py-14 tablet-s:px-[2rem] mobile:px-[1rem]">
            <h1 className="text-dark text-center 
            tracking-wide mobile:px-[1rem]"
            >MEET THE TEAM BEHIND THE MASTERPIECE
            </h1>
            <div className="flex justify-center items-center mt-[4rem] gap-14 mb-10 
            laptop-s:overflow-x-scroll tablet-s:justify-start laptop-s:gap-10">
                <CategoryItem name="Timothy Schoolland" image={"/images/team3.png"}></CategoryItem>
                <CategoryItem name="Levi Sawyer" image={"/images/team1.png"}></CategoryItem>
                <CategoryItem name="The Other Guy" image={"/images/team2.png"}></CategoryItem>
                <CategoryItem name="King Beeyn" image={"/images/team4.jpg"}></CategoryItem>
            </div>
        </section>
    )
}