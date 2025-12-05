import { data } from 'react-router-dom'
import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { getMovie, getMovies, getPopularSeries, getReleases, getTopMovies, getTopSeries } from '../../services/getData'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovie, setMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [releases, setReleases] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getReleases()
            ]).then(([movie, topMovies, topSeries, popularSeries, releases]) =>{
                setMovie(movie)
                setMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setReleases(releases)
            })
            .catch((error)=> console.error(error))
            
            
            
           }
        getAllData() 
    
    }, [])


    return (
    <>
        {movie && (
            <Background $img={getImages(movie.backdrop_path)}>
                {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
                <Container>
                 <Info>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ContainerButtons>
                        <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                        <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                    </ContainerButtons>
                </Info>
                <Poster>
                    <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                </Poster>
                </Container>
            </Background>
            )}
            { topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
            { topSeries && <Slider info={topSeries} title={'Top Series'} />}
            { popularSeries && <Slider info={popularSeries} title={'Séries Popular'} />}
            { releases && <Slider info={releases} title={'Próximos lançamentos'} />}
        </>
    )
}



export default Home