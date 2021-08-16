const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    quantity: Number,
    price: Number,
    productThumbnail: String,
    category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    createdDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Product', ProductSchema)
