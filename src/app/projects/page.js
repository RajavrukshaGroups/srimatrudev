import Header from "../_components/header/page";
import NavBar from "../_components/navbar/page";
import PageTitle from "../_components/pageTitle/page";

export default function projects(){
    let pageTitle='Our Projects'
    return(
        <div>
            <Header/>
            <NavBar/>
            <PageTitle title={pageTitle}/>
            {/* <Header/> */}
        </div>
    )
}