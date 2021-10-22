import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../api/tmdbAPI';
import apiConfig from '../api/APIConfig';
import Button from '../components/Button/Button';
import VideoList from './VideoList';
import MovieList from '../components/MovieList/MovieList';
import Cast from '../components/MoviesCast/Cast';
import './Detail.scss';


const Detail = () => {

    const { category, id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const getDetails = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}})
            setItem(response)
        }
        getDetails();
    },[id])


    return (
        <>
        {item &&
        <>
        <div className='banner'style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}>
        </div>
        <div className="mb-3 movie-content container">
                <div className="movie-content__poster">
                    <div className='movie-content__poster__img' style={{backgroundImage: `url(${apiConfig.w500Image(item.poster_path)})`}}></div>
                </div>
                <div className="movie-content__info">
                    <h2 className='movie-title'>{item.title || item.name}</h2>
                    <div className="genres">
                    { item.genres && item.genres.map((genre, i) => (
                        <Button key={i} btnstyle='btn--outlined'>{genre.name}</Button>
                    ))}
                    </div>
                    <p className="overview">{item.overview}</p>
                    <div className="casts-section">
                        <h2 className='casts-title'>Casts</h2>
                        <div className="our-casts">
                            <Cast category={category} id={id} />
                        </div>
                    </div>
                </div>
                
        </div>
        <div className="container ">
            <div className="videos">
            <VideoList category={category} id={id} />
            </div>
            <div className="similar-movies" style={{margin: '50px 0'}}>
            <h2>Similar</h2>
            <MovieList type='similar' category={category} id={id} />
        </div>
        </div>
        
        </>
        }
        
        </>
    )
}

export default Detail
