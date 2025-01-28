import styles from "./pagetitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.pageTitleContainer}>
      <div className={styles.backgroundImage}></div>
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
