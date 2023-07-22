import data from '../../data/data.json'
import {useParams} from "react-router-dom";
import {Carousel} from "../components/Carousel";
import "../css/style.css"
import "../css/rent.css"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {RentHeader} from "../components/RentHeader";
import {Tags} from "../components/Tags";
import {RentHost} from "../components/RentHost";
import {Grade} from "../components/Grade";
import {DropDown} from "../components/DropDown";
import {ErrorPage} from "./ErrorPage";
export function Rent() {

    const { id } = useParams();
    const dataRent  = data.filter(d => d.id === id)

    if (dataRent.length === 0)
        return (
            <ErrorPage/>
        )

    return (
        <>
            <Header/>
            <Carousel pictures={dataRent[0].pictures}/>
            <section className="section-rent">
                <div className="section-rent-header">
                    <div>
                        <RentHeader title={dataRent[0].title} location={dataRent[0].location}/>
                        <Tags tags={dataRent[0].tags}/>
                    </div>
                    <div>
                        <RentHost name={dataRent[0].host.name} img={dataRent[0].host.picture}/>
                        <Grade grade={parseInt(dataRent[0].rating)}/>
                    </div>
                </div>
                <div className="section-rent-informations">
                    <DropDown title={"Description"} content={dataRent[0].description}/>
                    <DropDown title={"Équipements"} content={dataRent[0].equipments}/>
                </div>
            </section>
            <Footer/>
        </>
    )
}