import React from "react";
import NavBarBurger from "./NavBarBurger";
import NavBarLogo from "./NavBarLogo";
import NavBarOpen from "./NavBarOpen";
import { useNavBar } from '../../context/NavBarContext';

const NavBar = () => {
    const { isOverlay } = useNavBar();

    return (
        <div 
            className={`w-full h-16 flex flex-row justify-between items-center z-10 px-5 xs:px-5 sm:xs:px-5 md:px-20 lg:md:px-20 xl:md:px-20 2xl:md:px-20 ${
                isOverlay ? 'absolute top-0 left-0 py-10 md:py-20 text-white' : 'block py-10 md:pt-20 text-black'
            }`}
        >
            <NavBarBurger />
            <NavBarLogo/>
            <NavBarOpen />
        </div>
    );
};

export default NavBar;
