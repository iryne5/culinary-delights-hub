// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import FeaturedRecipes from './components/recipes/FeaturedRecipes';
import RecipeList from './components/recipes/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SignIn from './components/auth/SignIn';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedRecipes />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



