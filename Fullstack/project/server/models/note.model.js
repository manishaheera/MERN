const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: [true, "title is required!" ],
        minlength: [1, "title must be at least 1 character."]
    },

    content: {
        type: String,
        required: [true, "note cannot be empty!" ],
        minlength: [1, "note must be at least 1 character."]
    },

}, {timestamps: true}) 


const Note = mongoose.model("Note", NoteSchema);


module.exports = Note;