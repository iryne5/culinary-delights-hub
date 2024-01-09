// src/components/recipes/RecipeCategories.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCategories = () => {
  return (
    <div>
      <h2>Recipe Categories</h2>
      <ul>
        <li>
          <Link to="/recipes/breakfast">Breakfast Recipes</Link>
        </li>
        <li>
          <Link to="/recipes/lunch">Lunch Recipes</Link>
        </li>
        <li>
          <Link to="/recipes/dinner">Dinner Recipes</Link>
        </li>
      </ul>
    </div>
  );
};

export default RecipeCategories;

