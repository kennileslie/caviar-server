const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter an item name'],
  },
  description: {
    type: String,
    required: [true, 'Please enter a description'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please enter quantity'],
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: [true, 'Please enter a valid owner id'],
  },
});

module.exports = mongoose.model('Item', ItemSchema);
