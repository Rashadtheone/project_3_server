const mongoose = require('mongoose')

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field
const SongSchema = new mongoose.Schema({
  title: String,
  author: String,
})

const MovieSchema = new mongoose.Schema({
  title: String,
  genre: [], 
  description: String, 
  soundtrack: String,
  createDate: {
    type: Date,
    default: Date.now
  },
  playlist: [SongSchema]
})

// builds a model from the schema, and attaches it to our mongoose instance.
// a model is used to query and change data in the database
mongoose.model('Movie', MovieSchema)

module.exports = mongoose
