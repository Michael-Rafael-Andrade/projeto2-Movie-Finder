import './App.css';
import MovieContextProvider from './context/MovieContext.js';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header.js';
import Item from './components/Item.js';
import NotFound from './components/NotFound.js';
import { useState } from 'react';
import Search from './components/Search';



function SearchWrapper() {
  // const { searchInput } = useParams(0);
  const { searchInput } = useParams();
  const cleanTerm = searchInput ? searchInput.replace(/-/g, ' ') : "";
  return <Search searchTerm={cleanTerm} />
}


function HeaderWrapper() {


  // HOOK para mudar a url do navegador programaticamente!
  const navigate = useNavigate();


  function handleSubmit(e, searchInput) {
    e.preventDefault(); // Impedir o recarregamento da página

    // formatar para aparecer o nome do filme
    const formattedTerm = searchInput
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-'); // Substitui espaços por hífens

    if (formattedTerm) {
      navigate(`/search/${formattedTerm}`);
      e.currentTarget.reset(); // Limpa o campo do input depois do envio da mensagem.
    }

    // navigate(`/search/ ${searchInput}`); // Empurrar o usuário para nova rota que preciso ou quero.
  }

  return <Header handleSubmit={handleSubmit} />

}

function App() {
  return (
    /* componente pai */
    < MovieContextProvider >
      <BrowserRouter>
        <div>
          <HeaderWrapper />
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
            <Route path='/search/:searchInput' element={<SearchWrapper />} />



            {/* Rota Not Found */}
            <Route path='*' element={<NotFound />} />

          </Routes>
        </div >
      </BrowserRouter >
    </MovieContextProvider >


  );
}

export default App;
