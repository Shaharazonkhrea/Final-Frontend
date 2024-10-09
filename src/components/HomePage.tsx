import { Link } from "react-router-dom"
import Header from "./Header"
import RecipeList from "./RecipeList"
import { useEffect, useState } from "react"
import Recipe from "../interfaces/Recipe"
import { getRandomRecipes } from "../services/recipeService"

const HomePage = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    useEffect(() => {
        getRandomRecipes().then(rs => setRecipes(rs))
    }, [])

    return(
        <div>
            <RecipeList recipes={recipes} />
        </div>
    )
}

export default HomePage