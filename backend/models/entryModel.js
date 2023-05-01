const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  store: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  subTotal: {
    type: Number
  },
  shipping: {
    type: Number
  },
  tax: {
    type: Number
  },
  month: {
    type: Number,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  isNecessary: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Entry', entrySchema)