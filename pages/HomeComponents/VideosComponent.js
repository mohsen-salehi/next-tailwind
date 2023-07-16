import React from 'react';
import BeachImage from "@/public/img (2).png"
import Surfing from "@/public/img (3).png"
import Image from "next/image";
function VideosComponent() {
    return (
        <section className="h-[800px] flex items-end  pt-5  relative w-full">
            <Image className="absolute left-0 top-0" src={BeachImage} alt="beach"/>
            <Image className="absolute right-0 top-10" src={Surfing} alt="beach"/>
            <div className="w-1/2 flex content-start flex-wrap  h-1/2  p-3 ">
                <p className="w-full text-gray-500 leading-8">
                    By better understanding the various aspects of
                    <br/>
                    surfing, you will improve faster and have more fun
                    <br/>
                    in the water.
                </p>
                <sub className="uppercase tracking-[0.5em] font-bold mt-10  flex h-4 border-b  border-blue-400">Read More</sub>
            </div>
        </section>
    );
}

export default VideosComponent;