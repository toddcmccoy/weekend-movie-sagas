import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function Details() {

    // connecting this page to the information in the store
    const dispatch = useDispatch();
    const history = useHistory();
    const movieDetails = useSelector(store => store.details);
    const movieGenres = useSelector(store => store.genres);
    const id = useParams();

    useEffect(() => {
        dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
    },[]);

    useEffect(() => {
        dispatch({
            type: 'GET_GENRES',
            payload: id
        })
    },[]);

    
    // function to allow the user to return to the main list page
    const backToMovies = () => {
        history.push(`/`);
    }
// display of the movie details and associated genres selected for that movie
    return (
        <div>
            {movieDetails.map((movieDetail) =>{
                return (
                <div key={movieDetail.id}>
                    <h1>{movieDetail.title}</h1>
                    <img src ={movieDetail.poster}/><br/>
                        <p>{movieDetail.description}</p>
                </div>
                );
            })}
                        <h3>Genres</h3>
                        {movieGenres.map((genres, i) => {
                            return(
                            <h4 key={i}>{genres.name}</h4>
                            )
                        })}
            <button onClick = {backToMovies}>Back to Movie List</button>
    </div>
    )
}


export default Details;