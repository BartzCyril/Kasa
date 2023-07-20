import {Link} from "react-router-dom";
import "../css/error.css"
import {Header} from "./Header.tsx";
export function ErrorPage() {
    return (
        <>
            <Header/>
            <div className="error-container">
                <div>404</div>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/" className="error-link">
                Retourner sur la page d’accueil
            </Link>
        </>
    )
}