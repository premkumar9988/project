"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link href="/">📚 BookStore</Link>
      </div>

      {/* MENU ICON (Mobile) */}
      <div
        className={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* LINKS */}
      <div
        className={`${styles.links} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/admin">Admin</Link>

        {/* CART */}
        <Link href="/cart" className={styles.cart}>
          Cart <span className={styles.badge}>2</span>
        </Link>
      </div>
    </nav>
  );
}