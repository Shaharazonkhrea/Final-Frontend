import { FC } from "react"
import RecipeCard from "./RecipeCard"
import RecipeModel from "../models/RecipeModel"

interface Props {
    recipes: RecipeModel[]
}

const RecipeList: FC<Props> = ({ recipes }) => (
    <div className="recipe-list">
        <h3>RECIPES</h3>
        <ul>
            {recipes.map(recipe => (
                <RecipeCard key={recipe._id} recipe={recipe}/>
            ))}
        </ul>
    </div>
)

export default RecipeList