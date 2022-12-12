import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "../Pages/Home/home.jsx";
import { GamesPage } from "../Pages/Games/games.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/VirtualReality' element={<HomePage />} />
        <Route path='/Games' element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
