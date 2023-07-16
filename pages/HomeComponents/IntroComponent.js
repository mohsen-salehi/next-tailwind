import React from 'react';

function IntroComponent() {
    return (
        <section className="w-full h-[500px] flex justify-center items-center">
            <div className="w-[630px] relative h-full content-center flex justify-center flex-wrap border-x border-gray-100 ">
                <p className="w-full text-gray-500 capitalize text-center leading-10 font-mono font-light text-xl">
                    Surfing is the most blissful experience you can have
                    <br/>
                    on this planet, a taste of heaven.
                </p>
                <sub className="w-full mt-5 text-center font-mono uppercase font-bold tracking-[0.5em]">
                    John McCarthy
                </sub>
                <span className="absolute bottom-2 w-[2px] bg-blue-400 h-[100px] "></span>
            </div>
        </section>
    );
}

export default IntroComponent;