// application imports
const express = require('express')
const router = express.Router()
const mongoose = require('../db/config/db-connection')

// mongoose.model to retrieve the Test [replace with your own] model
const Movie = mongoose.model('Movie')

// GET ROUTES //
router.get('/', function (req, res) {
  Movie
        .find({})
        .then(function (data) {
          res.json(data)
        })
})

router.get('/:_id', function (req, res) {
  Movie
        .findOne({_id: req.params._id})
        .then(function (data) {
          res.json(data)
        })
})

// POST ROUTES //
router.post('/', function (req, res) {
  Movie
        .create(req.body)
        .then(function (data) {
          res.json(data)
        })
})

// PUT ROUTES //
router.put('/:_id', function (req, res) {
  Movie
        .findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(function (data) {
          res.json(data)
        })
})

// DELETE ROUTES //
router.delete('/:_id', function (req, res) {
  Movie
        .findOneAndRemove({ _id: req.params._id }, req.body)
        .then(function (data) {
          res.json(data)
        })
})

// export router
module.exports = router
