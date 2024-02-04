import { Link } from "react-router-dom";

import './style.sass';

export default function NotFound() {
    return (
        <main className="error-not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}