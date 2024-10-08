import Recipe from './interface/Recipe'
import { FC } from 'react'

interface Props {
    recipe: Recipe
}

const RecipeItem: FC<Props> = ({ recipe }) => {
  return (
    
    <>
    <li>
      <h3>{recipe.name} {recipe.isVegan}</h3>
      <p>Calories: {recipe.calories}</p>
      {recipe.image && <img src={recipe.image} alt={recipe.name} width="100" />} 
      <p>Steps: {recipe.steps}</p>
    </li>
    </>
  )
}

export default RecipeItem