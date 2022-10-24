const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.port;
const router = require('./router/route')
require('./db/prodb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use([router])

app.listen(PORT, () => {
    console.log(`Our Server is running at port ${PORT}`)
})