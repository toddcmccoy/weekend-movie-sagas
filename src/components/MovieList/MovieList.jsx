import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
// useEffect to get all movies from the db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
//handleClick to take use to the detail page for that movie
    const handleClick = (id) => {
        history.push(`/details/${id}`)
    }
    // end handleClick function


    // display the movie list on the page
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick = {() => handleClick(movie.id)} src={movie.poster} alt={movie.title}/>
                            <br />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;