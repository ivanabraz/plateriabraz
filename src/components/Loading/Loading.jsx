import React from "react";

const Loading = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center space-x-1 text-sm text-neutral-500">
            <p className="text-2xl font-serif text-neutral-500 uppercase tracking-[2px]">
                PLATERÍA BRAZ
            </p>
            <p className="mt-5">
                Cargando ...
            </p>
        </div>
    )
}

export default Loading;