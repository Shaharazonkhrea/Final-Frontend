import React, { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite } from '../services/recipeService';
import Recipe from '../interfaces/Recipe';

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
  const recipes = [
    {
      _id: 4,
      title: "pizza",
      imageUrl:'',
      isFavorited: false
    },
    {
      _id: 2,
      title: "sandwich",
      imageUrl:'',
      isFavorited: true
    }
  ]


  const handleToggleFavorite = async (recipeId: string) => {
    try {
    
      await toggleFavorite(+recipeId);

      setFavorites((prevFavorites) =>
        prevFavorites.map((recipe) =>
          recipe._id === recipeId ? { ...recipe, isFavorited: !recipe.isFavorited } : recipe
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
    <div className='favorites-container'>
      <h1>Your Favorite Recipes</h1>

      {
        recipes.map((recipe) => (
          <div className='recipe-item favorite' key={recipe._id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '300px' }} />
            <button>{recipe.isFavorited ? 'Unfavorite' : 'Favorite'}</button>
          </div>
        ))
      }

    </div>
  );
};

export default Favorites;
