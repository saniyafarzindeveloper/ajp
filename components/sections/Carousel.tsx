'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/img3.JPG",
  "/images/img4.JPG",
  "/images/img5.JPG",
  "/images/img6.JPG",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="aspect-4/3 rounded-3xl bg-gray-100 overflow-hidden shadow-sm">
        <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm rounded-2xl">
          <Image
            src={images[currentIndex]}
            alt="hero image"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* Trust Badge */}
      <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-md px-5 py-3 border-l-4 border-green-500">
        <p className="text-xs text-gray-500">Committed to</p>
        <p className="text-sm font-medium text-gray-900">
          Transparency & Accountability
        </p>
      </div>
    </div>
  );
}
