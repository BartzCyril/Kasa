import {Link, useLocation} from "react-router-dom";
export function Header() {
    const location = useLocation();

    return (
        <header>
            <Link to="/">
                <img src="../img/logo-red.svg" alt="logo kasa"/>
            </Link>
            <div>
                <Link to="/" className={location.pathname === "/" ? 'active' : ''}>Accueil</Link>
                <Link to="/aboutUs" className={location.pathname === "/aboutUs" ? 'active' : ''}>A propos</Link>
            </div>
        </header>
    )
}