import React from "react";
import Logo from "../Logo/Logo";
import NavBarBurger from "./NavBarBurger";


const NavBar = () => {
    return (
        <div 
        className="absolute flex flex-row w-full h-16 mx-auto justify-between z-10 items-center
        py-20 xs:py-10 md:py-20
        px-20 xs:px-5 md:px-20">
            <NavBarBurger/>
            <Logo/>
            <div></div>
        </div>
    );
};

export default NavBar;
