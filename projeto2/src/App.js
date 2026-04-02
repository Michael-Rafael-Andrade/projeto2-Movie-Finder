import './App.css';
import MovieContext from './context/MovieContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';

function App() {
  return (

    <MovieContext> {/* componente pai */}
      <BrowserRouter>
        <div>
          <Header />

          <Routes> {/* Criando as rotas */ }
            {/* <Route path='/' element={} /> */}

          </Routes>

        </div>


      </BrowserRouter>
    </MovieContext>

  );
}

export default App;
