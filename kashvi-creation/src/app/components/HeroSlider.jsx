"use client"; // Required for useState

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/image1.png", // Replace with actual image paths
    title: "A Cut Above",
    subtitle: "Your Princely Glow-Up Starts Here",
    buttonText: "SHOP NOW",
    link: "/shop",
  },
  {
    id: 2,
    image: "/image2.png",
    title: "Luxury Redefined",
    subtitle: "Elevate Your Style",
    buttonText: "EXPLORE",
    link: "/explore",
  },
  {
    id: 3,
    image: "/image3.png",
    title: "Timeless Elegance",
    subtitle: "For Every Special Occasion",
    buttonText: "DISCOVER",
    link: "/discover",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center bg-white px-10 py-6">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 p-2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Content Wrapper */}
      <div className="w-full flex items-center justify-center">
        {/* Image Section (Left) */}
        <div className="w-1/2 flex justify-end">
          <div className="relative w-[400px] h-[500px]">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              layout="intrinsic"
              width={400}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Text Section (Right) */}
        <div className="w-1/2 flex flex-col items-start pl-10">
          <h2 className="text-4xl font-semibold">{slides[currentSlide].title}</h2>
          <p className="text-lg text-gray-600 mt-2">{slides[currentSlide].subtitle}</p>
          <a href={slides[currentSlide].link} className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
            {slides[currentSlide].buttonText}
          </a>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 p-2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
