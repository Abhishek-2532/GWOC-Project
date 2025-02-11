"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section - About */}
        <div>
          <h2 className="text-2xl font-bold">Kashvi Creation</h2>
          <p className="mt-3 text-gray-400">
            Elevate your style with our premium collection. Quality & elegance in every detail.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="/shop" className="text-gray-400 hover:text-white transition">Shop</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Icons */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Kashvi Creation. All rights reserved.
      </div>
    </footer>
  );
}
