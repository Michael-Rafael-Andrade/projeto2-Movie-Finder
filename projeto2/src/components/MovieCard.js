import { useState } from 'react';

function MovieCard({ title, url, overview, rating, votes, date, video }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Formata a data para o padrão brasileiro
    const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR') : "N/A";

    // Garante que a nota tenha uma casa decimal (ex: 8.5)
    const formattedRating = rating ? rating.toFixed(1) : "0.0";

    return (
        <>
            <li className="movie-card" onClick={() => setIsModalOpen(true)}>
                {/* Foto/Poster */}
                <img src={url} alt={title} />

                <div className="movie-info">
                    {/* Título */}
                    <p className="movie-title">{title}</p>

                    {/* Avaliação e Contagem de Votos */}
                    <div className="rating-box">
                        <span className="rating-badge">⭐ {formattedRating}</span>
                        <small>({votes} votos)</small>
                    </div>

                    {/* Overview (Sinopse) */}
                    <p className="overview"><strong>Sinopse:</strong> {overview || "Sinopse não disponível em português."}</p>
                </div>
            </li>

            {
                isModalOpen && (
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
                            <h2>{title}</h2>
                            <p><strong>Sinopse:</strong> {overview}</p>
                            <div className="modal-details">
                                <p><span>Nota:</span> ⭐ {formattedRating}</p>
                                <p><span>Lançamento:</span> {formattedDate}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default MovieCard;