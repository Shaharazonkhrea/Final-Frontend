import { FC } from "react";
import Recipe from "../interfaces/Recipe";
import { NavLink } from "react-router-dom";

interface Props {
    recipe: Recipe
}

const RecipeCard: FC<Props> = ({ recipe }) => (
    <li className="recipe-item">
        <img className="recipe-image" src={recipe.imageUrl} alt={recipe.title} />
        <NavLink className="recipe-link" to={`/recipes/${recipe._id}`}>
            <span>{recipe.title}</span>
        </NavLink>
        <span>{recipe.category}</span>
    </li>
)

export default RecipeCard