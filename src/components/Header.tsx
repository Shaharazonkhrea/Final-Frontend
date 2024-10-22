import { NavLink } from "react-router-dom"

const Header = () => (
    <nav className="header">
        <div className="bitefinder">
            <h1>Bite Finder</h1>
        </div>
        <div className="nav-bar">
            <NavLink className="nav-link" to="/sign-in">Sign-In</NavLink>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/add-recipe">Add Recipe</NavLink>
            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
        </div>
    </nav>
)

export default Header