import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import ContactPage from "../_components/contactPage/page";
import PageTitle from "../_components/pageTitle/page";
import Footer from "../_components/footer/page";
export default function contact(){
    let pageTitle='Contact Us'
    return(
        <div>
            <Header/>
            <NavBar/>
            <PageTitle title={pageTitle}/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}