const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    totalPrice: Number,
    country: String,
    city: String,
    address: String,
    phone: Number,
    zipCode: String,
    orderedProducts: {type: mongoose.Schema.Types.Array, ref: 'OrderedProduct'},
    createdDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Order', OrderSchema)
