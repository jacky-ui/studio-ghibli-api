const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');

// Created a function that will compare film id from req.params.id. Help me stay DRY
function grabMovieById(reqParamsId) {
    const allFilms = utils.readMovieData();
    const selectedMovie = allFilms.find((film) => film.id === reqParamsId);
    return selectedMovie;
};

// GET list of all films
router.get('/', (req, res) => {
    const allFilms = utils.readMovieData();
    res.status(200).send(allFilms); 
});

// GET film data for specific film based on id provided from request
router.get("/:filmId", (req, res) => {
    const foundMovie = grabMovieById(req.params.filmId)
    // Iternary Operator to check whether selectedMovie is true or false. False will send 404 Not Found
    foundMovie ? res.status(200).send(foundMovie) : res.status(404).send("Not found. Please double check URL endpoint");
});

// GET film poster/image based on id provided from request
router.get("/:filmId/poster", (req,res) => {
    const foundMovie = grabMovieById(req.params.filmId);
    foundMovie ? res.status(200).send(foundMovie.poster) : res.status(404).send("Not found. Please double check URL endpoint");
});

module.exports = router;