import React from 'react'
import {Link} from 'react-router-dom'
import apiConfig from '../../api/APIConfig';
import { category } from '../../api/tmdbAPI'
import Button from '../Button/Button';
import './movie-card.scss'
const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    const handleClick = () => {
        window.scrollTo(0,0)
    }
    return (
        <Link to={link} >
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}} onClick={handleClick}>
            <Button btnstyle='btn--primary'>
            <i className="fas fa-play-circle"></i>
            </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

export default MovieCard
