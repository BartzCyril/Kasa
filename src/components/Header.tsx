import {Link, useLocation} from "react-router-dom";
export function Header() {
    const location = useLocation();

    return (
        <header>
            <Link to="/Kasa/">
                <img src="/Kasa/img/logo-red.svg" alt="logo kasa"/>
            </Link>
            <div>
                <Link to="/Kasa/" className={location.pathname === "/Kasa/" ? 'active' : ''}>Accueil</Link>
                <Link to="/Kasa/aboutUs" className={location.pathname === "/Kasa/aboutUs" ? 'active' : ''}>A propos</Link>
            </div>
        </header>
    )
}