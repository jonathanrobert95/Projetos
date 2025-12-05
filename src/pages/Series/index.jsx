import Button from '../../components/Button'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { getPopularSeries, getReleases, getSeries, getTopSeries } from '../../services/getData'

function Series() {
    const [showModal, setShowModal] = useState(false)
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [releases, setReleases] = useState()
    const navigate = useNavigate()
    const [series, setSeries] = useState()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getSeries(),         
                getTopSeries(),    
                getPopularSeries(),  
                getReleases()        
            ])
            .then(([seriesData, topData, popularData, releasesData]) => {
                setSeries(seriesData)
                setTopSeries(topData)
                setPopularSeries(popularData)
                setReleases(releasesData)
            })
            .catch((error)=> console.error(error))
        }

        getAllData()
    }, [])


    return (
        <>
        {topSeries && (
    <Background $img={getImages(topSeries[0].backdrop_path)}>


        {showModal && (
            <Modal movieId={topSeries[0].id} setShowModal={setShowModal} />
        )}

        <Container>
            <Info>
                <h1>{topSeries[0].name}</h1>
                <p>{topSeries[0].overview}</p>

                <ContainerButtons>
                    <Button red onClick={() => navigate(`/detalhe/${topSeries[0].id}`)}>
                        Assista Agora
                    </Button>

                    <Button onClick={() => setShowModal(true)}>
                        Assista o Trailer
                    </Button>
                </ContainerButtons>
            </Info>

            <Poster>
                <img alt="poster" src={getImages(topSeries[0].poster_path)} />
            </Poster>
        </Container>
    </Background>
)}


        {/* SLIDERS */}
        { series && <Slider info={series} title={'Séries'} /> }
        { topSeries && <Slider info={topSeries} title={'Top Séries'} /> }
        { popularSeries && <Slider info={popularSeries} title={'Séries Populares'} /> }
        { releases && <Slider info={releases} title={'Próximos Lançamentos'} /> }
        </>
    )
}

export default Series
