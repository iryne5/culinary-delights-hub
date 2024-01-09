// src/pages/Home.js
import React from 'react';
import FeaturedRecipes from './recipes/FeaturedRecipes';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Culinary Delights Hub!</h1>
      <p>Discover a world of delicious recipes at your fingertips.</p>
      <FeaturedRecipes /> {/* Include the FeaturedRecipes component */}
    </div>
  );
};

export default Home;
