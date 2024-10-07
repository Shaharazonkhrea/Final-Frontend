import { FC } from "react"
import Recipe from "./Recipe"
import RecipeModel from "../models/RecipeModel"

interface Props {
    recipes: RecipeModel[]
}

const RecipeList: FC<Props> = ({ recipes }) => (
    <div className="recipe-list">
        <h3>RECIPES</h3>
        {recipes.map(recipe => (
            <Recipe key={recipe._id} recipe={recipe}/>
        ))}
    </div>
)

export default RecipeList