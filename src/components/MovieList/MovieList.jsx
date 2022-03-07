import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

// IMPORT MOVIE ITEM COMPONENT
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    // initiate useDispatch as variable
    const dispatch = useDispatch();

    // access movies list stored in redux
    const movies = useSelector(store => store.rootReducer.movies);

    // grab movie list on initial page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1 className="listHeader">MovieList</h1>
            <section className="movies">
                {movies.map(movie =>
                (<MovieItem
                    key={movie.id}
                    movie={movie}
                />)
                )}
            </section>
        </main>
    );
}

export default MovieList;