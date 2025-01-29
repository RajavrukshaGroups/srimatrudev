import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import ContactPage from "../_components/contactPage/page";
import PageTitle from "../_components/pageTitle/page";
import Footer from "../_components/footer/page";
import About from "../_components/about-comp/page";
import AboutUs from "../aboutus/page";
export default function aboutUs() {
  let pageTitle = "About Us";
  return (
    <div>
      <Header />
      <NavBar />
      <PageTitle title={pageTitle} />
      <About />
      <AboutUs />
      <Footer />
    </div>
  );
}
