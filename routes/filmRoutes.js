const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');

// GET list of all films
router.get('/', (req, res) => {
    const allFilms = utils.readMovieData();
    res.status(200).send(allFilms); 
});

// GET film data for specific film based on id provided from request
router.get("/:filmId", (req, res) => {
    console.log(req.ip);
    const allFilms = utils.readMovieData();
    const selectedMovie = allFilms.find((film) => film.id === req.params.filmId);

    if( selectedMovie === undefined) {
        res.status(404).send("Not found. Please double check URL endpoint");
    } else
    res.status(200).send(selectedMovie);
});

module.exports = router;