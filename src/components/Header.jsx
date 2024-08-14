import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
        <nav>

            <ul> 
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/oferta">
                    <h1>Ofertas</h1>
                </Link>
            </ul>
        </nav>
        </>
    );
}