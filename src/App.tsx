import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RecipeForm from "./components/RecipeForm";
import Favorites from "./components/Favorites";
import './App.css'
import RecipeDetail from "./components/RecipeDetail";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-recipe" element={<RecipeForm />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipe-details/:userRecipeId/:spoonacularId" element={<RecipeDetail />} />
    </Routes>
  </Router>
)
export default App;