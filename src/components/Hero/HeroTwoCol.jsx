import React from "react";
import Hero from "./Hero";

const HeroTwoCol = (props) => {
    const hero02 = `${process.env.PUBLIC_URL}/images/home/header-02.jpg`;
    const hero03 = `${process.env.PUBLIC_URL}/images/home/header-03.jpg`;

    return (
        <div className="flex flex-wrap w-full h-full">
            <div className="w-full md:w-1/2 h-full">
                <Hero 
                    video={false} 
                    header={hero02}
                    title={`Frenos`}
                    subtitle={`Hierro e inoxidable`}
                    button1={'Explorar ahora'}
                    button1link={`/productos?category=frenos`}
                    titleClass={`text-6xl xs:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem]`}
                />
            </div>
            <div className="w-full md:w-1/2 h-full">
                <Hero 
                    video={false} 
                    header={hero03}
                    title={`Espuelas`}
                    subtitle={`Hierro e inoxidable`}
                    button1={'Explorar ahora'}
                    button1link={`/productos?category=espuelas`}
                    titleClass={`text-6xl xs:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem]`}
                />
            </div>
        </div>
    );
};

export default HeroTwoCol;
