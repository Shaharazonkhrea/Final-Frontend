import Recipe from './interface/Recipe'
import { FC } from 'react'

interface Props {
    recipe: Recipe
}

const RecipeItem: FC<Props> = ({ recipe }) => {
  return (
    
    <>
    <li>
      <h3>{recipe.title}</h3>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Steps: {recipe.steps}</p>
    </li>
    </>
  )
}

export default RecipeItem