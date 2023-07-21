import {RentInterface } from "../interface/Rent";
import {RentContainerItem} from "./RentContainerItem";

type RentContainerProps = {
    data : RentInterface []
}

export function RentContainer({data} : RentContainerProps) {
    return (
        <section className="section-rents">
            <div>
                {data.map((d, index) => <RentContainerItem rent={d} key={index}/> )}
            </div>
        </section>
    )
}