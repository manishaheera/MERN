const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const ProductSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: [true, "Product title is required!" ],
        minlength: [3, "Product title must be at least 3 characters."],
        unique: true,
    },

    price: {
        type: Number,
        required: [true, "Product price is required!" ]
    },

    description: {
        type: String,
        required: [true, "Product description is required!" ],
        minlength: [5, "Product description must be at least five characters."]
    },

}, {timestamps: true}) 


const Product = mongoose.model("Product", ProductSchema);
ProductSchema.plugin(uniqueValidator, {message: 'Product name must be unique'});


module.exports = Product;