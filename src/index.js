import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Collection from './Pages/Collection';
import Nopages from './Pages/Nopages';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<App />}></Route>
        <Route path='blogs' element={<Blog />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='collection' element={<Collection />}></Route>
        <Route path='*' element={<Nopages />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
