const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { PORT } = process.env;
const filmRoutes = require('./routes/filmRoutes');
const rateLimiterUsingThirdParty = require('./middleware/rateLimiter');

// Middleware to handle rate limits
app.use(rateLimiterUsingThirdParty);

// Path/Route when request is being made
app.use("/films", filmRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});