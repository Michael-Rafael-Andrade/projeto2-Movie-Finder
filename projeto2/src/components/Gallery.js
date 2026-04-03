import Movie from './Movie.js';

function Gallery({ data }) {

    const results = data;

    return (
        <div className="photo-container">
            {
                results.length > 0 ?
                    (
                        <ul>
                            {results.map((movie) => {
                                // const { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = movie;

                                const { id, overview, poster_path, release_date, title, video, vote_average, vote_count } = movie;

                                // const { id, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = movie;

                                const url = poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : `https://via.placeholder.com/500x750?text=Sem+Foto`;
                                // : `https://via.placeholder.com/500x750?text=No+Image`;

                                return (
                                    <Movie
                                        key={id}
                                        title={title}
                                        url={url}
                                        overview={overview}
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