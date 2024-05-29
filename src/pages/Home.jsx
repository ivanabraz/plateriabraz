import React from 'react';
import Hero from '../components/Hero/Hero';

const Home = () => {
    const heroImg = `${process.env.PUBLIC_URL}/images/home/header.jpg`;

    return (
        <>
            <Hero video={false} header={heroImg} title={`Nuestros productos`} button1={'Destacados'} button2={'Ver todo'}/>
        </>
    );
}

export default Home;