const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  genre: {
    type: String
      },
 content: {
    type:Array
 }
  
});

const List = mongoose.model('List', ListSchema);

module.exports = List;
