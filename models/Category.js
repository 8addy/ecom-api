const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: String,
    products: {type: mongoose.Schema.Types.Array, ref: 'Product'},
})

module.exports = mongoose.model('Category', CategorySchema)
