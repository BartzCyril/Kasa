import {Rent} from "../interface/Rent";
import {Link} from "react-router-dom";

type RentContainerItemProps = {
    rent : Rent
}

export function RentContainerItem({rent} : RentContainerItemProps) {
    return (
        <Link to={`/rent/${rent.id}`}>
            <img src={rent.cover} alt="rent location"/>
            <h3>{rent.title}</h3>
        </Link>
    )
}