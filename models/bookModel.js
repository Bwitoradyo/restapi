// reference mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    _id:{type:String},
    title: {
        type: String
    },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default:false }
});

module.exports = mongoose.model('Book', bookModel);