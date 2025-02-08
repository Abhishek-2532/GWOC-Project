"use client"; // Required for Next.js App Router

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <div className={styles.logo}>Kashvi Creation</div>

      {/* Hamburger Menu Button for Mobile */}
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Center: Navigation Links (Shown/Hidden Based on Screen Size) */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><Link href="/gallery" className={styles.navLink}>Gallery</Link></li>
        <li><Link href="/bestsellers" className={styles.navLink}>Bestsellers</Link></li>
        <li><Link href="/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>

      {/* Right: Search Bar, Wishlist, Cart, and Profile Icons */}
      <div className={styles.rightIcons}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <FaSearch className={styles.icon} />
        </div>

        {/* Icons for Wishlist, Cart, and Profile */}
        <FaHeart className={styles.icon} />
        <FaShoppingCart className={styles.icon} />
        <FaUser className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
