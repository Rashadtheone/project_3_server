// application imports
const express = require('express')
const router = express.Router()
const mongoose = require('../db/config/db-connection')

// mongoose.model to retrieve the Test [replace with your own] model
const Movie = mongoose.model('Movie')

// GET ROUTES //
router.get('/', function(req, res) {
    Movies
        .find({})
        .then(function(data) {
            res.json(data)
        })
})

router.get('/:name', function(req, res) {
    Movies
        .findOne({name: req.params.name})
        .then(function(data) {
            res.json(data)
        })
})

// POST ROUTES //
router.post('/', function(req, res) {
    Movies
        .create(req.body)
        .then(function(data) {
            res.json(data)
        })
})

// PUT ROUTES //
router.put('/:name', function(req, res) {
    Movies
        .findOneAndUpdate({ name: req.params.name} , req.body)
        .then(function(data) {
            res.json(data)
        })
})

// DELETE ROUTES //
router.delete('/:name', function(req, res) {
    Movies
        .findOneAndRemove({ name: req.params.name} , req.body)
        .then(function(data) {
            res.json(data)
        })
})

// export router
module.exports = router
