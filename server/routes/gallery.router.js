const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const galleryId = req.params.id;
  const sqlText = `
    UPDATE gallery
    SET likes = likes + 1
    WHERE id = $1;
  `;
  pool.query(sqlText, [galleryId])
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbError) => {
      console.log(`PUT Error ${sqlText}`, dbError);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `
    SELECT * FROM gallery
    ORDER BY id ASC;
  `;
  pool.query(sqlText)
    .then((dbResult) => {
      res.send(dbResult.rows);
    })
    .catch((dbError) => {
      console.log(`Get Error ${sqlText}`, dbError);
      res.sendStatus(500);
    });
});

module.exports = router;
