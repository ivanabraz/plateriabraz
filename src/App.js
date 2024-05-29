import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBarProvider } from './context/NavBarContext';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/Loading/Loading';

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
            <Loading/>
        ) : (
            <>
                <NavBar />
                <Routes>
                    <Route path={`/`} exact element={ <Home /> }/>
                </Routes>
            </>
        )}
    </NavBarProvider>
);
}

export default App;
