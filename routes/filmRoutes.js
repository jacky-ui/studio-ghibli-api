const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');

// GET list of all films
router.get('/', (req, res) => {
    const allFilms = utils.readMovieData();
    res.status(200).send(allFilms); 
});

router.get("/:filmId", (req, res) => {
    console.log(req.params.filmId);
    res.status(200).send("Specific film");
});

module.exports = router;