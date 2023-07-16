import React from 'react';
import BoardImage from "@/public/board.png"
import Image from "next/image";
function SurfboardComponent() {
    return (
        <section className="h-fit flex flex-wrap w-full ">
            <div className="w-full flex flex-wrap justify-center content-start">
                <sub className="uppercase font-bold text-blue-400 font-mono mt-2 tracking-[0.5em]">shop</sub>
                <h3 className="w-full flex justify-center mt-5 text-5xl">Surfboards</h3>
            </div>
            <section className="w-full flex h-[500px] flex-wrap">
                <article className="w-1/3 h-full border-x border-gray-100 flex items-end justify-start  flex-wrap">
                    <figure className="w-2/3  relative h-4/6 ms-10 bg-gray-200">
                        <Image className="absolute bottom-0" src={BoardImage} alt={"board"}/>
                        <div className="absolute left-56 flex flex-wrap top-1/2  whitespace-nowrap ">
                            <sub className="font-mono w-full flex uppercase text-gray-400">Funboards</sub>
                            <h4 className="w-full text-2xl mt-3 capitalize">Chilli Rare Bird</h4>
                            <div className="w-full flex justify-center flex-wrap">
                                <code className="text-pink-700 w-full text-center mt-3">$890</code>
                                <sub className="font-mono  w-full text-center mt-3  uppercase text-black">Buy</sub>
                            </div>
                        </div>
                    </figure>
                </article>
                <article className="w-1/3 h-full border-x border-gray-100 flex items-end justify-start  flex-wrap">
                    <figure className="w-2/3  relative h-4/6 ms-10 bg-gray-200">
                        <Image className="absolute bottom-0" src={BoardImage} alt={"board"}/>
                        <div className="absolute left-56 flex flex-wrap top-1/2  whitespace-nowrap ">
                            <sub className="font-mono w-full flex uppercase text-gray-400">Funboards</sub>
                            <h4 className="w-full text-2xl mt-3 capitalize">Chilli Rare Bird</h4>
                            <div className="w-full flex justify-center flex-wrap">
                                <code className="text-pink-700 w-full text-center mt-3">$890</code>
                                <sub className="font-mono  w-full text-center mt-3  uppercase text-black">Buy</sub>
                            </div>
                        </div>
                    </figure>
                </article>
                <article className="w-1/3 h-full border-x border-gray-100 flex items-end justify-start  flex-wrap">
                    <figure className="w-2/3  relative h-4/6 ms-10 bg-gray-200">
                        <Image className="absolute bottom-0" src={BoardImage} alt={"board"}/>
                        <div className="absolute left-56 flex flex-wrap top-1/2  whitespace-nowrap ">
                            <sub className="font-mono w-full flex uppercase text-gray-400">Funboards</sub>
                            <h4 className="w-full text-2xl mt-3 capitalize">Chilli Rare Bird</h4>
                            <div className="w-full flex justify-center flex-wrap">
                                <code className="text-pink-700 w-full text-center mt-3">$890</code>
                                <sub className="font-mono  w-full text-center mt-3  uppercase text-black">Buy</sub>
                            </div>
                        </div>
                    </figure>
                </article>
            </section>
            <div className="w-full flex justify-center py-20">
                <sub className="uppercase tracking-[0.5em] font-bold mt-10  flex h-4 border-b  border-blue-400">Show All</sub>
            </div>
        </section>
    );
}

export default SurfboardComponent;