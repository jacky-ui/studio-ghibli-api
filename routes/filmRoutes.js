const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');

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
    const allFilms = utils.readMovieData();
    const selectedMovie = allFilms.find((film) => film.id === req.params.filmId);
    // Iternary Operator to check whether selectedMovie is true or false. False will send 404 Not Found
    selectedMovie ? res.status(200).send(selectedMovie) : res.status(404).send("Not found. Please double check URL endpoint");
});

// GET film poster/image based on id provided from request
router.get("/:filmId/poster", (req,res) => {
    console.log(grabMovieById(req.params.filmId));
    // // const allFilms = utils.readMovieData();
    // // const selectedMovie = allFilms.find((film) => film.id === req.params.filmId);
    // selectedMovie ? res.status(200).send(selectedMovie.poster) : res.status(404).send("Not found. Please double check URL endpoint");
});

module.exports = router;