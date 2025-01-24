import styles from "./pagetitle.module.css"

const PageTitle = () => {
  return (
    <div className={styles.pageTitleContainer}>
      <div className={styles.backgroundImage}></div>
      <h1>Contact Us</h1>
    </div>
  );
};

export default PageTitle;
