import {displayTitle} from './Gallery';

function Movie({ title, url, overview, rating, votes, date, video }) {

    return (

        <li className="movie-card">
            {/* Foto/Poster */}
            <img src={url} alt={title} />

            <div className="movie-info">
                {/* Título */}
                <h3>{title}</h3>

                {/* Avaliação e Contagem de Votos */}
                <div className="rating-box">
                    <span>⭐ {rating}</span>
                    <small>({votes} votos)</small>
                </div>

                {/* Overview (Sinopse) */}
                <p className="overview">{overview}</p>
            </div>
        </li>
    );
}

export default Movie;