import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext.js';

function Container({searchTerm}){

    const { movies, loading, searchMovies } = useContext(MovieContext)

    useEffect(() => {
        console.log("Buscando por: ", searchTerm);
        searchMovies(searchTerm);
    }, [searchTerm]);

    return(        
        <div>
            {loading ? (<p>Loading</p>) : (<p>Gallery</p>)}
        </div>
    );
}

export default Container;