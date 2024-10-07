import { FC } from "react";
import RecipeModel from "../models/RecipeModel";

interface Props {
    recipe: RecipeModel
}

const Recipe: FC<Props> = ({ recipe }) => (
    <li className="recipe-item">
        <img src={recipe.imageUrl} alt="x" />
        <h4>{recipe.title}</h4>
    </li>
)

export default Recipe