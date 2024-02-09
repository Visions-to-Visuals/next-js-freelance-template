export default function Navbar() {
    
    function NavItem( {text} ) {
        return (
            <li className="px-2 cursor-pointer text-[1rem] font-[700] font-[Outfit]
            duration-300 hover:text-accent">{text}</li>
        )
    }

    return(
        <>
        <nav className="h-[100px] flex justify-between items-center px-8">
            <img className="h-[50px] cursor-pointer" src="favicon.ico"></img>
            <ul className="flex flex-row items-center justify-center px-4 gap-x-8 text-primary">
                <NavItem text="Home"></NavItem>
                <NavItem text="Projects"></NavItem>
                <NavItem text="About"></NavItem>
                <NavItem text="Contact"></NavItem>
            </ul>
        </nav>
        </>
    )
}