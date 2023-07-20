import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Banner} from "../components/Banner";

export function AboutUs() {
    return (
        <>
            <Header/>
            <Banner picture="banner2" filter={false}/>
            <Footer/>
        </>
    )
}