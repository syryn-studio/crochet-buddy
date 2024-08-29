import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
    return (
        <header class="navbar navbar-text px-5 gradient-advanced" role="navigation">
            <h1>Crochet Buddy</h1>
            <nav class="d-flex gap-0 column-gap-4">
                <Link to="/" class="nav-link">Pattern Library</Link>
                <Link to="/patterns/create-new" class="nav-link">Add a Pattern</Link>
            </nav>
        </header>
    )
};

export default NavBar;