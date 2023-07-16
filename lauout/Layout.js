import React from 'react';
import Header from "@/components/Header";
import {Fira_Code} from "next/font/google";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({ subsets: ['latin'] })
function Layout({children}) {
    return (
        <>
            <section className={`w-full flex flex-wrap h-full overflow-x-hidden border-x border-gray-100  ${firaCode}`}>
                <Header/>
                {children}
                <Footer/>
            </section>
        </>

    );
}

export default Layout;