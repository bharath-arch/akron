import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function MobileNav() {
    const [activeLink, setActiveLink] = useState(null);

    const { pathname } = useLocation();
    console.log(pathname.split('/')[2])
    const handleLinkClick = (item) => {
        setActiveLink(item);
    };

    

    return (

        <ul className=" absolute flex flex-col items-center text-[12px]  border top-12  right-5 font-semibold  bg-white md:hidden">

            {["explore", "id", "wealth", "square", "portfolio" ].map((item) => (
                <li
                    key={item}
                    onClick={() => handleLinkClick(item)}
                    className={`p-2 ${pathname.split('/')[2] === item ? 'text-blue-900' : ''}`}
                >
                    <Link to={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                </li>
            ))}
        </ul>
    );
}

export default MobileNav;
