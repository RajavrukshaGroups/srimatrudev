import styles from "./header.module.css";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <p className={styles.contactInfo}>
        <Mail className={styles.icon} /> srimatrudevelopers@gmail.com
      </p>
      <p className={styles.contactInfo}>
        <Phone className={styles.icon} /> +91 9945646095
      </p>
    </div>
  );
};

export default Header;
