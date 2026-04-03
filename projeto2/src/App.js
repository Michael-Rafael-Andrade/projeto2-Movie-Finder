import './App.css';
import MovieContextProvider from './context/MovieContext.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Item from './components/Item.js';
import NotFound from './components/NotFound.js';

function App() {
  return (

    <MovieContextProvider> {/* componente pai */}
      <BrowserRouter>
        <div>
          <Header />

          <Routes> {/* Criando as rotas */ }
            {/* Rota inicial */}
            <Route path='/' element={<Navigate to='action' replace />}/>

            {/* Rotas para as categorias fixas */}
            <Route path='/Action' element={<Item searchTerm='Action'/>}/>
            <Route path='/Romance' element={<Item searchTerm='Romance'/>}/>
            <Route path='/Suspense' element={<Item searchTerm='Suspense'/>}/>
            <Route path='/Comedy' element={<Item searchTerm='Comedy'/>}/>

            {/* Rotas dinâmicas */}
            {/* <Route path='/search/:searchInput' element={<search} */}



            {/* Rota Not Found */}
            <Route path='*' element={<NotFound />}/>

          </Routes>
        </div>
      </BrowserRouter>
    </MovieContextProvider>

  );
}

export default App;
