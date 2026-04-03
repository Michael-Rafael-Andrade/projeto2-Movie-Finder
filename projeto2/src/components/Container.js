import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext.js';
import Loader from './Loader.js';
import Gallery from './Gallery.js';

function Container({searchTerm}){

    const { movies, loading, searchMovies } = useContext(MovieContext)

    useEffect(() => {
        console.log("Buscando por: ", searchTerm);
        searchMovies(searchTerm);
    }, [searchTerm]);

    return(        
        <div>
            {loading ? <Loader/> : <Gallery data={movies}/>}
        </div>
    );
}

export default Container;