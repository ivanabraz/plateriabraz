import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBarProvider, useNavBar } from './context/NavBarContext';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/Loading/Loading';
import ItemContent from './components/ItemContent/ItemContent';

import Home from './pages/Home';
import Productos from './pages/Productos';

const HomePage = () => {
    const { setIsOverlay } = useNavBar();

    useEffect(() => {
        setIsOverlay(true);
        return () => setIsOverlay(false);
    }, [setIsOverlay]);

    return <Home />;
};

const ProductosPage = () => {
    const { setIsOverlay } = useNavBar();

    useEffect(() => {
        setIsOverlay(true);
    }, [setIsOverlay]);

    return <Productos />;
};

const ItemContentPage = () => {
    const { setIsOverlay } = useNavBar();

    useEffect(() => {
        setIsOverlay(false);
    }, [setIsOverlay]);

    return <ItemContent />;
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <NavBarProvider>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <NavBar />
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/productos" exact element={<ProductosPage />} />
                        <Route path="/producto/:category/:id" exact element={<ItemContentPage />} />
                    </Routes>
                </>
            )}
        </NavBarProvider>
    );
}

export default App;
