export default function Navbar() {
    
    function NavItem( {text, page} ) {
        return (
            <a href={page}>
                <li className="px-2 cursor-pointer text-[1rem] font-[700] font-[Outfit]
                duration-300 hover:text-accent">{text}</li>
            </a>
        )
    }

    return(
        <nav className="h-[100px] flex justify-between items-center px-8">
            <img className="h-[50px] cursor-pointer" src="favicon.ico"></img>
            <ul className="flex flex-row items-center justify-center px-4 gap-x-8 text-primary">
                <NavItem text="Home" page=""></NavItem>
                <NavItem text="Projects" page=""></NavItem>
                <NavItem text="FAQ" page=""></NavItem>
                <NavItem text="About" page=""></NavItem>
                <NavItem text="Contact" page=""></NavItem>
            </ul>
        </nav>
    )
}