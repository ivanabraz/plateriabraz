import React from "react";
import productsData from '../../data/products.json';
import { Link } from "react-router-dom";

const ItemGrid = () => {
    const allProducts = productsData.flatMap(category =>
        category.items.map(item => ({ ...item, category: category.category }))
    );

    return (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
            {allProducts.map((product) => (
                <Link to={`/producto/${product.category}/${product.id}`} key={product.id} className="group relative">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/products/${product.category}/${product.id}.jpg`}
                            alt={product.images[0]?.imgAlt}
                            className="object-cover lg:w-full lg:h-full w-full h-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-neutral-900">
                                {product.name}
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
    );
};

export default ItemGrid;
