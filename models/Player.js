var { Double } = require('mongodb');
var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    Name: String,
    Year: Number,
    Runs: Number,
    Catches: Number,
    RunOuts: Number
     
});

module.exports = mongoose.model('Player', PlayerSchema);
