import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Collection from './Pages/Collection';
import Nopages from './Pages/Nopages';
import Layout from './Layout';
import Video from './Pages/Video';
import Shop from './Pages/shop';
import SingleProductPage from './Pages/SingleProductPage';
import Impressum from './Pages/impressum';
import Quellen from './Pages/Quellen';
import ComingSoon from './Pages/ComingSoon';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<App />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='collection' element={<Collection />}></Route>
        <Route path='video' element={<Video />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='singleProduct' element={<SingleProductPage />}></Route>
        <Route path='impressum' element={<Impressum />}></Route>
        <Route path='quellen' element={<Quellen />}></Route>
        <Route path='comingsoon' element={<ComingSoon></ComingSoon>}></Route>
        <Route path='*' element={<Nopages />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
