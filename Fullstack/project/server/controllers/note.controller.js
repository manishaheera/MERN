const Note = require("../models/note.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = {
    
    createNewNote: (req, res) => {
        const newNoteObject = new Note(req.body);

        // const decodedJWT = jwt.decode(req.cookies.usertoken, {
        //     complete: true,
        // })

        // newNoteObject.createdBy = decodedJWT.payload.id


        newNoteObject.createdBy = req.jwtpayload.id

        newNoteObject.save()
                .then((newNote) =>{
                    console.log(newNote);
                    res.json(newNote)
                })
                .catch((err) =>{ 
                    console.log("Create note failed");
                    res.status(400).json(err);
                })
    },

    findAllNotes: (req, res) => {
        Note.find({})
            .populate("createdBy", "username email")
            .then((allNotes) => {
                console.log(allNotes);
                res.json(allNotes)
            })
            .catch((err) =>{ 
                console.log("Find all notes failed");
                res.json({message: "Error in findAllNotes", error: err})
            })
    },

    findOneNote: (req, res) => {
        Note.findOne({_id: req.params.id})
            .then((oneNote) => {
                console.log(oneNote);
                res.json(oneNote)
            })
            .catch((err) =>{ 
                console.log("Find note failed");
                res.status(400).json(err);
            })
    },

    deleteNote: (req, res) => {
        Note.deleteOne({_id: req.params.id})
            .then((deletedNote) => {
                console.log(deletedNote);
                res.json(deletedNote)
            })
            .catch((err) => { 
                console.log("delete note failed");
                res.json({message: "Error in deleteNote", error: err})
            })
    },

    updateNote: (req,res) => {
        Note.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedNote) => {
            console.log(updatedNote);
            res.json(updatedNote)
        })
        .catch((err)=>{ 
            console.log("Update note failed");
            res.status(400).json(err);
        })
    },

    findAllNotesByUser: (req, res) => {
        if(req.jwtpayload.username == req.params.username){ // PAYLOAD MATCHES USER LOGGED IN
            User.findOne({username: req.params.username})
                .then((userLoggedIn) => {
                    Note.find({createdBy:userLoggedIn._id})
                        .then((allNotesByUser) => {
                            console.log(allNotesByUser);
                            res.json(allNotesByUser)
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(400).json(err);
                        })
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                })
        }
    }
        // else{
        //     Note.find({createdBy: req.jwtpayload.id})
        //         .then((allNotesByLoggedInUser) => {
        //             console.log(allNotesByLoggedInUser);
        //             res.json(allNotesByLoggedInUser)
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //             res.status(400).json(err);
        //         })
        // 

}