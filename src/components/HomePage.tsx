import { Link } from "react-router-dom"
import Header from "./Header"
import RecipeList from "./RecipeList"
import { useEffect, useState } from "react"
import RecipeModel from "../models/RecipeModel"
import { getRandomRecipes } from "../services/recipeService"

const HomePage = () => {
    const [recipes, setRecipes] = useState<RecipeModel[]>([])

    return(
        <div>
            <Header />
            <div className="nav-bar">
                <button>links</button>
                <nav>
                    <Link to="/sign-in">sign in</Link>
                    <Link to="/add-recipe">Add Recipe</Link>
                    <Link to="/favorites">favorites</Link>
                </nav>
            </div>
            <RecipeList recipes={recipes} />
        </div>
    )
}

export default HomePage