const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema ({

    Title: {
        type: String,
        required: [true, "Product title is required!" ],
        minlength: [3, "Product title must be at least 3 characters."]
    },

    Price: {
        type: Number,
        required: [true, "Product price is required!" ]
    },

    Description: {
        type: String,
        required: [true, "Product description is required!" ],
        minlength: [5, "Product description must be at least five characters."]
    },

}, {timestamps: true}) 


const Product = mongoose.model("Product", ProductSchema);


module.exports = Product;