// src/recipes/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
    </div>
  );
};

export default RecipeCard;

