import Footer from "../_components/footer/page";
import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import PageTitle from "../_components/pageTitle/page";
import ProjectDetails from "../_components/projects-comp/page";

export default function projects() {
  let pageTitle = "Our Projects";
  return (
    <div>
      <Header />
      <NavBar />
      <PageTitle title={pageTitle} />
      <ProjectDetails />
      <Footer />
    </div>
  );
}
