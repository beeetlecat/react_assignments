import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav>
            <ul>
                <li className="nav__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to="/About">About</Link>
                </li>
                <li className="nav__item">
                    <Link to="/ProjectsPage">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;

