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
                    button1link={'/frenos'}
                    titleClass={`text-[7rem] xs:text-[5rem] lg:text-[7rem] xl:text-[7rem]`}
                />
            </div>
            <div className="w-full md:w-1/2 h-full">
                <Hero 
                    video={false} 
                    header={hero03}
                    title={`Espuelas`}
                    subtitle={`Hierro e inoxidable`}
                    button1={'Explorar ahora'}
                    button1link={'/espuelas'}
                    titleClass={`text-[7rem] xs:text-[5rem] lg:text-[7rem] xl:text-[7rem]`}
                />
            </div>
        </div>
    );
};

export default HeroTwoCol;
