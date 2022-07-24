import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function Details() {

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

    const backToMovies = () => {
        history.push(`/`);
    }

    return (
        <>
        <div>
            <ul>{movieDetails.map(movieDetail =>
                <li key={movieDetail.id}>
                    <div>{movieDetail.title}</div>
                    <img src ={movieDetail.poster}/><br/>
                    <div>
                        {movieDetail.description}
                    </div><br/>
                    <div>
                        <h3>Genres</h3>
                        
                        {movieGenres.map((genre, i) => {
                            return(
                                <li key={i}>{genre.name}</li>
                            )
                        })}
                    </div>
                </li>
                )}
            </ul>
        </div>
        </>
    )
}


export default Details;