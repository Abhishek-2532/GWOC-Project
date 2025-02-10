"use client"; // Required for useState

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/image1.png",
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

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-slate-400 px-10 py-6">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition"
      >
        <ChevronLeft size={30} className="text-gray-800" />
      </button>

      {/* Slider Container */}
      <div className="relative w-full h-[60vh] flex items-center justify-center ">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full flex items-center justify-center">
              {/* Image on the Left */}
              <div className="w-1/2 h-full flex justify-center items-center">
                <img className="max-w-sm h-full w-full rounded-lg shadow-2xl "
                  src={slide.image}
                  alt={slide.title}
                />
              </div>

              {/* Text on the Right */}
              <div className="w-1/2 flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-5xl text-white font-bold">{slide.title}</h1>
                <p className="py-4 text-white">{slide.subtitle}</p>
                <a href={slide.link}>
                  <button className="bg-black text-white hover:bg-gray-600 rounded-none ...">Shop Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition"
      >
        <ChevronRight size={30} className="text-gray-800" />
      </button>
    </div>
  );
}