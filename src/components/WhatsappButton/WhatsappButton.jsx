import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsappButton = () => {
    return (
        <>
            <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 lg:bottom-8 lg:right-8 justify-center bg-[#25d366] rounded-full">
                <a href="https://api.whatsapp.com/send?phone=1124093882">
                    <FontAwesomeIcon className="
                    w-10 h-10 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                    p-5 text-white" icon={faWhatsapp} />
                </a>
            </div>
        </>
    )
}

export default WhatsappButton;
