import axios from 'axios';
import Recipe from '../interfaces/Recipe';

const apiUrl = import.meta.env.VITE_API_BASE_URL + "/recipes"
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

const scrubRecipes = (recipes: any[]): Recipe[] => (
  recipes.map(recipe => ({
    _id: recipe.id,
    title: recipe.title,
    ingredients: recipe.extendedIngredients,
    steps: recipe.analyzedInstructions[0].steps,
    category: recipe.cuisines ? recipe.cuisines[0] : undefined,
    imageUrl: recipe.image
  }))
)


export const getRecipeById = async (id: string): Promise<Recipe> => {
  const response = await axios.get('${apiUrl}/${id}');
  return response.data;
};

export const getSpoonacularRecipeById = async (id: string): Promise<Recipe> => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: { apiKey },
  });
  return scrubRecipes([response.data])[0];
};

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
    return scrubRecipes(response.data.results);
  } catch (error) {
    console.error("Error searching recipes:", error);
    throw new Error('Error searching recipes: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
};

export const getFavorites = async (): Promise<Recipe[]> => {
  const response = await axios.get(apiUrl + '/favorites');
  return response.data;
};

export const toggleFavorite = async (recipeId: number): Promise<void> => {
  await axios.post(apiUrl + `/favorites/${recipeId}/toggle`);
};

