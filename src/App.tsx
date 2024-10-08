import React, { useState, useEffect } from 'react';
import { getRandomRecipes } from './services/recipeService'; 
import Favorites from './components/Favorites';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const fetchedRecipes = await getRandomRecipes();
        console.log("Fetched Recipes:", fetchedRecipes);
        setRecipes(fetchedRecipes);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching recipes:", err);
          setError(err.message); 
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchRecipes();
  }, []);


  return (
    <div className="App">
      <div>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
            </div>
          ))
        ) : (
          <p>No recipes available</p>
        )}
      </div>
    </div>
  );
};

export default App;