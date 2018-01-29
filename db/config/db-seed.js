const mongoose = require('./db-connection')
const seedData = require('./seed-data')

const Movie = mongoose.model('Movie')

mongoose.Promise = Promise

// plant the seeds!
// seed your local db with some data
Movie
    .remove({})
    .then(function() {
        console.log('Planting seeds...')
        return Movie.collection.insert(seedData)
    })
    .then(function() {
        console.log('Your db has been seeded!')
        process.exit()
    })

