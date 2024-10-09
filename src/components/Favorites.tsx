import React, { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite, Recipe } from '../services/recipeService';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userFavorites = await getFavorites();
        setFavorites(userFavorites);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching favorites:', err);
        setError('Error fetching favorites');
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleToggleFavorite = async (recipeId: number) => {
    try {
      await toggleFavorite(recipeId);

      setFavorites((prevFavorites) =>
        prevFavorites.map((recipe) =>
          recipe.id === recipeId ? { ...recipe, isFavorited: !recipe.isFavorited } : recipe
        )
      );
    } catch (err) {
      console.error('Error toggling favorite:', err);
      setError('Error toggling favorite');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
            <button>{recipe.isFavorited ? 'Unfavorite' : 'Favorite'}</button>
          </div>
        ))
      ) : (
        <p>No favorites available</p>
      )}
    </div>
  );
};

export default Favorites;
