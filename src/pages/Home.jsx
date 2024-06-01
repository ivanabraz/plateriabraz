// Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import HeroTwoCol from '../components/Hero/HeroTwoCol';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import { useLocation } from "react-router-dom";

const Home = () => {
    const heroImg = `${process.env.PUBLIC_URL}/images/home/header.jpg`;
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <Hero 
                video={false} 
                header={heroImg}
                title={`Nuestros productos`}
                subtitle={`Fabricamos rastras, espuelas, estribos, yuntas, hebillas y frenos`}
                button1={'Destacados'}
                button1link={'/#featuredproducts'}
                button2={'Ver todo'}
                button2link={'/productos'}
            />
            <HeroTwoCol/>
            <FeaturedProducts/>
        </>
    );
}

export default Home;
