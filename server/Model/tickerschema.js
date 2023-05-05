const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({ 
    base_unit: String,
    nameid: String,
    lastPrice: Number,
    highPrice: Number,
    lowPrice: Number,
    volume: Number,
    open: Number,
    sell: Number,
    buy: Number,
    name: String,
  });

module.exports = mongoose.model('Ticker',tickerSchema);