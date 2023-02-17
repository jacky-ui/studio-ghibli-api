const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { PORT } = process.env;
const filmRoutes = require('./routes/filmRoutes');
const rateLimiterUsingThirdParty = require('./middleware/rateLimiter');

app.use(rateLimiterUsingThirdParty);
app.use("/films", filmRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});