import React,{ useState, useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard';
import tmdbApi, {movieType, tvType} from '../../api/tmdbAPI';
import "./Movies-Grid.scss"
import Button from '../Button/Button';
const MoviesGrid = props => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState("");
    const [searchCatg, setSearchCatg] = useState('')
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if(props.category === 'movies') {
                response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
            } else if (props.category === 'tvseries') {
                response = await tmdbApi.getTvList(tvType.popular, {params})
            } else {
                return alert('hi')
            }
            setItems(response.results)
            if(props.category === 'movies') {
                setSearchCatg('movies')
            } else {
                setSearchCatg('tv');
            }
        }
        getList();
    },[props.category])
    const loadMore = async () => {
            let response = null;
            const params = {
                page: page + 1
            };
            if(props.category === 'movies') {
                response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
            } else {
                response = await tmdbApi.getTvList(tvType.popular, {params})
            }
            setItems([...items, ...response.results])
            setPage(page + 1)
    }
    return (
        <div className='section'>
        <div className="movie-search">
            <input type="text" placeholder='Search for a movie' onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <div className='movies-grid mb-3'>
            {items &&
                items.filter(itemName => {
                    if (searchCatg === 'movies') {
                        if(inputValue === '') {
                            return itemName;
                        } else if (itemName.title.toLowerCase().includes(inputValue.toLowerCase())){
                            return itemName
                        }
                    } else {
                        if(inputValue === '') {
                            return itemName;
                        } else if (itemName.name.toLowerCase().includes(inputValue.toLowerCase())){
                            return itemName
                        }
                    }

                }).map((item, i) => (
                    <MovieCard  key={i} item={item} category={props.category === 'movies' ? 'movie' : 'tv'} />
                ))
            }
        </div>
        { page < 500 ? 
            <Button btnstyle='btn--outlined' onClick={loadMore}>View More</Button> : ""
        }
        </div>
    )
}

export default MoviesGrid



/* 
{items.map((item, i) => (
                <MovieCard  key={i} item={item} category={props.category === 'movies' ? 'movie' : 'tv'} />
            ))}

*/ 