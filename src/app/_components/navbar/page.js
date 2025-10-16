"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleModal = () => setIsModalOpen((s) => !s);

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        {/* LEFT: Logo at extreme left */}
        <div className={styles.leftLogo}>
          <Link href="/" className={styles.logoLink} aria-label="Home">
            <Image
              src="/logo.png"
              alt="Sri Matru Developers"
              width={140}
              height={140}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        {/* CENTER: main nav links */}
        <nav className={styles.centerNav} aria-label="Primary Navigation">
          <Link href='/'>Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
        </nav>

        {/* RIGHT: contact + hamburger */}
        <div className={styles.rightGroup}>
          <Link href="/contact" className={styles.contactLink}>
            Contact
          </Link>

          <button
            className={styles.hamburgerButton}
            onClick={toggleModal}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      {/* Mobile modal/nav */}
      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalLinks}>
              <Link href="/" onClick={toggleModal}>
                Home
              </Link>
              <Link href="/about" onClick={toggleModal}>
                About Us
              </Link>
              <Link href="/projects" onClick={toggleModal}>
                Projects
              </Link>
              <Link href="/contact" onClick={toggleModal}>
                Contact
              </Link>
            </div>
            <button
              className={styles.closeButton}
              onClick={toggleModal}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
