import React from "react";
import productsData from '../../data/products.json';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FeaturedProducts = () => {
    const featuredProducts = productsData.flatMap(category =>
        category.items
            .filter(item => item.featured)
            .map(item => ({ ...item, category: category.category }))
    );

    const totalProducts = productsData.reduce((acc, category) => {
        return acc + category.items.length;
    }, 0);

    return (
        <div className="w-full h-full pt-24">
            <p className="text-4xl font-serif text-neutral-900 text-center">
                Productos destacados
            </p>
            
            {/* Grid */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {featuredProducts.map((product) => (
                        <Link to={`/producto/${product.category}/${product.id}`} key={uuidv4()} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/products/${product.category}/${product.id}.jpg`}
                                alt={product.images[0]?.imgAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm font-medium text-neutral-900">
                                        <Link to={`/producto/${product.category}/${product.id}`}>
                                            {product.name} 
                                        </Link>
                                    </h3>
                                    <p className="text-xs text-neutral-400">
                                    Código: <span className="uppercase">{product.id}</span>
                                    </p>
                                </div>
                                <p className="text-sm text-neutral-700">
                                    ${product.price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/productos" className="text-center w-fit text-base text-neutral-900 uppercase border border-neutral-900 px-6 py-3 mb-20">
                    Ver todos ({totalProducts})
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;
