import styles from "./overlay.module.css";
import Link from "next/link";

export default function Text() {
  return (
    <div className={styles.overlayDiv}>
      <h1 className={`${styles.overlayText} text-4xl`}>
        Find Your Perfect Space – Inspired by Nature's Elegance
      </h1>
      <div className={styles.buttonsDiv}>
        <button className={styles.button}>
          <Link href="/about">About Us</Link>
        </button>
        <button className={styles.button}>
          <Link href="/projects">Projects</Link>
        </button>
      </div>
    </div>
  );
}
