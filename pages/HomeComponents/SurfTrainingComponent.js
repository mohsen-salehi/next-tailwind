import React from 'react';
import Image from "next/image";
import SurfTrainingImage from "@/public/img (4).png"
function SurfTrainingComponent() {
    return (
        <article className="w-full flex flex-wrap  mb-3 h-[450px]">
            <div className="w-1/3 h-full border-x border-gray-100 flex flex-wrap justify-star p-7 content-center">
               <div className="w-fit relative flex items-end ">
                    <span className="text-gray-50 font-bold -z-10 absolute text-9xl ">
                    01
                </span>
                   <h3 className="w-full flex justify-center mt-5  text-5xl">Surfboards</h3>
               </div>
                <p className="w-fit text-gray-300 mt-10">
                    By better understanding the various aspects of
                    <br/>
                    surfing, By better understanding the various
                    <br/>
                    aspects of surfing, you will improve faster and
                    <br/>
                    have more fun in the water.
                </p>
                <sub className="uppercase tracking-[0.5em] font-bold mt-10  flex h-4 border-b  border-blue-400">Read More</sub>
            </div>
            <div className="w-2/3 h-full  flex justify-end ">
                <Image src={SurfTrainingImage} alt="SurfTraining"/>
            </div>
        </article>
    );
}

export default SurfTrainingComponent;