import {Header} from "../components/Header.tsx";
import "../css/homepage.css"
import {Banner} from "../components/Banner";
import {Footer} from "../components/Footer";
import data from '../../data/data.json'
import {RentContainer} from "../components/RentContainer";
function App() {
    return (
        <>
            <Header/>
            <Banner filter={true} picture={"banner"} title={"Chez vous, partout et ailleurs"}/>
            <RentContainer data={data}/>
            <Footer/>
        </>
    )
}

export default App
