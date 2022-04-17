import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Movie, Tv} from "./pages";


const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/movie"} element={<Movie />} />
              <Route path={"/tv"} element={<Tv />} />
          </Routes>
      </BrowserRouter>
    );
};

export default App;