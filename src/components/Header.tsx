import { NavLink } from "react-router-dom"

const Header = () => (
    <nav className="header">
        <div className="nav-bar">
            <h3>Bite Finder</h3>
            <NavLink to="/sign-in">sign in</NavLink>
            <NavLink to="/">home page</NavLink>
            <NavLink to="/add-recipe">Add Recipe</NavLink>
            <NavLink to="/favorites">favorites</NavLink>
        </div>
    </nav>
)

export default Header