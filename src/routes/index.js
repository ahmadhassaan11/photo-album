import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Albums from '../components/Albums';
import AlbumDetail from '../components/AlbumDetail';
import PhotoDetail from '../components/PhotoDetail';
import Search from '../components/Search';
import RecentlyViewed from '../components/RecentlyViewed';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recently-viewed" element={<RecentlyViewed />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
