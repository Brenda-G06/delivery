import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import FoodList from "./components/FoodList";
import FoodDetails from "./components/FoodDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/restaurantes/:id" element={<RestaurantDetails />} />
        <Route path="/comidas" element={<FoodList />} />
        <Route path="/comidas/:id" element={<FoodDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
