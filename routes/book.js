let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Book Model
let Book = require('.../models/book');

/* GET Route for the Book list page - READ Operation */
router.get('/', (req, res, next) => {
    Book.find((err, Booklist) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BookList);
        }
    });

});

module.exports = router;