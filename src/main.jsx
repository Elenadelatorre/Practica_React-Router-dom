import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contacts/:param' element={<Contacts />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
