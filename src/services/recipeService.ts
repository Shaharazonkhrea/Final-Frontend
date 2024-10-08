import Recipe from "../interface/Recipe"
const apiUrl =
	import.meta.env.VITE_API_BASE_URL + "/recipes"
import axios from "axios"

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