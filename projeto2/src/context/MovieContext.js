import { createContext, useState } from "react";
import { apiKey } from '../api_Key/Config.js';
import axios from 'axios';


export const MovieContext = createContext();



function MovieContextProvider(props) {


    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    async function searchMovies(query) {

        setLoading(true);
        setMovies([]);

        console.log("true");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
            // const response = await fetch(url);
            // const data = await response.json();

            const response = await axios.get(url);

            console.log("response");
            setMovies(response.data.results || []);

        } catch (error) {
            console.error("Erro ao buscar vídeos: ", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* <h1>Teste MovieContext</h1> */}
            <MovieContext.Provider value={{ movies, loading, searchMovies }}>
                {props.children}
            </MovieContext.Provider>
        </>
    );
}

export default MovieContextProvider;