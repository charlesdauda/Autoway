import navlogo from '../assets/images/autowaylogo.png';
interface NavList {
    name: string;
    link: string;
}

const NavBar = () => {

    const navList : NavList[] = [
        {name: "Home", link: "home"},
        {name: "About", link: "about"},
        {name: "Shop", link: "shop"}
    ]

    return (
        <header className="relative flex items-center px-4 py-6 m-4 h-16 w-full">
            <div className='h-8 w-20 ml-15'>
                <img 
                src={navlogo}
                alt='autoway-logo'
                loading='lazy'
                />
            </div>
            <nav className="absolute left-1/2 -translate-x-1/2">
                 <ul className="flex space-x-4">
                {navList.map(({name, link}) =>(
                    <li key={link}>
                        <a 
                        className="transition hover:text-blue-800 text-black" 
                        href={link}>{name}</a>
                    </li>  
                ))}
                </ul>
            </nav>
            <div className="flex items-center space-x-2 ml-auto mr-30">
                <a href="#signup" className="px-6 py-2 bg-blue-900 hover:bg-blue-950 transition text-white rounded-md">Sign Up</a>
                <a href="#login" className="px-6 py-2 border text-black hover:bg-blue-900 hover:text-white transition rounded-md">Log In</a>
            </div>
        </header>
    )
}

export default NavBar;