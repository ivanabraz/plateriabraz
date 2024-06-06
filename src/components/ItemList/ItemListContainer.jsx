import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ItemGrid from './ItemGrid';
import ItemFilterDesktop from './ItemFilterDesktop';
import ItemFilterMobile from './ItemFilterMobile';
import ItemSorting from './ItemSorting';

const sortOptions = [
    { name: 'Alfabético A-Z', current: true },
    { name: 'Alfabético Z-A', current: false },
    { name: 'Precio: Bajo a alto', current: false },
    { name: 'Precio: Alto a bajo', current: false },
];

export default function ItemListContainer() {
    const location = useLocation();
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState('Alfabético A-Z');
    const [selectedFilters, setSelectedFilters] = useState({ category: [], material: [] });
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://script.google.com/macros/s/AKfycbyl7cUZH1aavFqzKkQWvKBx08siH0Bmx8kbVNYJkquLDHHyH8pt3e_aNGl7i3_aNWAl/exec');
                const data = await res.json();
                setProductsData(data);

                // Extract filter options
                const materialSet = new Set();
                data.forEach(category => {
                    category.items.forEach(item => {
                        if (item.material) {
                            materialSet.add(item.material);
                        }
                    });
                });
                const materialOptions = Array.from(materialSet).map(material => ({
                    value: material,
                    label: material,
                    checked: false
                }));

                const categoryOptions = data.map(producto => ({
                    value: producto.category,
                    label: producto.category.charAt(0).toUpperCase() + producto.category.slice(1),
                    checked: false
                }));

                setFilters([
                    {
                        id: 'category',
                        name: 'Categoría',
                        options: categoryOptions
                    },
                    {
                        id: 'material',
                        name: 'Material',
                        options: materialOptions
                    }
                ]);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        const filters = Object.fromEntries(urlSearchParams.entries());

        // Convert filters to arrays
        for (const key in filters) {
            filters[key] = filters[key].split(',');
        }

        setSelectedFilters(filters);
    }, [location.search]);

    useEffect(() => {
        if (productsData.length === 0) return;

        const filterProducts = (products, filters) => {
            const allProducts = products.flatMap(category =>
                category.items.map(item => ({ ...item, category: category.category }))
            );

            const filteredProducts = allProducts.filter(item => {
                const categoryFilters = filters.category || [];
                const materialFilters = filters.material || [];
                const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(item.category);
                const materialMatch = materialFilters.length === 0 || materialFilters.includes(item.material);
                return categoryMatch && materialMatch;
            });

            return filteredProducts;
        };

        const sortProducts = (products, sortOption) => {
            switch (sortOption) {
                case 'Alfabético A-Z':
                    return [...products].sort((a, b) => a.name.localeCompare(b.name));
                case 'Alfabético Z-A':
                    return [...products].sort((a, b) => b.name.localeCompare(a.name));
                case 'Precio: Bajo a alto':
                    return [...products].sort((a, b) => a.price - b.price);
                case 'Precio: Alto a bajo':
                    return [...products].sort((a, b) => b.price - a.price);
                default:
                    return products;
            }
        };

        const filteredProducts = filterProducts(productsData, selectedFilters);
        setFilteredAndSortedProducts(sortProducts(filteredProducts, selectedSortOption));
    }, [selectedSortOption, selectedFilters, productsData]);

    if (loading) {
        return <div className="w-full h-full text-center p-20">Cargando productos...</div>;
    }

    if (error) {
        return <div className="w-full h-full text-center p-20">Error al cargar los productos</div>;
    }

    return (
        <>
            <ItemFilterMobile
                filters={filters}
                mobileFiltersOpen={mobileFiltersOpen}
                setMobileFiltersOpen={setMobileFiltersOpen}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
            />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                    <h1 className="text-4xl font-serif text-gray-900">
                        Productos
                    </h1>
                    <ItemSorting
                        sortOptions={sortOptions}
                        selectedSortOption={selectedSortOption}
                        setSelectedSortOption={setSelectedSortOption}
                        setMobileFiltersOpen={setMobileFiltersOpen}
                    />
                </div>
                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <ItemFilterDesktop
                            filters={filters}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                        />
                        <div className="lg:col-span-3">
                            <ItemGrid productos={filteredAndSortedProducts} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
