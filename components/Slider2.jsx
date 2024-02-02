"use client";

import React, { useState, useRef, useEffect } from "react";
import GSAP, { Power1, Power2 } from "gsap";
import { Draggable } from "gsap/Draggable";
import Link from "next/link";
import RippleButton from "./buttons/RippleButton";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

GSAP.registerPlugin(Draggable);

const Slider2 = ({ data }) => {
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const setSliderPosition = (newPosition, ease, duration) => {
    GSAP.to(sliderRef.current, {
      x: newPosition,
      ease,
      duration,
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    // Set up Draggable for the slider
    Draggable.create(slider, {
      type: "x",
      edgeResistance: 0.5,
      onDrag: function () {
        if (this.x > 0) {
          this.x = 0;
          setSliderPosition(0, Power2.easeInOut, 0.5);
        } else if (
          this.x <
          -slider.offsetWidth + sliderContainerRef.current.offsetWidth - edgeOffset
        ) {
          this.x =
            -slider.offsetWidth + sliderContainerRef.current.offsetWidth - edgeOffset;
          setSliderPosition(
            -slider.offsetWidth + sliderContainerRef.current.offsetWidth - edgeOffset,
            Power2.easeInOut,
            0.5
          );
        }
      },
    });

    setSliderPosition(0, Power2.easeInOut, 0.5);
  }, []);

  const slideWidth = 320;
  const edgeOffset = 40;

  const slideLeft = () => {
    const currentPosition = parseFloat(
      getComputedStyle(sliderRef.current).transform.split(",")[4]
    );
    const newPosition = currentPosition + slideWidth;

    if (newPosition <= 0) {
      setSliderPosition(newPosition, Power1.easeOut, 0.4);
    } else {
      setSliderPosition(0, Power1.easeOut, 0.4);
    }
  };

  const slideRight = () => {
    const currentPosition = parseFloat(
      getComputedStyle(sliderRef.current).transform.split(",")[4]
    );
    const newPosition = currentPosition - slideWidth;
    const sliderContainerWidth = sliderContainerRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;

    if (sliderWidth + newPosition >= sliderContainerWidth) {
      setSliderPosition(newPosition, Power2.easeInOut, 0.5);
    } else {
      setSliderPosition(-(sliderWidth - sliderContainerWidth + edgeOffset), Power2.easeInOut, 0.5);
    }
  };

  return (
    <div className="my-24">
      <h2>best sales</h2>
    <div className="relative overflow-hidden h-[500px] z-10 w-full my-6 mx-auto px-5" ref={sliderContainerRef}>
      <div className="absolute top-0 flex gap-6 py-3 transition-transform duration-500 ease-out" ref={sliderRef}>
        {data.map((item, i) => (
          <div key={i}>
            <ProductCard productData={item} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 z-40 hidden lg:flex">
        <RippleButton
          onClick={slideLeft}
          buttonClasses="bg-light_secondary dark:bg-dark_secondary font-medium px-2 mr-2"
          icon={<ChevronLeft className="w-6 h-6 text-light_primary dark:text-dark_primary" />}
          />
        <RippleButton
          onClick={slideRight}
          buttonClasses="bg-light_secondary dark:bg-dark_secondary font-medium px-2"
          icon={<ChevronRight className="w-6 h-6 text-light_primary dark:text-dark_primary" />}
          />
      </div>
    </div>
          </div>
  );
};

export default Slider2;
