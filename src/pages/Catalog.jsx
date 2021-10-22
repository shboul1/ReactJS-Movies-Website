import React from 'react'
import { useParams } from 'react-router'
import PageHeader from '../components/page-header/PageHeader';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid'

const Catalog = () => {
    const {category} = useParams();
    
    return (
        <div>
            <PageHeader>
                <h2>{category === 'movies' ? "Movies" : "TV Series"}</h2>
            </PageHeader>
            <div className="container mb-3">
                <MoviesGrid category={category}/>
            </div>
        </div>
    )
}

export default Catalog
