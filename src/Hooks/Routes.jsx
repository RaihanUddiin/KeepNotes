import React from 'react'
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import ViewNotePage from '../Components/ViewNotePage';
import RidirectToNotes from '../Components/RidirectToNotes';
import Home from '../Components/Home';

const Router = () => {
  return <Routes>
    <Route path="/" element={<RidirectToNotes />} />
    <Route path="/notes" element={<Home />} />
    <Route path="/notes/:noteId" element={<ViewNotePage />} />
  </Routes>
}


export default Router;

