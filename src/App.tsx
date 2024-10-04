import React, { useState, useEffect } from 'react';
import { getRandomRecipes, addRecipe, Recipe } from './services/recipeService'; 
import Favorites from './Favorites';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newRecipe, setNewRecipe] = useState({ title: '', image: '' });
  const userId = ""; 


  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const randomRecipes = await getRandomRecipes();
        setRecipes(randomRecipes);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching random recipes:', err);
        setError('Error fetching random recipes');
        setLoading(false);
      }
    };

    fetchRandomRecipes();
  }, []); 

  const handleAddRecipe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newRecipeData: Recipe = {
        title: newRecipe.title,
        image: newRecipe.image,
        isFavorited: false,
      };

      const createdRecipe = await addRecipe(newRecipeData);

      setRecipes((prev) => [...prev, newRecipeData]); 
      setNewRecipe({ title: '', image: '' }); 
    } catch (err) {
      console.error('Error adding recipe:', err);
      setError('Error adding recipe');
    }
  };

  return (
    <div className="App">
      <h1>Random Recipes</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
              <button>{recipe.isFavorited ? 'Unfavorite' : 'Favorite'}</button>
            </div>
          ))
        ) : (
          <p>No recipes available</p>
        )}
      </div>

      <Favorites userId={userId} />
    </div>
  );
};

export default App;