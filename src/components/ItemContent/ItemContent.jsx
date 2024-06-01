import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import productos from '../../data/products.json';
import { v4 as uuidv4 } from "uuid";

export default function ItemContent() {
    const { category, id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const categoryData = productos.find(cat => cat.category === category);
        if (categoryData) {
            const productData = categoryData.items.find(item => item.id === id);
            if (productData) {
                setProduct(productData);
            }
        }
    }, [category, id]);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const materialColors = {
        "Hierro": "#d4d4d8",
        "Inoxidable": "#d1d5db"
    };

    return (
        <div className="mt-10 pt-6">
            <nav aria-label="Breadcrumb">
                <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li key={uuidv4()}>
                        <div className="flex items-center">
                            <a href="/productos" className="mr-2 text-sm font-medium text-gray-900">
                                Productos
                            </a>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-4 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li key={uuidv4()}>
                        <div className="capitalize flex items-center">
                            <Link to={`/productos?category=${category}`} className="mr-2 text-sm font-medium text-gray-900">
                                {category}
                            </Link>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-4 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li className="text-sm">
                        <Link to={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                            {product.name}
                        </Link>
                    </li>
                </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img
                        src={product.images[0]?.imgUrl}
                        alt={product.images[0]?.imgAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    {product.images?.slice(1, 3).map((image, index) => (
                        <div key={uuidv4()} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img src={image.imgUrl} alt={image.imgAlt} className="h-full w-full object-cover object-center" />
                        </div>
                    ))}
                </div>
                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img
                        src={product.images[3]?.imgUrl}
                        alt={product.images[3]?.imgAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-4xl xs:text-3xl md:text-4xl lg:text-4xl font-serif tracking-tight text-gray-900">{product.name}</h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Información del producto</h2>
                    <p className="text-3xl xs:text-2xl md:text-2xl lg:text-3xl tracking-tight text-gray-900">$ {product.price}</p>

                    <form className="mt-10">
                        {/* Material */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Material</h3>
                            {product.material && ( // Verifica si hay un material definido
                                <fieldset aria-label="Choose a material" className="mt-4">
                                    <div className="flex items-center space-x-3">
                                        <div
                                            key={uuidv4()}
                                            className="relative -m-0.5 flex flex-col items-center justify-center rounded-full p-0.5"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="h-8 w-8 rounded-full border border-black border-opacity-10"
                                                style={{ backgroundColor: materialColors[product.material] }}
                                            />
                                            <span className="text-xs mt-2 text-gray-600">{product.material}</span>
                                        </div>
                                    </div>
                                </fieldset>
                            )}
                        </div>
                    </form>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div className="space-y-6">
                        <p className="text-base text-gray-900">{product.text}</p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

                        <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600">{product.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
