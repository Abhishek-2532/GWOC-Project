"use client"; // Required for Next.js App Router

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch} from "react-icons/fa";
import styles from "./Navbar.module.css"; 
import { Heart, LucideShoppingCart, UserRoundPen } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className={styles.navbar}>
      <Link href ="/">
      <div className={styles.logo}>Kashvi Creation</div>
      </Link>
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><Link href="/pages/gallery" className={styles.navLink}>Gallery</Link></li>
        <li><Link href="/pages/bestsellers" className={styles.navLink}>Bestsellers</Link></li>
        <li><Link href="/pages/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/pages/contact" className={styles.navLink}>Contact</Link></li>
      </ul>

      <div className={styles.rightIcons}>
      
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <FaSearch className={styles.icon} />
        </div>

        <Heart />
        <LucideShoppingCart/>
        <UserRoundPen/>
      </div>
    </nav>
  );
};

export default Navbar;
