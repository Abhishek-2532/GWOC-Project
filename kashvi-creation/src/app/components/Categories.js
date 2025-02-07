"use client";

import Link from "next/link";
import styles from "../styles/Categories.module.css";

 

export default function Categories() {
  const categories = [
    { name: "Sarees", path: "/categories/sarees" },
    { name: "Lehengas", path: "/categories/lehengas" },
    { name: "Salwar Suits", path: "/categories/salwar-suits" },
  ];

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <Link key={index} href={category.path}>
            <div className={styles.categoryCard}>
              <h2 className={styles.categoryTitle}>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


  