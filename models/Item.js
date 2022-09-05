const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
  {
    item_name: {
      type: String,
      required: [true, 'Please enter a first name'],
    },
    last_name: {
      type: String,
      required: [true, 'Please enter a last name'],
    },

    // email: {
    // 	type: String,
    // 	required: [true, 'Please enter a valid email address'],
  }

  // owner: {
  // 	type: mongoose.SchemaTypes.ObjectId,
  // 	ref: 'User',
  // 	required: [true, 'Please enter a valid owner id'],
  // },
);

// ItemSchema.pre('find', function (next) {
//   this.populate('owner');
//   next();
// }
// );

module.exports = mongoose.model('Item', ItemSchema);
