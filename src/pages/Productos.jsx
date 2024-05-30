import React from 'react';
import Hero from '../components/Hero/Hero';
import ItemListContainer from '../components/ItemList/ItemListContainer';

const Productos = () => {
    const heroImg = `${process.env.PUBLIC_URL}/images/home/header.jpg`;

    return (
        <>
            <Hero 
                video={false} 
                header={heroImg}
                title={`Catálogo`}
            />
            <ItemListContainer/>
        </>
    );
}

export default Productos;