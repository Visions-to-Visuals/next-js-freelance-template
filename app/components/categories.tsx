export default function Categories() {

    function CategoryItemLeft({text, width}) {
        return(
            <div className="relative flex items-center z-[20]">
                <h1 className="text-[3rem] text-primary bg-secondary px-6 py-4 rounded-[2rem]
                cursor-pointer hover:bg-accent duration-200">{text}</h1>
                <div style={{ width: width }} className="h-[.7rem] bg-secondary right-[-16rem] top-[50%]"></div>
            </div>
        )
    }

    function CategoryItemRight({text, width}) {
        return(
            <div className="relative flex items-center flex-row-reverse z-[20]">
                <h1 className="text-[3rem] text-primary bg-secondary px-6 py-4 rounded-[2rem]
                cursor-pointer hover:bg-accent duration-200">{text}</h1>
                <div style={{ width: width }} className="h-[.7rem] bg-secondary left-[-13.5rem] top-[50%]"></div>
            </div>
        )
    }



    return(
    <section className="bg-primary text-dark px-[2rem] relative min-h-[80vh]">
        <div className="flex justify-center">
            <div className="w-[.7rem] h-screen bg-secondary absolute top-0 bottom-0 m-auto mx-0"></div>
        </div>

        <div className="flex justify-center items-center mt-[2rem] mb-14 gap-0 z-[20]
        tablet-s:flex-wrap tablet-s:gap-[4rem] tablet-s:mt-[2rem]">
            <div className="flex flex-col gap-y-[3rem]">
                <CategoryItemLeft text="KITCHENS" width="18.2rem"></CategoryItemLeft>
                <CategoryItemLeft text="OUTDOOR" width="17.5rem"></CategoryItemLeft>
                <CategoryItemLeft text="CLOSETS" width="20rem"></CategoryItemLeft>
                <CategoryItemLeft text="ADDITIONS" width="16.4rem"></CategoryItemLeft>
            </div>

            <div className="flex flex-col gap-y-[3rem]">
                <CategoryItemRight text="BATHROOMS" width="14rem"></CategoryItemRight>
                <CategoryItemRight text="FIREPLACES" width="16rem"></CategoryItemRight>
                <CategoryItemRight text="NEW HOMES" width="15rem"></CategoryItemRight>
            </div>
        </div>

        <div className="flex justify-center items-end gap-4 z-[20]">
            <h1 className="tracking-wide pr-4">TRANSFORMING YOUR</h1>
            <img src="images/houses.png" className="w-[70px] pb-1 z-[20]"></img>
            <h1 className="tracking-wide">INTO A NEW HOME</h1>
        </div>

        <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-40 z-0 pointer-events-none"></img>
    </section>
    )
}