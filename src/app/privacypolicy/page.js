import Footer from "../_components/footer/page";
import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import PageTitle from "../_components/pageTitle/page";
import PrivacyPolicy from "../_components/privacy-policy-comp/page";

export default function PrivacPolicyMain() {
  let pageTitle = "Privacy Policy";
  return (
    <div>
      <Header />
      <NavBar />
      <PageTitle title={pageTitle} />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
