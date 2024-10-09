import axios from "axios"

const apiUrl =
	import.meta.env.VITE_API_BASE_URL + "/recipes"
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  isFavorited: boolean;
}

export const getRecipe = async (): Promise<
	Recipe[]
> => (await axios.get(apiUrl)).data

export const updateRecipe = async (
	recipe: Recipe,
	id: string
): Promise<void> =>
	await axios.put(
		apiUrl + "/" + encodeURIComponent(id),
		recipe
)

export const addRecipe = async (
	recipe: Recipe
): Promise<void> => await axios.post(apiUrl, recipe)

export const deleteRecipe = async (
	id: string
): Promise<void> =>
	await axios.delete(apiUrl + "/" + id)


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
    return response.data.results;
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

