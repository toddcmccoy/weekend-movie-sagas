const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   const queryText = `SELECT * FROM movies 
//   JOIN movies_genres ON movies.id = movies_genres.movie_id 
//   JOIN genres ON genres.id = movies_genres.genre_id
//   GROUP BY movies.id
//   ORDER BY "title" ASC;`
//   pool
//     .query(queryText)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log(`Error on query ${error}`);
//       res.sendStatus(500);
//     });
// });

module.exports = router;