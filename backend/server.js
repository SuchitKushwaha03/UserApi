const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');
const port = process.env.PORT || 5000

connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users/', require('./routes/userRoutes.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started at http://localhost:${port}`))