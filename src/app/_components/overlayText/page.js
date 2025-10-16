import styles from "./overlay.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Text() {
  return (
    <div className={styles.overlayDiv}>
      <h1 className={`${styles.overlayText}`} style={{marginTop:'15rem'}}>
        {/* Crafting Spaces for Today, */}
        Welcome to Sri Matru Developers
        <br />
        {/* Shaping Futures for Tomorrow */}
      </h1>
      {/* <div className={styles.buttonsDiv}>
        <Link href="/about" className={styles.button}>
          About Us <ArrowRight size={16} className="ml-2" />
        </Link>
        <Link href="/projects" className={styles.button}>
          Projects <ArrowRight size={16} className="ml-2" />
        </Link>
      </div> */}
    </div>
  );
}
