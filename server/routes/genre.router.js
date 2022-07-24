const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GET request to get movie and genre information from the db
// joins the movies table to the genres table through the junction table movies_genres
router.get('/:id', (req, res) => {
    let id = req.params.id
    const queryText = 
    `SELECT "genres"."name" 
    FROM "genres"
    JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
    JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
    WHERE "movies"."id" = ${id};`;
    pool.query(queryText)
    .then(result => {
    res.send(result.rows);
    }).catch(error => {
    console.log('error in get', error)
    res.sendStatus(500);
    })
});

// GET request for the individual movie to appear on the details page
router.get('/details/:id', (req, res) => {
    let id = req.params.id
    const queryText = `SELECT * FROM "movies" WHERE "movies"."id" = ${id};`;
    pool.query(queryText)
    .then(results => {
    res.send(results.rows);
    }).catch( ( error ) => {
    console.log('error in router.get/:id', error);
    res.sendStatus( 500 );
    });
});

module.exports = router;