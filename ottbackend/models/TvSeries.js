const mongoose= require("mongoose");
 const TvSeriesSchema= new mongoose .Schema({
  
  "title": String,
  "description": String,
  "img":String,
  "video":String,
  "seasons": Number,
    
      "episodes":Number, 
                
          "air_date": Date,
          "duration": Number, //in minutes
          "writers": [String],
          "directors": [String],
          "cast": [String],
          "rating": {
            "average": Number,
            "count": Number
          },
          isMovie: Boolean,
    isDocumentry: Boolean,
       "created_at": Date,
  "updated_at": Date
}
 );
 const TvSeries = mongoose.model("TvSeries", TvSeriesSchema);

 module.exports = TvSeries;
 