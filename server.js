const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./router/route')
require('./db/prodb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use([router])

app.listen(process.env.PORT || 5000, () => {
    console.log(`Our Server is running`)
})