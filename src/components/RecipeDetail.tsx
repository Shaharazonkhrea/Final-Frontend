import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getRecipeById, getSpoonacularRecipeById } from '../services/recipeService'; 
import Recipe from "../interfaces/Recipe";

interface Step {
    number: number
    step: string
}

const RecipeDetail: React.FC = () => {
    const [userRecipe, setUserRecipe] = useState<Recipe | null>(null);
    const [spoonacularRecipe, setSpoonacularRecipe] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // const { userRecipeId, spoonacularId } = useParams<{ userRecipeId: string, spoonacularId: string }>();
    const { spoonacularId } = useParams<{ spoonacularId: string }>();

useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // if (userRecipeId) {
        //   const fetchedUserRecipe = await getRecipeById(userRecipeId);
        //   setUserRecipe(fetchedUserRecipe);
        // }
        if (spoonacularId) {
          const fetchedSpoonacularRecipe = await getSpoonacularRecipeById(spoonacularId);
          console.log(fetchedSpoonacularRecipe)
          setSpoonacularRecipe(fetchedSpoonacularRecipe);
        }
      } catch (err) {
        console.error('Error fetching recipe details:', err);
        setError('Failed to load recipe details');
    } finally { 
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [spoonacularId]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Recipe Details</h1>
      {/* {userRecipe && (
        <div>
          <h2>User Recipe: {userRecipe.title}</h2>
          <img src={userRecipe.imageUrl} alt={userRecipe.title} />
          <p>Ingredients: {userRecipe.ingredients}</p>
          <p>Steps: {userRecipe.steps}</p>
          <p>Category: {userRecipe.category}</p>
        </div>
      )} */}

      {spoonacularRecipe && (
        <div>
          <h2>
            {spoonacularRecipe.title}</h2>
          <img src={spoonacularRecipe.imageUrl} alt={spoonacularRecipe.title} />

          <h3>Ingredients:</h3>
          <ul>
            {spoonacularRecipe.ingredients.map((ingredient: any, index: number) => (
                <li key={index}>
                    <img
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        alt={ingredient.name}
                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
            ))}
            </ul>
          
          <h3>Instructions:</h3>
            {spoonacularRecipe.steps
                // .split(/<\/li>/)
                // .map((step:string) => step.replace(/<\/?[^>]+(>|$)/g, '').trim())
                // .filter((step: string) => step.trim() !== '') 
                .map((step: Step) => (
                <div key={step.number}>
                    {step.number}. {step.step} 
                </div>
            ))}
          
          {/* <p>Category: {spoonacularRecipe.category}</p> */}
        </div>
      )}

      {!spoonacularRecipe && (
        <p>No recipe details found.</p>
      )}
    </div>
  );
};

export default RecipeDetail;