const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: [true, "Title is required!" ],
    },

    content: {
        type: String,
        required: [true, "Note cannot be empty!" ],
        maxlength: [255, "Note may not exceed 255 characters"],
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true}) 


const Note = mongoose.model("Note", NoteSchema);


module.exports = Note;