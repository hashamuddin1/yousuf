const mongoose = require('mongoose');

//creating schema of product
const product_schema = new mongoose.Schema({
    productname: {
        type: String
    },
    price: {
        type: Number
    },
})

//creating collection
const product = new mongoose.model('product', product_schema)

//export collection
module.exports = { product };