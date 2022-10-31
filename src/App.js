import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cake from "./pages/Cake";
import FoodRandom from "./pages/FoodRandom";
import SinhNhatCoHue from "./pages/HappyBirthday";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cake" element={<Cake />} exect />
        <Route path="/" element={<FoodRandom />} exect/>
        <Route path="/chuc-mung-co-hue" element={<SinhNhatCoHue />} exect/>
      </Routes>
    </BrowserRouter>
  );
}
