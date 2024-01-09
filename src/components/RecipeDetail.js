// src/components/recipes/RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../../dummyData'; // Corrected import path

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Category: {recipe.category}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
      {/* Add more details about the recipe as needed */}
    </div>
  );
};

export default RecipeDetail;
