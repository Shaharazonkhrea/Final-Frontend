import React, { useState } from 'react';
import { searchRecipes } from '../services/recipeService';
import Recipe from '../interfaces/Recipe';

interface SearchFilterProps {
  onSearchResults: (results: Recipe[]) => void; 
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query) {
      return; 
    }

    setLoading(true);
    setError(null); 

    try {
      const results = await searchRecipes(query);
      onSearchResults(results);
    } catch (err) {
      console.error('Error searching recipes:', err);
      setError('Error searching for recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search for Recipes</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter recipe name..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SearchFilter;
