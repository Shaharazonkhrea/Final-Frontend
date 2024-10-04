import axios from 'axios';

export interface Recipe {
  id?: number;
  title: string;
  image: string;
  isFavorited: boolean;
}

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const getRandomRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${apiKey}/random`, {
      params: { apiKey, number: 6 },  
    });
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching random recipes:', error);
    throw error;
  }
};

export const addRecipe = async (newRecipe: Recipe): Promise<void> => {
  try {
    const response = await axios.post(apiKey, newRecipe);
    return response.data; 
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};