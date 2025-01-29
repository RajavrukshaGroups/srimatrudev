import styles from "./overlay.module.css";

export default function Text() {
  return (
    <div className={styles.overlayDiv}>
      <h1 className={`${styles.overlayText} text-4xl`}>
        Find Your Perfect Space – Inspired by Nature's Elegance
      </h1>
      <div className={styles.buttonsDiv}>
        <button className={styles.button}>About Us</button>
        <button className={styles.button}>Projects</button>
      </div>
    </div>
  );
}
