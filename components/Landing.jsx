"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
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
    const titleRef = useRef(null)
    const title2Ref = useRef(null)
    const subtitleRef = useRef(null)
    const buttonRef = useRef(null)

    useGSAP(() => {
        let Tl = gsap.timeline()

        Tl.to([
            myRef.current,
            titleRef.current,
            title2Ref.current,
            subtitleRef.current
        ], { opacity: 1, scale: 1, duration: 1 }, 'init')
        
        Tl.to(buttonRef.current, { opacity: 1, translateY: 0, duration: 1 }, "init")
    })



    return (
        <div className="px-4 mx-auto bg-gradient-light sm:px-12 rounded-xl dark:bg-gradient-dark">
            <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center 2xl:sm:min-h-[750px] ">
                <div className="container pb-8 sm:pb-0">

                    <div className="grid grid-cols-1 sm:grid-cols-2 ">

                        <div className="flex flex-col justify-center gap-4 pt-10 text-center xl:gap-12 sm:pl-3 sm:pt-0 sm:text-left">
                            <div className="text-2xl font-bold scale-75 opacity-0 sm:text-6xl lg:text-2xl " ref={subtitleRef}>
                                {data.subtitle}
                            </div>
                            <div className="text-5xl font-bold scale-90 opacity-0 sm:text-6xl lg:text-7xl " ref={titleRef}>
                                {data.title}
                            </div>
                            <div className="text-5xl uppercase text-white dark:text-almond_green sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold scale-75 opacity-0" ref={title2Ref}>
                                {data.title2}
                            </div>
                            <div>
                                <button className=" opacity-0 translate-y-[100px]" ref={buttonRef}>shop now</button>
                            </div>
                        </div>

                        <div>
                            <div className="relative z-10">
                                <Image
                                    width={550}
                                    height={550}
                                    priority={true}
                                    src={data.img}
                                    alt=""
                                    className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-50 scale-75 opacity-0 "
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
