import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import FoodRandom from "./pages/FoodRandom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodRandom />} />
      </Routes>
    </BrowserRouter>
  );
}
