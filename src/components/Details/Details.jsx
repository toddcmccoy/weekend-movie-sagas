import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.details);
    const movieGenres = useSelector (store => store.genres);
    const id = useParams();

    useEffect(() => {
        dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
    },[]);

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
                                <h6 key={i}>{genre.name}</h6>
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