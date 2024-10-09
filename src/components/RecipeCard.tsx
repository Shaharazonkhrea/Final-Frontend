import { FC } from "react";
import RecipeModel from "../models/RecipeModel";
import { Link } from "react-router-dom";

interface Props {
    recipe: RecipeModel
}

const RecipeCard: FC<Props> = ({ recipe }) => (
    <li className="recipe-item">
        <img src={recipe.imageUrl} alt="x" />
        <Link to="/recipe-details"><span>{recipe.title}</span></Link>
        <span>{recipe.category}</span>
    </li>
)

export default RecipeCard