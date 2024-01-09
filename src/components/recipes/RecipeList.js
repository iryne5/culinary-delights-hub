// src/components/recipes/RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../../dummyData'; // Adjust the relative path
import RecipeCard from './RecipeCard';
import './RecipeCard.css';

const RecipeList = () => {
  return (
    <div>
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

