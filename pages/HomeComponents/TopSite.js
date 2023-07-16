import React from 'react';
import Image from "next/image";
import SliderImage from "@/public/img.png"
function TopSite() {
    return (
        <section className="w-full flex  flex-wrap ">
            <div className="w-2/12 flex content-center flex-wrap">
                <div className="w-full flex flex-wrap">
                    <sub className="uppercase font-bold text-blue-400 font-mono tracking-[0.5em]">Your</sub>
                </div>
                <div className="w-full flex my-10 flex-wrap">
                    <h2 className="w-full whitespace-nowrap z-10 flex font-mono font-light text-6xl">
                        Beautiful Escape
                    </h2>
                </div>
                <div className="w-full flex flex-wrap">
                    <h2 className="w-full whitespace-nowrap z-10 flex font-mono font-light text-gray-500">
                        One of the greatest things about the sport of surfing is
                        <br/>
                        that you need only three things: your body,
                        <br/>
                        a surfboard, and a wave.
                    </h2>
                </div>
            </div>
            <div className="w-10/12 flex justify-center  items-start">
                <Image src={SliderImage} alt={"slider"} className="drop-shadow-2xl"/>
            </div>
        </section>
    );
}

export default TopSite;