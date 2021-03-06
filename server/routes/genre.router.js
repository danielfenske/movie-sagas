const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let id = req.params.id;
  // selects movie with unique id provided by client and returns object with all movie info + genres associated with the movie
  let queryText = `SELECT "movies"."id", "movies"."title", "movies"."poster", "movies"."description", array_agg("genres"."name") AS "movie_genres"

  FROM "movies" 
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  
  WHERE "movies"."id" = $1
  
  GROUP BY "movies"."id"`;

  pool.query(queryText, [id])
    .then((result) => {
      console.log('request for genres');
      
      // sends as object to match redux state
      res.send(result.rows[0])
    })
    .catch((error) => {
      res.sendStatus(500)
    })
});

module.exports = router;