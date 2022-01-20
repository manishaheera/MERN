const Author = require("../models/author.model");

module.exports = {
    
    createNewAuthor: (req, res)=> {
        Author.create(req.body)
                .then((newAuthor)=>{
                    console.log(newAuthor);
                    res.json(newAuthor)
                })
                .catch((err)=>{ 
                    console.log("Create new author failed");
                    res.status(400).json(err);
                })
    },

    findAllAuthors: (req, res)=> {
        Author.find()
            .then((allAuthors)=> {
                console.log(allAuthors);
                res.json(allAuthors)
            })
            .catch((err)=>{ 
                console.log("Find all authors failed");
                res.json({message: "Error in findAllAuthors", error: err})
            })
    },

    findOneAuthor: (req, res)=> {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor)=> {
                console.log(oneAuthor);
                res.json(oneAuthor)
            })
            .catch((err)=>{ 
                console.log("Find one author failed");
                res.json({message: "Error in FindOneAuthor", error: err})
            })
    },

    deleteAuthor: (req, res)=> {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor)=> {
                console.log(deletedAuthor);
                res.json(deletedAuthor)
            })
            .catch((err)=>{ 
                console.log("delete one author failed");
                res.json({message: "Error in deleteAuthor", error: err})
            })
    },

    updateAuthor: (req,res)=> {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedAuthor)=> {
            console.log(updatedAuthor);
            res.json(updatedAuthor)
        })
        .catch((err)=>{ 
            console.log("Update one author failed");
            res.status(400).json(err);
        })
    }

}