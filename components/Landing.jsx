"use client"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";


const HeroData = [
    {
        id: 1,
        img: "/klipartz.com_vxxufp.png",
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    }
];


const Landing = () => {
    const data = HeroData[0]; // Displaying the first item from HeroData array
    const myRef = useRef(null)
    const title2Ref = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {

        let Tl = gsap.timeline()

        Tl.to(myRef.current, { scale: 1, opacity: 1, duration: 1 }, 'init')
        Tl.to(title2Ref.current, { opacity: 1, scale: 1, duration: 1 }, "init")
        Tl.to(titleRef.current, { opacity: 1, scale: 1, duration: 1 }, "init")
        Tl.to(subtitleRef.current, { opacity: 1, scale: 1, duration: 1 }, "init")
        Tl.to(buttonRef.current, { opacity: 1, translateY: 0, duration: 1 }, "init")

    }, [])

    return (
        <div className="px-4 mx-auto bg-gradient-to-r from-gray-300/80 to-gray-100 sm:px-12 rounded-xl dark:bg-gradient-to-r dark:from-zinc-800/80 dark:to-zinc-700">
            <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center 2xl:sm:min-h-[750px] ">
                <div className="container pb-8 sm:pb-0">

                    <div className="grid grid-cols-1 sm:grid-cols-2 ">
               
                        <div className="flex flex-col justify-center gap-4 pt-10 text-center xl:gap-12 sm:pl-3 sm:pt-0 sm:text-left">
                            <h1 className="text-2xl font-bold scale-75 opacity-0 sm:text-6xl lg:text-2xl dark:text-skin-inverted" ref={subtitleRef}>
                                {data.subtitle}
                            </h1>
                            <h1 className="text-5xl font-bold scale-90 opacity-0 sm:text-6xl lg:text-7xl dark:text-skin-inverted" ref={titleRef}>
                                {data.title}
                            </h1>
                            <h1 className="text-5xl uppercase text-white dark:text-skin-base sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold scale-75 opacity-0" ref={title2Ref}>
                                {data.title2}
                            </h1>
                            <div>
                                <button className="px-4 py-3 text-lg uppercase text-white dark:text-skin-base font-semibold bg-red-800 rounded-lg opacity-0 translate-y-[100px]" ref={buttonRef}>shop now</button>
                            </div>
                        </div>
                 
                        <div>
                            <div className="relative z-10">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 scale-75 opacity-0 "
                                    ref={myRef}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
