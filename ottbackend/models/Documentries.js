const mongoose= require("mongoose");
 const DocumentriesSchema= new mongoose .Schema({
  
  "title": String,
  "description": String,
  "img":String,
  "video":String,
 "genre":String,
                      
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
    isseries: Boolean,
       "created_at": Date,
  "updated_at": Date
}
 );
 const Documentries = mongoose.model("Documentries", DocumentriesSchema);

 module.exports = Documentries;
 