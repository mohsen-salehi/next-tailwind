import React from 'react';
import LogoPng from "@/public/next.svg"
import Image from "next/image";
function Footer() {
    return (
        <footer className="w-full flex flex-wrap justify-center h-[300px]">
           <div className="w-[500px]  flex flex-wrap border-x border-gray-100">
               <div className="w-full flex justify-center ">
                   <Image className="rotate-90" width={38} height={108} src={LogoPng}  alt="logo"/>
               </div>
               <nav className="w-full h-full flex">
                   <ul className="p-2 justify-between w-full h-full flex flex-wrap">
                       <li className="w-1/4 font-bold  h-full flex items-center justify-center border-gray-100">
                           <sub>STORIES</sub>
                       </li>
                       <li className="w-1/4 font-bold  h-full flex items-center justify-center border-gray-100">
                           <sub>Events</sub>
                       </li>
                       <li className="w-1/4 font-bold  h-full flex items-center justify-center border-gray-100">
                           <sub>Places</sub>
                       </li>
                       <li className="w-1/4 font-bold  h-full flex items-center justify-center border-gray-100">
                           <sub>Boards</sub>
                       </li>
                   </ul>
               </nav>
           </div>
        </footer>
    );
}

export default Footer;