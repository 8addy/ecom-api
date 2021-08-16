const mongoose = require('mongoose');

const OrderedProductSchema = new mongoose.Schema({
    product_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    price: Number,
    quantity: Number,
    order_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    createdDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('OrderedProduct', OrderedProductSchema)
