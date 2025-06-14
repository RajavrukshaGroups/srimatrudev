import Footer from "../_components/footer/page";
import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import PageTitle from "../_components/pageTitle/page";
import TermsAndConditionPage from "../_components/termsandcondition/page";

export default function TermsAndCondition() {
  let pageTitle = "Terms and Condition";
  return (
    <div>
      <Header />
      <NavBar />
      <PageTitle title={pageTitle} />
      <TermsAndConditionPage />
      <Footer />
    </div>
  );
}
