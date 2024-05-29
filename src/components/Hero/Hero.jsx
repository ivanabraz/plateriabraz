import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Hero = (props) => {

    return (
        <div className="flex flex-col justify-center w-full h-[100vh] bg-no-repeat bg-cover bg-center text-white text-center">
            {/* Título */}
            <motion.p 
                key={uuidv4()}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${props.titleClass !== undefined ? props.titleClass : "text-[9rem] xs:text-[4rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem]"} px-20 xs:px-0 sm:px-20 md:px-20 uppercase font-serif leading-none`}
            >
                {props.title}
            </motion.p>

            {/* Subtítulo */}
            {props.subtitle !== undefined && (
                <motion.p
                    key={uuidv4()}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-lg 
                    py-5 px-20
                    font-body"
                >
                    {props.subtitle}
                </motion.p>
            )}

            {/* Botones */}
            <motion.div
                key={uuidv4()}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="grid grid-rows-1 grid-flow-col gap-4 justify-center">
                {props.button1 !== undefined && (
                    <button className="w-fit text-base uppercase border bg-white text-neutral-700 border-white px-6 py-3 mt-10">
                        {props.button1}
                    </button>
                )}
                {props.button2 !== undefined && (
                    <button className="w-fit text-base uppercase border border-white px-6 py-3 mt-10">
                        {props.button2}
                    </button>
                )}
            </motion.div>

            {/* Imagen/Video */}
            {(props?.video === true
                ?   <video playsInline autoPlay muted loop className="absolute top-0 left-0 w-screen h-[100vh] object-cover -z-100">
                        <source src={props.headerVideo} type="video/mp4"/>
                    </video>
                :   <img src={props.header} alt={props.title} className="absolute -z-10 h-full w-full object-cover object-center" />
            )}
        </div>
    )
}

export default Hero;
