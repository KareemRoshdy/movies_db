import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
 

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
