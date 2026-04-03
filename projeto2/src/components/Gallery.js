import MovieCard from './MovieCard.js';

function Gallery({ data }) {

    // const results = data;

    const validMovies = data.filter(movie => movie.title || movie.name || movie.original_name);


    return (
        <div className="photo-container">
            
                {validMovies.length > 0 ?
                    (
                        <ul>
                            {validMovies.map((movie) => {
                                // const { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = movie;

                                const { id, overview, poster_path, release_date, title, name, original_name, video, vote_average, vote_count } = movie;

                                // Garante que o título apareça mesmo se o campo 'title' estiver vazio
                                const displayTitle = title || name || original_name || "Título Indisponível";

                                // const { id, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = movie;

                                // const url = poster_path
                                //     ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                //     : `https://via.placeholder.com/500x750?text=Sem+Foto`;
                                // : `https://via.placeholder.com/500x750?text=No+Image`;

                                const url = poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a76141859358a5cbb23f73303666d2e9305c347aadc65ed60188.svg`;

                                return (
                                    <MovieCard
                                        key={id}
                                        title={displayTitle} // permite mostrar o título ou o nome ou a informação indispónivel
                                        url={url}
                                        overview={overview || "Sinopse não disponível."}
                                        rating={vote_average}
                                        votes={vote_count}
                                        date={release_date}
                                        video={video}
                                    />
                                );
                            })}
                        </ul>
                    )
                    :
                    (<h2>No Movies Found</h2>)
            }
        </div>
    );
}



export default Gallery;