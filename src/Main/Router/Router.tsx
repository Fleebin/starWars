import React from 'react';
import { Routes as Router, Route } from 'react-router';
import { FilmsList } from '../../Presentation/Pages/FilmsList/FilmsList';
import { FilmDetails } from '../../Presentation/Pages/FilmDetails/FilmDetails';
import { PeopleList } from '../../Presentation/Pages/PeoplesList/PeoplesList';
import { PeopleDetails } from '../../Presentation/Pages/PeopleDetails/PeopleDetails';

export const AppRoutes = () => {
    return (
        <Router>
          <Route path="people" element={<PeopleList />} />
          <Route path="people/:id" element={<PeopleDetails />} />
          <Route path="films" element={<FilmsList />} />
          <Route path="films/:id" element={<FilmDetails />} />
        </Router>
    );
  }