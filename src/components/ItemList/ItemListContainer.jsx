import React from "react";
import { useState } from 'react'
import ItemGrid from './ItemGrid'
import productos from '../../data/products.json';
import ItemFilterDesktop from './ItemFilterDesktop'
import ItemSorting from './ItemSorting'
import ItemFilterMobile from './ItemFilterMobile'

const materialSet = new Set();
productos.forEach(category => {
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

const categoryOptions = productos.map(producto => ({
    value: producto.category,
    label: producto.category.charAt(0).toUpperCase() + producto.category.slice(1), // Convertir la primera letra a mayúscula
    checked: false
}));


const sortOptions = [
    { name: 'Alfabético A-Z', href: '#', current: false },
    { name: 'Alfabético Z-A', href: '#', current: false },
    { name: 'Precio: Bajo a alto', href: '#', current: false },
    { name: 'Precio: Alto a bajo', href: '#', current: false },
];

const filters = [
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
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


export default function ItemListContainer() {
const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

return (
    <>
        {/* Mobile filter dialog */}
        <ItemFilterMobile filters={filters} setMobileFiltersOpen={setMobileFiltersOpen} mobileFiltersOpen={mobileFiltersOpen} />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-serif text-gray-900">
                    Productos
                </h1>
                <ItemSorting filters={filters} sortOptions={sortOptions} />
            </div>
                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* Filters desktop */}
                        <ItemFilterDesktop filters={filters}/>
                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <ItemGrid/>
                        </div>
                    </div>
                </section>
        </main>
        </>
)
}
