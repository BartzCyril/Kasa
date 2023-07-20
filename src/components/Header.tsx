import {Link} from "react-router-dom";
export function Header() {
    return (
        <header>
            <Link to="/">
                <img src="./img/logo-red.svg" alt="logo kasa"/>
            </Link>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="aboutUs">A propos</Link>
            </div>
        </header>
    )
}