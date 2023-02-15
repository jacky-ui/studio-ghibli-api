const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});