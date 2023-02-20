const express = require('express');
const cors = require('cors');
const config = {headers: {'Access-Control-Allow-Origin': '*'}};
const app = express();
require('dotenv').config();
const { PORT } = process.env.PORT || 3000;
const filmRoutes = require('./routes/filmRoutes');
const rateLimiterUsingThirdParty = require('./middleware/rateLimiter');

// Middleware to handle rate limits
app.use(rateLimiterUsingThirdParty);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Something to console.log when requests are incoming
app.use((_req, _res, next) => {
    console.log("Incoming Request!");

    next();
})

// Path/Route when request is being made
app.use("/films", filmRoutes);

app.listen(PORT || 3000, () => {
    console.log(`Server is running on ${PORT}`);
});