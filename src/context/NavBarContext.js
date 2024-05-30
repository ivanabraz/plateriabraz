import { createContext, useState, useContext } from "react";

// CREATE CONTEXT
export const NavBarContext = createContext();

// HOOK TO USE CONTEXT
export const useNavBar = () => useContext(NavBarContext);

// CREATE PROVIDER COMPONENT
export const NavBarProvider = ({ children }) => {
    // OPEN MENU
    const [open, setOpen] = useState(false);

    // OVERLAY STATE
    const [isOverlay, setIsOverlay] = useState(false);

    // RETURN CONTEXT
    return (
        <NavBarContext.Provider value={{ open, setOpen, isOverlay, setIsOverlay }}>
            {children}
        </NavBarContext.Provider>
    );
};
