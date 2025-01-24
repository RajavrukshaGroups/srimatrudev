"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <h1 className="text-3xl">Sri Matru Developers</h1>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/careers">Careers</Link>
      </div>
      <div className={styles.contactButtonWrapper}>
        <button className={styles.contactButton}>
          <Link
            href="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
