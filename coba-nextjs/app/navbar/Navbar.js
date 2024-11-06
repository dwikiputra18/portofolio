// app/navbar/Navbar.js
"use client"; // Menandakan ini adalah Client Component

import { useState } from 'react'; // Mengimpor useState untuk mengelola state
import Link from 'next/link';
import styles from './navbar.module.css'; // Gaya untuk navbar
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengelola apakah menu terbuka atau tidak

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><Image src="/mylogo.png" alt="Logo" width={50} height={50} /> {/* Sesuaikan width dan height */}
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776; {/* Ikon hamburger */}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li>
          <Link href="#aboutme" onClick={toggleMenu}>About Me</Link>
        </li>
        <li>
          <Link href="#pl" onClick={toggleMenu}>Programming Language</Link>
        </li>
        <li>
          <Link href="#social-media" onClick={toggleMenu}>Social Media</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
