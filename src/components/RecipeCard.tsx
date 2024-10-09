import { FC } from "react";
import Recipe from "../interfaces/Recipe";
import { Link } from "react-router-dom";

interface Props {
    recipe: Recipe
}

const RecipeCard: FC<Props> = ({ recipe }) => (
    <li className="recipe-item">
        <img src={recipe.imageUrl} alt="x" />
        <Link to="/recipe-details"><span>{recipe.title}</span></Link>
        <span>{recipe.category}</span>
    </li>
)

export default RecipeCard