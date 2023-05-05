const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    base_unit:{
        type:String, 
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastPrice:{
        type:String,
        required:true
    },
    highPrice:{
        type:String,
        required:true
    },
    lowPrice:{
        type:String,
        required:true
    },
    volume:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Crypto',cryptoSchema);