"use client"; // Required for Swiper in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "/24341-1_page-0002.jpg",
    "/24341-1_page-0003.jpg",
    "/24341-1_page-0006.jpg",
    "/24341-1_page-0005.jpg",
    "/24341-1_page-0004.jpg",
    "/24341-1_page-0001.jpg",
    "/24341-1_page-0007.jpg",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-[60vh]"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}  // Adjust width as needed
              height={600}  // Adjust height as needed
              className="mx-auto"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
