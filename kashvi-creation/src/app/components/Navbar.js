import React from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <div className={styles.logo}>Kashvi Creation</div>

      {/* Center: Navigation Links */}
      <ul className={styles.navLinks}>
        <li><Link href="/" className={styles.navLink}>Home</Link></li>
        <li><Link href="/pages/categories" className={styles.navLink}>Categories</Link></li>
        <li><Link href="/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>

      {/* Right: Search Bar, Wishlist, Cart, and Profile Icons */}
      <div className="flex gap-4 items-center">
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <FaSearch className={styles.icon} />
        </div>

        {/* Wishlist Icon */}
        <FaHeart className={styles.icon} />

        {/* Cart Icon */}
        <FaShoppingCart className={styles.icon} />

        {/* Profile Icon */}
        <FaUser className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
