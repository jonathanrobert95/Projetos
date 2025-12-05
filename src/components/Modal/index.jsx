import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import Button from '../Button'
import api from '../../services/api'

function Modal({ movieId, setShowModal }) {

    const [video, setVideo] = useState(null)

    useEffect(() => {
        async function loadVideo() {
            try {

                // Tenta buscar como FILME
                let res = await api.get(`/movie/${movieId}/videos`)
                
                // Se não existir trailer de filme → tenta SÉRIE
                if (!res.data.results.length) {
                    res = await api.get(`/tv/${movieId}/videos`)
                }

                setVideo(res.data.results[0])

            } catch (err) {
                console.log("Erro ao carregar trailer:", err)
            }
        }

        loadVideo()
    }, [movieId])

    return (
        <Background onClick={() => setShowModal(false)}>

            {video && (
                <Container onClick={e => e.stopPropagation()}>
                    <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="Trailer"
                        width="100%"
                        height="500"
                        allowFullScreen
                    />
                </Container>
            )}

            <Button onClick={() => setShowModal(false)}>X</Button>

        </Background>
    )
}

export default Modal
