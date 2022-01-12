const mongoose = require("mongoose");


// schema and model to shape & structure document and connect with a specific collection in the db

const JokeSchema = new mongoose.Schema ({
    // id field created automatically
    // timestamp includes createdAt, & updatedAt

    setup: {
        type: String
    },

    punchLine: {
        type: String
    },

}, {timestamps: true}) 

// model is combination of collection name (singular), & capitlized 

const Joke = mongoose.model("Joke", JokeSchema);


module.exports = Joke;