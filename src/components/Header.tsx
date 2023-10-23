import {Link, useLocation} from "react-router-dom";
export function Header() {
    const location = useLocation();

    return (
        <header>
            <Link to="/Kasa/">
                <img src="../img/logo-red.svg" alt="logo kasa"/>
            </Link>
            <div>
                <Link to="/Kasa/" className={location.pathname === "/" ? 'active' : ''}>Accueil</Link>
                <Link to="/Kasa/aboutUs" className={location.pathname === "/aboutUs" ? 'active' : ''}>A propos</Link>
            </div>
        </header>
    )
}