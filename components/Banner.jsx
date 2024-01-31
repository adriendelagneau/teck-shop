"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Banner = () => {
  const imageRef = useRef(null);

  const promoRef = useRef(null);
  const happyHoursRef = useRef(null);
  const delayRef = useRef(null);

  const titleRef = useRef(null);
  const winterRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let Tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none play reverse",
      },
    });

    Tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      promoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      happyHoursRef.current,
      { opacity: 0, translateX: "30px" },
      { opacity: 1, translateX: 0, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      delayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      winterRef.current,
      { opacity: 0, translateX: "30px" },
      { opacity: 1, translateX: 0, duration: 0.4, ease: "none" },
      "init"
    );

  }, []);

  return (
    <div className="w-full relative  rounded-xl bg-gradient-to-r from-gray-300/80 to-[#e7e8e8] lg:h-64 xl:h-[320px] lg:flex justify-between items-center my-32 max-w-[620px] lg:max-w-full mx-auto dark:bg-gradient-to-r dark:from-[#1b1a1a] dark:to-[#2b2929]">
      <div className="flex flex-col items-center justify-center flex-1 gap-2 pl-6 text-xl lg:text-2xl xl:gap-6 text-light-primary dark:text-dark-primary">
        <p ref={promoRef} className="py-3">30% off</p>
        <div className="text-5xl font-bold uppercase lg:text-6xl xl:text-7xl" ref={happyHoursRef}>
          <p>happy</p>
          <p>hours</p>
        </div>
        <p ref={delayRef}>14 jan to 28 jan</p>
      </div>
      <div className="flex justify-center flex-1 w-full" ref={imageRef}>
        <Image
          width={400}
          height={400}
          alt="smart watch"
          src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1706461424/electro/smartwatch2-removebg-preview_r5bgwm.png"}
          className=" xl:h-96 xl:w-96 lg:w-80 lg:h-80 h-60 w-60"
        />
      </div>

      <div className="flex flex-col items-center flex-1 gap-3 p-6 text-xl text-light-primary dark:text-dark-primary lg:items-start">
        <p ref={titleRef}>Air Solo Bass</p>
        <p className="text-3xl font-bold xl:text-5xl" ref={winterRef}>
          Winter Sale
        </p>
        <p className="text-base xl:text-lg max-w-[400px] lg:max-w-full" ref={textRef}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis
        </p>
        <button className="w-[200px] px-5 py-3 text-base  leading-6 text-skin-inverted  font-semibold  bg-[#7b9385] border border-transparent rounded-md focus:outline-none uppercase">shop now</button>
      </div>
    </div>
  );
};

export default Banner;
