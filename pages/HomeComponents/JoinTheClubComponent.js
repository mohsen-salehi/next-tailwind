import React from 'react';

function JoinTheClubComponent() {
    return (
        <section className="h-[500px] flex justify-center flex-wrap   w-full">
           <div className="w-[650px] flex justify-center flex-wrap p-2 border-x border-gray-100 ">
               <div className="w-full flex justify-center">
                   <span className="bg-blue-400 h-[100px] w-[2px]"></span>
               </div>
               <div className="w-full flex justify-center flex-wrap">
                   <h3 className="w-full flex justify-center mt-5  text-5xl">Join the Club</h3>
                   <p className="w-full text-center text-gray-400">
                       By better understanding the various aspects of surfing, you will improve faster
                       and have more fun in the water.
                   </p>
                   <form className="w-full flex flex-wrap">
                       <input type="email" placeholder="YOUR EMAIL" className="w-10/12 outline-0 p-2 border-0 bg-gray-100 shadow-inner focus:outline-0 placeholder:text-sm placeholder:ps-10 placeholder:tracking-[0.5em]"/>
                       <button type="button" className="h-full bg-blue-400 w-2/12 active:shadow-inner text-xl font-bold text-white outline-0 border-0"> &rarr;	 </button>
                   </form>
               </div>
           </div>
        </section>
    );
}

export default JoinTheClubComponent;