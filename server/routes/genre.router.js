const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

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
    console.log('error in router.get', error)
    res.sendStatus(500);
    })
});

router.get('/details/:id', (req, res) => {
    console.log( 'in router.get genres/details/id:', req.params.id );
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