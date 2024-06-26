import React, { useContext } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavBarContext } from '../../context/NavBarContext';

const NavBarBurger = () => {
    const { setOpen, isOverlay } = useContext(NavBarContext);

    return (
        <button
            type="button"
            className={`grid grid-rows-1 grid-flow-col gap-3 justify-center relative rounded-md items-center ${
                isOverlay ? 'text-white' : 'text-black'
            }`}
            onClick={() => setOpen(true)}
        >
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            <span className="flex hidden xs:hidden sm:flex md:flex lg:flex xl:flex 2xl:flex uppercase text-sm">Menú</span>
        </button>
    );
}

export default NavBarBurger;
