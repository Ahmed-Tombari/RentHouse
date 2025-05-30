"use client"
import React from 'react';

const Header = () => {
  return (
    <div className="flex bg-gray-600 text-amber-50 p-5 font-roboto">
      <div className="overflow-hidden whitespace-nowrap w-full">
        <h1
          className="inline-block text-3xl animate-marquee"
          style={{ whiteSpace: 'nowrap' }}
        >
          Welcome to RentHouse
        </h1>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
