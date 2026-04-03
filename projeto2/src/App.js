import './App.css';
import MovieContextProvider from './context/MovieContext.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Item from './components/Item.js';
import NotFound from './components/NotFound.js';
import { useState } from 'react';

function App() {
  return (
    /* componente pai */
    < MovieContextProvider >
      <BrowserRouter>
        <div>
          <Header />
          {/* Criando as rotas */}
          <Routes>
            {/* Rota inicial */}
            <Route path='/' element={<Navigate to='action' replace />} />

            {/* Rotas para as categorias fixas */}
            <Route path='/action' element={<Item searchTerm='Action' />} />
            <Route path='/romance' element={<Item searchTerm='Romance' />} />
            <Route path='/suspense' element={<Item searchTerm='Suspense' />} />
            <Route path='/comedy' element={<Item searchTerm='Comedy' />} />

            {/*  Rotas dinâmicas  */}
            {/* /* <Route path='/search/:searchInput' element={<Search />} */}



            {/* Rota Not Found */}
            <Route path='*' element={<NotFound />} />

          </Routes>
        </div >
      </BrowserRouter >
    </MovieContextProvider >


  );
}

export default App;
