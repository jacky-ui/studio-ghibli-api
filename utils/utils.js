const fs = require('fs');

// Function to read data.json for GET requests
function readMovieData() {
    const movieData = fs.readFileSync("../assets/data.json");
    const parsedMovieData = JSON.parse(movieData);
    return parsedMovieData;
};

module.exports = { readMovieData };