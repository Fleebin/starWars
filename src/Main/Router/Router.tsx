import React from 'react';
import { Routes as Router, Route } from 'react-router';import { FilmsList } from '../../Presentation/Pages/FilmsList/FilmsList';
import { PeopleList } from '../../Presentation/Pages/People/PeopleList';

export const AppRoutes = () => {
    return (
        <Router>
          <Route path="people" element={<PeopleList />} />
          <Route path="films" element={<FilmsList />} />
        </Router>
    );
  }