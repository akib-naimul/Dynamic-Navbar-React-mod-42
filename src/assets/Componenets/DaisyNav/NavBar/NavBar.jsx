


import { CircleX, Menu } from 'lucide-react';
import React, { useState } from 'react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const links = navLinks.map(route => <li key={route.id} className='mr-10'><a href={route.path}>{route.name}</a></li>)
    return (

        <nav className='flex justify-between mx-10 mt-6'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <CircleX className='md:hidden' ></CircleX> : <Menu className='mr-4 md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 ${open? 'top-25' : '-top-40'} px-4 hover:border-y-orange-950`}>
                    {links}
                </ul>
                <h3 className='mr-10'>My navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-10'><a href=""></a>Home</li>
                <li className='mr-10'><a href=""></a>About</li>
                <li className='mr-10'><a href=""></a>Blog</li>
                <li className='mr-10'><a href=""></a>Contact</li>
            </ul> */}
            <button>Sign in </button>
            
        </nav>
    );
};

export default NavBar;