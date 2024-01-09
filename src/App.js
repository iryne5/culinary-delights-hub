// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/recipes/RecipeList';
import FeaturedRecipes from './components/recipes/FeaturedRecipes';
import RecipeDetail from './components/recipes/RecipeDetail';
import SignIn from './components/auth/SignIn';
import ContactUs from './components/ContactUs';
import Home from '../src/components/Home';
import AboutUs from './components/AboutUs'; // Import the new component

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/featured">Featured Recipes</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} /> {/* Add route for About Us */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;




