import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import "../App/App.css";

function Details() {

    // connecting this page to the information in the store
    const dispatch = useDispatch();
    const history = useHistory();
    const movieDetails = useSelector(store => store.details);
    const movieGenres = useSelector(store => store.genres);
    const id = useParams();
// get details of the individual movie on page load
    useEffect(() => {
        dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
    },[]);

// get genres of the movie on page load

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
        <div className="card">
            {movieDetails.map((movieDetail) =>{
                return (
                <div className="container" key={movieDetail.id}>
                    <h1>{movieDetail.title}</h1>
                    <img src ={movieDetail.poster}/><br/><br/>
                        <p>{movieDetail.description}</p>
                </div>
                );
            })}
                        <h2>Genres</h2>
                        {movieGenres.map((genres, i) => {
                            return(
                            <h3 key={i}>{genres.name}</h3>
                            )
                        })}
            <button onClick = {backToMovies}>Back to Movie List</button>
    </div>
    )
}


export default Details;