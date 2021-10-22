import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import HeroSlide from '../components/HeroSlide/HeroSlide'
import MovieList from '../components/MovieList/MovieList'
import {category, movieType, tvType} from '../api/tmdbAPI'
const Home = () => {
    const handleClick = () => {
        window.scrollTo(0,0);
    }
    return (
        <div>
            <HeroSlide />
            <div className="section container">

                <div className="trending-movies mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to='/movies'>
                        <Button btnstyle='btn--outlined' onClick={handleClick}>View More</Button>
                        </Link>
                    </div>
                    <div className="list">
                        <MovieList category={category.movie} type={movieType.popular} />
                    </div>

                </div>

                <div className="top-rated-movies mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to='/movies'>
                        <Button btnstyle='btn--outlined' onClick={handleClick}>View More</Button>
                        </Link>
                    </div>
                    <div className="list">
                    <MovieList category={category.movie} type={movieType.top_rated} />
                    </div>
                </div>


                <div className="trending-TV mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to='/tvseries'>
                        <Button btnstyle='btn--outlined' onClick={handleClick}>View More</Button>
                        </Link>
                    </div>
                    <div className="list">
                    <MovieList category={category.tv} type={tvType.popular} />
                    </div>
                </div>
                
                <div className="top-rated-TV mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to='/tvseries'>
                        <Button btnstyle='btn--outlined' onClick={handleClick}>View More</Button>
                        </Link>
                    </div>
                    <div className="list">
                    <MovieList category={category.tv} type={tvType.top_rated} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
