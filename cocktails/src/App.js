import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleCocktail from "./pages/SingleCocktail"
import Error from "./pages/Error"
import About from "./pages/About"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          
          <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
