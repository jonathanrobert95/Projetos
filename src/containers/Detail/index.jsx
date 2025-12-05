import { useEffect, useState } from "react";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import { getMovie, getMovieById, getMovieCredits, getMovieSimilar } from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from '../../utils/getImages'
import Slider from "../../components/Slider";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [movieById, setMovieById] = useState();
    const [movieCredits, setMovieCredits] = useState();
    const [movieSimilar, setMovieSimilar] = useState();

    useEffect(() => {
        async function getAllDetail() {
            Promise.all([
                getMovieById(id),
                getMovie(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ]).then(([movie, videos, credits, similar]) => {
                setMovie(movie)
                setMovieById(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)

            })
                .catch((error) => console.error(error))



        }
        getAllDetail()

    }, [])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>

                            <div>
                                <strong>Gêneros:</strong>
                                <p>{movie.genres.map(g => g.name).join(", ")}</p>
                            </div>

                            <p>{movie.overview}</p>

                            <div>
                                <strong className="strong">Créditos:</strong>
                                {/* Exemplo: Diretor */}
                                {movieCredits && (
                                    <p className="p-credits">
                                        Diretor:{" "}
                                        {movieCredits.crew
                                            .filter(person => person.job === "Director")
                                            .map(person => person.name)
                                            .join(", ")}
                                    </p>
                                )}
                            </div>
                        </Info>

                        <div>Detalhe</div>
                    </Container>
                    <ContainerMovies>
                        {movieById && movieById.map((video) => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>

                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title='Youtube video Player'
                                    height='500px'
                                    width='100%'>

                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
                </>
            )}
        </>

    )
}

export default Detail