const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: [true, "Title is required!" ],
    },

    content: {
        type: String,
        required: [true, "Note cannot be empty!" ],
    },

}, {timestamps: true}) 


const Note = mongoose.model("Note", NoteSchema);


module.exports = Note;