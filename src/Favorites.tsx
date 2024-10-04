import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    isFavorite: boolean;
}

const Favorites: React.FC<{ userId: string }> = ({ userId }) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFavoriteRecipes = async () => {
            try {
                const response = await axios.get(`/api/recipes/favorites/${userId}`);
                setFavoriteRecipes(response.data);
                setLoading(false);
            } catch (err) {
                setError("Error fetching favorite recipes");
                setLoading(false);
            }
        };

        fetchFavoriteRecipes();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Your Favorite Recipes</h1>
            {favoriteRecipes.length === 0 ? (
                <p>No favorite recipes found.</p>
            ) : (
                favoriteRecipes.map(recipe => (
                    <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '300px' }} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Favorites;
