import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBarContext } from '../../context/NavBarContext';

const NavBarLogo = ({ customClassName }) => {
    const { isOverlay } = useContext(NavBarContext);

    return (
        <div className={`uppercase text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl tracking-[2px] font-serif flex w-100 ${customClassName || ''}`}>
            <Link to="/" className={isOverlay ? 'text-white' : 'text-black'}>
                Platería Braz
            </Link>
        </div>
    );
}

export default NavBarLogo;
