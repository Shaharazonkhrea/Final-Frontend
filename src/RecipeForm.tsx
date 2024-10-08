import { useState, FC } from 'react'
import Recipe from './interface/Recipe'

interface Props {
    addRecipe: (recipe: Recipe) => void
}

const RecipeForm: FC<Props> = ({ addRecipe }) => {
  const [name, setName] = useState('')
  const [calories, setCalories] = useState(0)
  const [isVegan, setIsVegan] = useState(false)
  const [image, setImage] = useState('')
  const [steps, setSteps] = useState('')

  const handleSubmit = () => {
    const newRecipe: Recipe = { 
        name, 
        calories, 
        isVegan, 
        image, 
        steps 
    }
    addRecipe(newRecipe)
    setName('')
    setCalories(0)
    setIsVegan(false)
    setImage('')
    setSteps('')
  }

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="recipename">
        <label className="form-label">Recipe Name</label>
        <input type="text" className="formControl" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="calories">
        <label className="form-label">Calories</label>
        <input type="number" className="formControl" value={calories} onChange={(e) => setCalories(e.target.value)} required />
      </div>
      <div className="vegan">
        <input type="checkbox" className="formCheck" checked={isVegan} onChange={() => setIsVegan(!isVegan)} />
        <label className="form-check-label">Is Vegan?</label>
      </div>
      <div className="userImage">
        <label className="form-label">Upload Image</label>
        <input type="file" className="formControl" onChange={handleImageChange} required />
      </div>
      <div className="steps">
        <label className="form-label">Cooking Steps</label>
        <textarea className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Recipe</button>
    </form>
  )
}

export default RecipeForm