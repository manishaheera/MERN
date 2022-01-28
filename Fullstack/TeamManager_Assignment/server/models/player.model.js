const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');
// uniqueValidator.default.type = 'mongoose-unique-validator';


const PlayerSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: [true, "Player name is required!" ],
        minlength: [2, "Player name must be at least 2 characters."],
    },

    preferredPosition: {
        type: String,
        // required: [true, "Player must have a preferred position"],
    },

    gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },

    gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },

    gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },

}, {timestamps: true}) 


const Player = mongoose.model("Player", PlayerSchema);
// PlayerSchema.plugin(uniqueValidator, {message: 'player name must be unique'});


module.exports = Player;