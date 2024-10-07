import { Link } from "react-router-dom"
import Header from "./Header"

const HomePage = () => {
    return(
        <div>
            <Header />
            <div className="nav-bar">
                <button>links</button>
                <nav>
                    <Link to="/sign-in">sign in</Link>
                    <Link to="/add-recipe">Add Recipe</Link>
                </nav>
            </div>
        </div>
    )
}

export default HomePage