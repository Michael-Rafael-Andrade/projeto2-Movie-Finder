import { createContext, useState } from "react";



function MovieContext() {

    // const MovieContext = createContext();

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    function runSearch(query){

        setLoading(true);

        try{
            
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