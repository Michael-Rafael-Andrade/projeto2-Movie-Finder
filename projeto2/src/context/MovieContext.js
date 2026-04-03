import { createContext, useState } from "react";
import { apiKey } from '../apiKey/Config.js';



function MovieContext() {

    // const MovieContext = createContext();

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    async function searchMovies(query){

        const url = ``;
        setLoading(true);

        try{
            const response=await fetch(url);
            const data=await response.json();
            
        }catch(error){
            console.error("Erro ao buscar vídeos: ", error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Teste MovieContext</h1>
        </>
    );
}

export default MovieContext;