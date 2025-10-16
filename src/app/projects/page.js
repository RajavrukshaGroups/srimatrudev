import Footer from "../_components/footer/page";
import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import PageTitle from "../_components/pageTitle/page";
import ProjectDetails from "../_components/projects-comp/page";
import WhyChooseUs from "../_components/whychooseus/page";
import styles from "./project.module.css"

export default function projects() {
  let pageTitle = "Our Projects";
  let projectsPage = "projectsPage";
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundOverlay}>
        {/* <Header /> */}
        <NavBar />
        <PageTitle title={pageTitle} />
        <ProjectDetails />
        <WhyChooseUs page={projectsPage} />
        <Footer />
        {/* <Header/> */}
      </div>
    </div>
  );
}
