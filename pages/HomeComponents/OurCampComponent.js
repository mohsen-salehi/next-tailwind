import React from 'react';
import CampImage from  "@/public/img (6).png"
import Image from "next/image";
import Link from "next/link";
function OurCampComponent() {
    return (
        <section className="w-full my-20 flex flex-wrap ">
            <figure className="w-1/2 h-full flex items-center border-x border-gray-100">
                <Image src={CampImage} alt='camp' />
            </figure>
            <div className="w-1/2 h-full ps-20 flex flex-wrap content-center">
                <div className="w-full   flex flex-wrap">
                    <span className="uppercase text-gray-500 font-mono  tracking-[0.5em]">Our Camp</span>
                </div>
                <div className="w-full   flex flex-wrap">
                    <h3 className="w-full flex justify-center mt-5 leading-[1.5em]  text-4xl">
                        CA 91932, USA
                        <br/>
                        Imperial Beach
                        <br/>
                        560 Silver Strand Blvd
                    </h3>
                </div>
                <div className="w-full  mt-10    flex flex-wrap">
                    <Link href="/" className="uppercase text-blue-400 border-b border-blue-400 font-mono  tracking-[0.5em]">Get in Touch</Link>
                </div>
            </div>
        </section>
    );
}

export default OurCampComponent;