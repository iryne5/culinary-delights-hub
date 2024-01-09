// src/components/recipes/FeaturedRecipes.js
import React from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../../dummyData'; // Import the named export 'recipes' instead of 'default'

const FeaturedRecipes = () => {
  return (
    <div>
      <h2>Featured Recipes</h2>
      <div className="featured-recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;


