import {Rent} from "../interface/Rent";
import {RentContainerItem} from "./RentContainerItem";

type RentContainerProps = {
    data : Rent[]
}

export function RentContainer({data} : RentContainerProps) {
    return (
        <section className="section-rent">
            <div className="section-rent">
                {data.map((d, index) => <RentContainerItem rent={d} key={index}/> )}
            </div>
        </section>
    )
}