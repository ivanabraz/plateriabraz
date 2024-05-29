import React from "react";
import { Link } from "react-router-dom";

const NavBarLogo = (props) => {
    const { customClassName } = props;
    return (
        <div className={`flex w-100 ${customClassName !== null ? customClassName : ''}`}>
            <Link to="/">
                Platería Braz
            </Link>
        </div>
    )
}

export default NavBarLogo;