const mongoose = require("mongoose");

// Define the movie schema
const MovieSchema = new mongoose.Schema({
  
    "title": String,
    "description":String,
    "year": Number,
    "genre": [String],
    "plot": String,
    "poster": String,
    "runtime": String,
    "director": [String],
    "actors": [String],
    "language": [String],
    "country": String,
    "awards": String,
    "imdbRating": Number,
    "imdbVotes": Number,
    "imdbID": String,
    "type": String,
    "boxOffice": String,
    "production": String,
    "video": String,
    "img":String,
    isSeries: Boolean,
    isdocumentry: Boolean,
    "ratings": [
      {
        "source": String,
        "value": String
      }
    ]
  
  
  
});

// Remove the "title" index from the movie schema


const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
