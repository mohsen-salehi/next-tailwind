import React from 'react';
import Image from "next/image";
import LogoPng from "@/public/next.svg"
function Header() {
    return (
        <header className="w-full relative flex items-center justify-between  h-[130px]">
            <Image className="rotate-90" width={38} height={108} src={LogoPng}  alt="logo"/>
            <nav className="w-10/12 h-full flex">
                <ul className="w-[450px] p-2  h-full flex flex-wrap">
                    <li className="w-[105px] font-bold border-r h-full flex items-center ps-4 border-gray-100">
                        <sub>STORIES</sub>
                    </li>
                    <li className="w-[105px] font-bold border-r h-full flex items-center ps-4 border-gray-100">
                        <sub>Events</sub>
                    </li>
                    <li className="w-[105px] font-bold border-r h-full flex items-center ps-4 border-gray-100">
                        <sub>Places</sub>
                    </li>
                    <li className="w-[105px] font-bold border-r h-full flex items-center ps-4 border-gray-100">
                        <sub>Boards</sub>
                    </li>
                </ul>
            </nav>
            <sub className="text-gray-400 absolute -right-1/4  -bottom-32 uppercase  tracking-[0.5em] rotate-90 	">First Surfing Magazine</sub>
        </header>
    );
}

export default Header;