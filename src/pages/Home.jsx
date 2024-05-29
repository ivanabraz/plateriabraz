import React from 'react';
import Hero from '../components/Hero/Hero';
import HeroTwoCol from '../components/Hero/HeroTwoCol';

const Home = () => {
    const heroImg = `${process.env.PUBLIC_URL}/images/home/header.jpg`;

    return (
        <>
            <Hero 
                video={false} 
                header={heroImg}
                title={`Nuestros productos`}
                subtitle={`Fabricamos rastras, espuelas, estribos, yuntas, hebillas y frenos`}
                button1={'Destacados'}
                button2={'Ver todo'}
            />
            <HeroTwoCol/>
        </>
    );
}

export default Home;