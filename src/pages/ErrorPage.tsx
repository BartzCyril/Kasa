import {Link} from "react-router-dom";
import "../css/error.css"
import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer";
export function ErrorPage() {
    return (
        <>
            <Header/>
            <div className="error-container">
                <div>
                    <div>404</div>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to="/">
                    Retourner sur la page d’accueil
                </Link>
            </div>
            <Footer/>
        </>
    )
}