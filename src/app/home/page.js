"use client";
import NavBar from "../_components/navbar/page";
import Header from "../_components/header/page";
import Footer from "../_components/footer/page";
import OverLayText from "../_components/overlayText/page";
import styles from "./home.module.css";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundOverlay}>
        <Header />
        <NavBar />
        <OverLayText/>
      </div>
      <Footer />
    </div>
  );
}
