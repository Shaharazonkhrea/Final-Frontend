import { useState, FC, FormEvent } from 'react'
import Recipe from '../interfaces/Recipe'
import { addRecipe } from '../services/recipeService'

const RecipeForm = () => {
  const [title, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [isFavorited, setFavorited] = useState(false)
  const [category, setCategory] = useState('')
  const [imageUrl, setImageUrl] = useState("")
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRecipe: Recipe = { 
        title, 
        ingredients, 
        steps,
        isFavorited,
        category,
        imageUrl,
    }
    addRecipe(newRecipe)
    setName('')
    setIngredients('')
    setFavorited(false)
    setCategory('')
    setImageUrl("")
    setSteps('')
  }

  const handleClick = () => {
    setImageUrl("")
  }

  return (
    <div className='form-container'>
      <form className='recipe-form' onSubmit={handleSubmit}>
        <div className="input recipename">
          <label className="form-label">Recipe Name</label>
          <input type="text" className="formControl" value={title} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input ingredients">
          <label className="form-label">Ingredients</label>
          <input type="text" className="formControl" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div className="input vegan">
          <input type="checkbox" className="formCheck" checked={isFavorited} onChange={() => setFavorited(!isFavorited)} />
          <label className="form-check-label">Is Favorite?</label>
        </div>
        <div className="input user-image">
          <label className="form-label">Add Image</label>
          <input type="text" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div className="input steps">
          <label className="form-label">Cooking Steps</label>
          <textarea className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  )
}

export default RecipeForm