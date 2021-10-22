import React, {useState, useEffect, useRef} from 'react'
import SwiperCore ,{ Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import tmdbApi, {category, movieType} from '../../api/tmdbAPI'
import apiConfig from '../../api/APIConfig'
import Button from '../Button/Button'
import "./HeroSlide.scss"
import { useHistory } from 'react-router';
import Modal, { ModalContent } from '../Modal/Modal'

const HeroSlide = () => {
    SwiperCore.use([Autoplay]);
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovies(response.results.slice(1,10))
            } catch (error) {
                console.log(error)
            }

        }
        getMovies();
    },[])
    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 3000}}>
                {
                    movies.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
           {
               movies.map((item, i) => (
                   <TrailerModal key={i} item={item} />
               ))
           }
        </div>
    );
}


const HeroSlideItem = props => {
    let hisrory = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
    const poster = apiConfig.w500Image(item.poster_path)

    const setModalActive = async () => {
        const videos = await tmdbApi.getVideos(category.movie, item.id)
        const modal = document.querySelector(`#modal_${item.id}`)
        if (videos.results.length > 0) {

            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);

        } else {
            modal.querySelector('.modal__content > iframe').innerHTML = 'No trailer';
        }
        modal.classList.toggle('active')
    }

    return (
        <div className="hero-slide">
            <div className="movie" style={{backgroundImage: `url(${background})`}}>
            <div className="movie-info">
                <div className="movie-desc">
                        <h1 className='movie-title'>{item.title}</h1>
                        <p className='movie-overview'>{item.overview}</p>
                        <div className="buttons">
                            <Button onClick={() => hisrory.push('/movie/' + item.id)}>Watch Now</Button>
                            <Button btnstyle='btn--outlined' onClick={setModalActive}>Watch Trailer</Button>
                        </div>
                </div>
                <div className="movie-poster">
                    <img src={poster} alt={item.title} />
                </div>
            </div>
            </div>
        </div>
    )
    
}



const TrailerModal = props => {
    const item = props.item;
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose} >
            <iframe ref={iframeRef} width="800px" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}


export default HeroSlide;
