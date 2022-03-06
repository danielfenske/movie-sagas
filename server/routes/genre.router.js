const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let queryText = `SELECT "genres"."name"

  FROM "genres"
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
  JOIN "movies" ON "genres"."id" = "movies_genres"."movie_id"
  
  WHERE "movies"."id" = $1;`;
  
  pool.query(queryText, [id])
    .then((result) => {
      console.log('request for genres');
      res.send(result.rows)
    })
    .catch((error) => {
      res.sendStatus(500)
    })
});

module.exports = router;