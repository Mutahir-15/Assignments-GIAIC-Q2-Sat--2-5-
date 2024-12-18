import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section className="grid grid-cols-2 justify-between">
        {/*Text Section*/}
        <div className="flex grid-span-6 text-black items-center">
            <h1 className="text-7xl">Governor Sindh</h1>
            <h2 className="text-5xl">Kamran Tessori</h2>
        </div>
        {/*Image section*/}
        <div>
        <Image 
        src={"/images/governor.png"}
        alt="Governor Sindh"
        width={800}
        height={800}/>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;