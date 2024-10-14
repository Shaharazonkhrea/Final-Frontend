import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getRecipeById, getSpoonacularRecipeById } from '../services/recipeService'; 
import Recipe from "../interfaces/Recipe";

interface RecipeDetailParams {
    userRecipeId: string;
    spoonacularId: string;
}

const RecipeDetail: React.FC = () => {
    const [userRecipe, setUserRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [spoonacularRecipe, setSpoonacularRecipe] = useState<any | null>(null);
    const { userRecipeId, spoonacularId } = useParams<{ userRecipeId: string, spoonacularId: string }>();

useEffect(() => {
    const fetchRecipes = async () => {
      try {
        if (userRecipeId) {
          const fetchedUserRecipe = await getRecipeById(userRecipeId);
          setUserRecipe(fetchedUserRecipe);
        }
        if (spoonacularId) {
          const fetchedSpoonacularRecipe = await getSpoonacularRecipeById(spoonacularId);
          setSpoonacularRecipe(fetchedSpoonacularRecipe);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching recipe details:', err);
        setError('Failed to load recipe details');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [userRecipeId, spoonacularId]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Recipe Details</h1>
      {userRecipe && (
        <div>
          <h2>User Recipe: {userRecipe.title}</h2>
          <img src={userRecipe.imageUrl} alt={userRecipe.title} />
          <p>Ingredients: {userRecipe.ingredients}</p>
          <p>Steps: {userRecipe.steps}</p>
          <p>Category: {userRecipe.category}</p>
        </div>
      )}

      {spoonacularRecipe && (
        <div>
          <h2>Spoonacular Recipe: {spoonacularRecipe.title}</h2>
          <img src={spoonacularRecipe.imageUrl} alt={spoonacularRecipe.title} />
          <p>Ingredients: {spoonacularRecipe.ingredients}</p>
          <p>Steps: {spoonacularRecipe.steps}</p>
          <p>Category: {spoonacularRecipe.category}</p>
        </div>
      )}

      {!userRecipe && !spoonacularRecipe && (
        <p>No recipe details found.</p>
      )}
    </div>
  );
};

export default RecipeDetail;