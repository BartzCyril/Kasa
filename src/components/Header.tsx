import {Link} from "react-router-dom";
import "../css/header.css"
export function Header() {
    return (
        <header>
            <Link to="/">
                <img src="./img/logo.svg" alt="logo kasa"/>
            </Link>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/">A propos</Link>
            </div>
        </header>
    )
}