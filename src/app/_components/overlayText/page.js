import styles from "./overlay.module.css";
import Link from "next/link";

export default function Text() {
  return (
    <div className={styles.overlayDiv}>
      <h1 className={`${styles.overlayText} text-4xl`}>
        Crafting Spaces for Today, Shaping Futures for Tomorrow
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
