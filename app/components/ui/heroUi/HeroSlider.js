'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Ensure refs are available before assigning
    if (prevRef.current && nextRef.current) {
      // You can access Swiper instance here if needed
    }
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      loop={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        // Attach refs after Swiper initializes
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      className="w-full h-full"
    >
      {/* Slides */}
      <SwiperSlide>
        <div className="w-full h-full bg-indigo-50 flex justify-center items-center">
          <span className="text-3xl font-semibold text-indigo-600"></span>
          <img src="/images/house.png" alt="renthouse" className=""></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-full bg-indigo-100 flex justify-center items-center">
          <span className="text-3xl font-semibold text-indigo-600"></span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-full bg-indigo-200 flex justify-center items-center">
          <span className="text-3xl font-semibold text-indigo-600"></span>
        </div>
      </SwiperSlide>

      {/* Custom Navigation Buttons */}
      <div className="absolute inset-y-1/2 z-10 flex w-full items-center justify-between px-4 -translate-y-8">
        <button
          ref={prevRef}
          id="slider-button-left"
          className="group !p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
          type="button"
        >
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          id="slider-button-right"
          className="group !p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
          type="button"
        >
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Swiper>
  );
}