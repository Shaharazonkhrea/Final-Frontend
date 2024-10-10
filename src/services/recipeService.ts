import axios from 'axios';
import Recipe from '../interfaces/Recipe';

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

const scrubRecipes = (recipes: any[]): Recipe[] => (
  recipes.map(recipe => ({
    _id: recipe.id,
    title: recipe.title,
    ingredients: recipe.extendedIngredients,
    steps: recipe.instructions,
    category: recipe.cuisines ? recipe.cuisines[0] : undefined,
    imageUrl: recipe.image
  }))
)

export const getRandomRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get<{ recipes: Recipe[] }>(
      `${BASE_URL}/random`, 
      { params: { apiKey } }
    );
    console.log("Full API Response:", response.data); 
    return scrubRecipes(response.data.recipes); 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw new Error('Error fetching recipes: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await axios.get<{ results: Recipe[] }>(
      `${BASE_URL}/complexSearch`, 
      { 
        params: { 
          query, 
          number: 10, 
          apiKey 
        } 
      }
    );
    console.log("Search Results:", response.data);
    return scrubRecipes(response.data.results);
  } catch (error) {
    console.error("Error searching recipes:", error);
    throw new Error('Error searching recipes: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
};

export const getFavorites = async (): Promise<Recipe[]> => {
  const response = await axios.get('/api/recipes/favorites');
  return response.data;
};

export const toggleFavorite = async (recipeId: number): Promise<void> => {
  await axios.post(`/api/user/favorites/${recipeId}/toggle`);
};

