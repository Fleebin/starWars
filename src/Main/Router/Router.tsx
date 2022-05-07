import React from 'react';
import { Routes as Router, Route } from 'react-router';
import { FilmsList } from '../../Presentation/Pages/FilmsList/FilmsList';
import { FilmDetails } from '../../Presentation/Pages/FilmDetails/FilmDetails';
import { Register } from '../../Presentation/Pages/Register/Resgister';
import { CharacterDetails } from '../../Presentation/Pages/CharacterDetails/CharacterDetails';
import { CharactersList } from '../../Presentation/Pages/CharactersList/CharactersList';

export const AppRoutes = () => {
    return (
        <Router>
          <Route path="character" element={<CharactersList />} />
          <Route path="character/:id" element={<CharacterDetails />} />
          <Route path="films" element={<FilmsList />} />
          <Route path="films/:id" element={<FilmDetails />} />
          <Route path="register" element={<Register />} />
        </Router>
    );
  }