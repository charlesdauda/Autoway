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
        <header className="relative flex items-center px-4 py-6 m-4 h-16 ">
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
                        <a href={link}>{name}</a>
                    </li>  
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;