import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Movie, Tv, Detail} from "./pages";


const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/movie"} element={<Movie />} />
              <Route path={"/tv"} element={<Tv />} />
              <Route path={"/movie/:id"} element={<Detail />} />
              <Route path={"/tv/:id"} element={<Detail />} />
          </Routes>
      </BrowserRouter>
    );
};

export default App;