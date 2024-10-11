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
    const { userRecipeId, spoonacularId } = useParams<{ userRecipeId: string, spoonacularId: string }>();
    const [spoonacularRecipe, setSpoonacularRecipe] = useState<any | null>(null);

    
};

export default RecipeDetail;