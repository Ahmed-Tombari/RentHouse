'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Devid Smith',
      role: 'Founder @democompany',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula.',
      image: '/images/house.png',
      brand: '/images/house.png',
    },
    {
      name: 'Jane Doe',
      role: 'CTO @examplecorp',
      text: 'Mauris consequat justo a purus facilisis, vel gravida urna placerat. Sed rutrum nisi at odio cursus.',
      image: '/images/house.png',
      brand: '/images/house.png',
    },
  ];

  return (
    <section className="overflow-hidden pb-20 lg:pb-24 xl:pb-28">
      <div className="animate_top relative z-10 mx-auto max-w-screen-xl px-4 text-center md:px-8 xl:px-0">
        <h2 className="mx-auto mb-5 text-3xl font-semibold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-4xl">
          Client’s Testimonials
        </h2>
        <p className="mx-auto text-gray-700 dark:text-gray-300 md:w-4/5 lg:w-3/5 xl:w-[46%]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="mx-auto my-16 max-w-screen-xl px-4 md:px-8 xl:px-20">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative mx-auto max-w-3xl rounded-lg bg-white p-8 dark:bg-blacksection shadow-md transition-transform duration-300 hover:scale-105">
                <span className="absolute right-0 top-0 h-1/2 w-1.5 rounded-tr-lg bg-primary" />
                <span className="absolute bottom-0 right-0 h-1/2 w-1.5 rounded-br-lg bg-secondary" />
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="shrink-0 rounded-full"
                  />
                  <div>
                    <Image
                      src="/images/icon-quote.svg"
                      alt="Quote"
                      width={40}
                      height={40}
                    />
                    <p className="my-6 text-lg font-medium italic text-gray-800 dark:text-gray-200 lg:text-2xl">
                      {item.text}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-lg font-medium text-black dark:text-white">
                          {item.name}
                        </span>
                        <span className="block text-sm text-gray-600 dark:text-gray-400">
                          {item.role}
                        </span>
                      </div>
                      <Image
                        src={item.brand}
                        alt="Brand"
                        width={120}
                        height={24}
                        className="opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !left-4 !text-black dark:!text-white" />
          <div className="swiper-button-next !right-4 !text-black dark:!text-white" />
        </Swiper>
      </div>
    </section>
  );
}
