import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="w-auto h-auto text-3xl xs:text-xl md:text-3xl font-serif text-white text-center uppercase tracking-[2px]">
            PLATERÍA BRAZ
        </Link>
    )
}

export default Logo;