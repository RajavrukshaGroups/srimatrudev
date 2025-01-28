import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import PageTitle from "../_components/pageTitle/page";
import AboutUs from "../aboutus/page";

export default function about() {
  let pageTitle='About Us'
  return (
    <div>
      <Header />
      <NavBar />
      <PageTitle title={pageTitle}/>
      {/* <AboutUs /> */}
    </div>
  );
}
