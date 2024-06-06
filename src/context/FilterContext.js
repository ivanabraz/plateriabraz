// FilterContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedFilters, setSelectedFilters] = useState({ category: [], material: [] });
    const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateFilters = (newFilters) => setSelectedFilters(newFilters);
    const updateFilteredProducts = (products) => setFilteredAndSortedProducts(products);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://api.example.com/products'); // Cambia la URL según tu API
                if (!res.ok) throw new Error('Failed to fetch products');
                const data = await res.json();
                setProductsData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <FilterContext.Provider value={{
            selectedFilters, updateFilters, filteredAndSortedProducts, updateFilteredProducts,
            productsData, setProductsData, loading, setLoading, error, setError
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error('useFilter debe estar dentro del proveedor de FilterContext');
    }

    return context;
};
