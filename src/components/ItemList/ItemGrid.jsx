import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ItemGrid = ({ productos }) => {
    return (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
            {productos.map((product) => (
                <Link to={`/productos/${product.category}/${product.id}`} key={uuidv4()} className="group relative">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                                src={`${process.env.PUBLIC_URL}/images/products/${product.category.toLowerCase()}/${product.id}.png`}
                                alt={product.name}
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
