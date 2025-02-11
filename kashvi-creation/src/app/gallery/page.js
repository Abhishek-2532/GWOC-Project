"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const images = [
  "/image13.jpg",
  "/image14.jpg",
  "/image15.jpg",
  "/image16.jpg",
  "/image17.jpg",
  "/image18.jpg",
  "/image19.jpg",
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",
  "/image6.png",
  "/image7.png",
  "/image8.png",
  "/image9.png",
  "/image10.png",
  "/image11.png",
  "/image12.png",
];

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video 1
  "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Example video 2
  "https://www.youtube.com/embed/LXb3EKWsInQ", // Example video 3
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <Navbar />
      {/* 📷 Image Gallery Section */}
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Lightbox (Full Screen Image) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <img src={selectedImage} className="max-w-full max-h-full rounded-lg" />
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </div>
      )}

      {/* 🎥 Video Section */}
      <h2 className="text-3xl font-bold text-center mt-10 mb-6">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((videoUrl, index) => (
          <div key={index} className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src={videoUrl}
              title={`Video ${index + 1}`}
              allowFullScreen
              className="w-full h-56 rounded-lg shadow-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
