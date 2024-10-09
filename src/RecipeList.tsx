import RecipeItem from './RecipeItem'
import Recipe from './interface/Recipe'
import { FC } from 'react'

interface Props {
    recipes: Recipe[]
}

const RecipeList: FC<Props> = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))}
      </ul>
    </div>
  )
}

export default RecipeList