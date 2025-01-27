"use client";
import NavBar from "../_components/navbar/page";
import Header from "../_components/header/page";
import Footer from "../_components/footer/page";
import styles from "./home.module.css";
import AboutUs from "../aboutus/page";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundOverlay}>
        <Header />
        <NavBar />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}
