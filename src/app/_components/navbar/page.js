"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <h1 className="text-3xl uppercase">
          <span style={{ color: "#349134" }}>SRI</span> MATRU DEVELOPERS
        </h1>

        <button className={styles.hamburgerButton} onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <div className={styles.contactButtonWrapper}>
          <button className={styles.button}>
            <Link
              href="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Link>
          </button>
        </div>
      </div>

      {/* Modal for mobile navigation */}
      {isModalOpen && (
        <div
          className={`${styles.modal} ${isModalOpen ? styles.open : ""}`}
          onClick={toggleModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.displayNav}>
              <div className={styles.indDiv}>
                <div className={styles.indLink}>
                  <Link href="/" onClick={toggleModal}>
                    Home
                  </Link>
                </div>
                <div className={styles.indLink}>
                  <Link href="/projects" onClick={toggleModal}>
                    Projects
                  </Link>
                </div>
                <div className={styles.indLink}>
                  <Link href="/about" onClick={toggleModal}>
                    About Us
                  </Link>
                </div>
                <div className={styles.indLink}>
                  <Link href="/contact" onClick={toggleModal}>
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className={styles.closeButtonDiv}>
                <button className={styles.closeButton} onClick={toggleModal}>
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
