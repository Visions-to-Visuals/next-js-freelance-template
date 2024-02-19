export default function Cover() {
    return(

        <>
        {/* <div className="fixed z-[100]">
            <h1 className="fixed top-[16rem] text-primary text-[8rem] text-center leading-[10rem]
            mx-auto tracking-wide animate-company opacity-0">Welcome</h1>
            <h1 className="fixed top-[16rem] text-primary text-[8rem] text-center leading-[10rem]
            tracking-wide animate-company opacity-0">to</h1>
        </div> */}

        <div className="fixed flex items-center justify-center z-[100] gap-[5rem] top-[16rem] left-10 right-10">
                <h1 className="text-primary text-[8rem] text-center leading-[10rem] tracking-wide animate-welcome opacity-0">Welcome</h1>
                <h1 className="text-primary text-[8rem] text-center leading-[10rem] tracking-wide animate-to opacity-0">to</h1>
        </div>

        <div className="fixed flex flex-col h-screen z-[50]">
            <div className="fixed top-0 w-full h-[50vh] bg-secondary 
            z-[50] animate-topCover"></div>
            <div className="fixed bottom-0 w-full h-[50vh] bg-secondary 
            z-[50] animate-bottomCover"></div>
        </div>
        </>
    )
}