import axios from 'axios';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  isFavorited: boolean;
}

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const getRandomRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get<{ recipes: Recipe[] }>(
      `${BASE_URL}/random`, 
      { params: { apiKey } }
    );
    console.log("Full API Response:", response.data); 
    return response.data.recipes; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw new Error('Error fetching recipes: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
};

export const getFavorites = async (): Promise<Recipe[]> => {
  const response = await axios.get('/api/recipes/favorites'); // Assuming the endpoint is /api/recipes/favorites
  return response.data;
};
