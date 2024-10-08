import { useState } from 'react'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
import Recipe from './interface/Recipe'

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe])
  }

  return (
    <div>
      <h1>Cooking Recipes</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  )
}

export default App
