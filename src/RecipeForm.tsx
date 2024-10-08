import { useState, FC } from 'react'
import Recipe from './interface/Recipe'

interface Props {
    addRecipe: (recipe: Recipe) => void
}

const RecipeForm: FC<Props> = ({ addRecipe }) => {
  const [title, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [isFavorite, setFavorite] = useState(false)
  const [category, setCategory] = useState('')
  const [imageUrl, setShowImage] = useState(false)
  

  const handleSubmit = () => {
    const newRecipe: Recipe = { 
        title, 
        ingredients, 
        steps,
        isFavorite,
        category, 
        imageUrl, 

    }
    addRecipe(newRecipe)
    setName('')
    setIngredients('')
    setFavorite(false)
    setCategory('')
    setShowImage(false)
    setSteps('')
  }

  const handleClick = () => {
    setShowImage(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="recipename">
        <label className="form-label">Recipe Name</label>
        <input type="text" className="formControl" value={title} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="ingredients">
        <label className="form-label">Ingredients</label>
        <input type="text" className="formControl" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </div>
      <div className="vegan">
        <input type="checkbox" className="formCheck" checked={isFavorite} onChange={() => setFavorite(!isFavorite)} />
        <label className="form-check-label">Is Favorite?</label>
      </div>
      <div className="userImage">
        <label className="form-label">Add Image</label>
        <button className="formControl" onClick={handleClick}>Show Image</button>
        {imageUrl && <img src="pizza.png" alt="Description" />}
      </div>
      <div className="steps">
        <label className="form-label">Cooking Steps</label>
        <textarea className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Add Recipe</button>
    </form>
  )
}

export default RecipeForm