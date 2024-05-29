import React, {useContext} from "react";

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

const NavBarOpen = ({ navigation, productions, children }) => {
    const { open, setOpen } = useContext(NavBarContext);

    return (
        <></>
    )
}

export default NavBarOpen;