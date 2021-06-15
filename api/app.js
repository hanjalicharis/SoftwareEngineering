const express = require('express')
const mongoose = require('mongoose');
const app = express();
const databaseString = "mongodb+srv://hanjalicharis:haris1234@cluster0.mu8zl.mongodb.net/haris-se?retryWrites=true&w=majority";

mongoose.connect(databaseString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log("Successful")
});

mongoose.connection.on('error', error => {
    console.log('Error: ', error)
});


//Routes

const userRoutes = require('./routes/api/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/users', userRoutes)

app.use((req, res, next) => {
    const error = new Error('Wrong request');
    error.status = 405;
    next(error);
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
        error: {
            message: error.message,
            status: statusCode,
            stack: error.stack,
        },
    })
});


module.exports = app;
