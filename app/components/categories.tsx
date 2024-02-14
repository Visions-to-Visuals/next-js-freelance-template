export default function Categories() {

    function CategoryItem( {name, image} ) {
        return(
            <div className="flex flex-col">
                <div className="w-[16rem] aspect-[2/3] bg-secondary rounded-3xl
                hover:scale-[1.05] hover:bg-accent duration-300 cursor-pointer laptop-s:w-[14rem]">
                    <img src={image} className="rounded-3xl w-[16em] aspect-[2/3] object-cover laptop-s:w-[14rem]"></img>
                </div>
                <p className="text-center mt-5 font-[500] font-[Outfit]
                 text-secondary text-[1.3rem]">{name}</p>
            </div>
        )
    }

    return(
        <section className="bg-primary py-14 tablet-s:px-[2rem]">
            <h1 className="font-[700] font-[Outfit] text-secondary text-center 
            text-[3rem] tracking-wide"
            >Insert the Different Categories of the Company
            </h1>
            <div className="flex justify-center items-center mt-[4rem] gap-14 mb-10 laptop-s:flex-wrap">
                <CategoryItem name="Category Name 1" image={"/images/category1.jpg"}></CategoryItem>
                <CategoryItem name="Category Name 2" image={"/images/category2.jpg"}></CategoryItem>
                <CategoryItem name="Category Name 3" image={"/images/category3.jpg"}></CategoryItem>
                <CategoryItem name="Category Name 4" image={"/images/category4.jpg"}></CategoryItem>
            </div>
        </section>
    )
}