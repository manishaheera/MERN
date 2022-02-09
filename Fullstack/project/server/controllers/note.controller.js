const Note = require("../models/note.model");

module.exports = {
    
    createNewNote: (req, res)=> {
        Note.create(req.body)
                .then((newNote)=>{
                    console.log(newNote);
                    res.json(newNote)
                })
                .catch((err)=>{ 
                    console.log("Create note failed");
                    res.status(400).json(err);
                })
    },

    findAllNotes: (req, res)=> {
        Note.find({}).collation({locale:'en', strength:2}).sort({name:1})
            .then((allNotes)=> {
                console.log(allNotes);
                res.json(allNotes)
            })
            .catch((err)=>{ 
                console.log("Find all notes failed");
                res.json({message: "Error in findAllNotes", error: err})
            })
    },

    findOneNote: (req, res)=> {
        Note.findOne({_id: req.params.id})
            .then((oneNote)=> {
                console.log(oneNote);
                res.json(oneNote)
            })
            .catch((err)=>{ 
                console.log("Find note failed");
                res.status(400).json(err);
            })
    },

    deleteNote: (req, res)=> {
        Note.deleteOne({_id: req.params.id})
            .then((deletedNote)=> {
                console.log(deletedNote);
                res.json(deletedNote)
            })
            .catch((err)=>{ 
                console.log("delete note failed");
                res.json({message: "Error in deleteNote", error: err})
            })
    },

    updateNote: (req,res)=> {
        Note.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedNote)=> {
            console.log(updatedNote);
            res.json(updatedNote)
        })
        .catch((err)=>{ 
            console.log("Update note failed");
            res.status(400).json(err);
        })
    }

}