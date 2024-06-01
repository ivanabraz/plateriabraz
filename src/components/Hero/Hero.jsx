import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Hero = (props) => {
    const { title, subtitle, button1, button1link, button2, button2link, video, header, headerVideo, titleClass, heightClass = "h-screen" } = props;

    return (
        <div className={`overflow-x-hidden relative flex flex-col justify-center items-center w-full ${heightClass} bg-no-repeat bg-cover bg-center text-white text-center`}>
            {/* Título */}
            <motion.p 
                key={uuidv4()}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${titleClass !== undefined ? titleClass : "text-6xl xs:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem]"} px-20 xs:px-0 sm:px-20 md:px-20 uppercase font-serif leading-none`}
            >
                {title}
            </motion.p>

            {/* Subtítulo */}
            {subtitle !== undefined && (
                <motion.p
                    key={uuidv4()}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-md xs:text-sm sm:text-sm md:text-lg lg:text-lg py-5 font-body"
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Botones */}
            <motion.div
                key={uuidv4()}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="grid grid-rows-1 grid-flow-col gap-4 justify-center"
            >
                {button1 !== undefined && (
                    <Link to={button1link} className="w-fit text-base uppercase border bg-white text-neutral-700 border-white px-6 py-3 mt-10">
                        {button1}
                    </Link>
                )}
                {button2 !== undefined && (
                    <Link to={button2link} className="w-fit text-base uppercase border border-white px-6 py-3 mt-10">
                        {button2}
                    </Link>
                )}
            </motion.div>

            {/* Imagen/Video */}
            {video ? (
                <video playsInline autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    <source src={headerVideo} type="video/mp4"/>
                </video>
            ) : (
                <img src={header} alt={title} className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            )}
        </div>
    );
};

export default Hero;
