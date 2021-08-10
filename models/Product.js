const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    quantity: Number,
    price: Number,
    category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    createdDate: Date
})

module.exports = mongoose.model('Product', ProductSchema)
