import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RecipeForm from "./components/RecipeForm";
import Favorites from "./components/Favorites";
import RecipeDetail from "./components/RecipeDetail";
import './css/App.css'
import SignIn from "./components/SignIn";
import CookingPics from "./components/cookingPics";
import "./css/Header.css"

const App = () => (
  <Router>
    <Header />
    <CookingPics />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-recipe" element={<RecipeForm />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* <Route path="/recipe-details/:userRecipeId/:spoonacularId" element={<RecipeDetail />} /> */}
      <Route path="/recipes/:spoonacularId" element={<RecipeDetail />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </Router>
)
export default App;