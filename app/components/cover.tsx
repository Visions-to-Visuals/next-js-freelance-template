export default function Cover() {
    return(

        <>
        <div className="fixed z-[100]">
            <h1 className="fixed top-[20rem] font-[700] text-primary text-[8rem] text-center leading-[10rem]
            left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wide animate-company opacity-0">Welcome to</h1>
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