import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#e6d5c7] p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Kashvi Creation</div>
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/categories">Categories</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
