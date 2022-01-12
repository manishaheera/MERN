const Joke = require("../models/joke.model");

module.exports = {
    
    createNewJoke: (req, res)=> {
        Joke.create(req.body)
                .then((newJoke)=>{
                    console.log(newJoke);
                    res.json(newJoke)
                })
                .catch((err)=> console.log(err))
    },

    findAllJokes: (req, res)=> {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes)
            })
            .catch((err)=> console.log(err))
    },

    findOneJoke: (req, res)=> {
        Joke.findOne({_id: req.params.id})
            .then((oneJoke)=> {
                console.log(oneJoke);
                res.json(oneJoke)
            })
            .catch((err)=> console.log(err))
    },

    deleteJoke: (req, res)=> {
        Joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=> {
                console.log(deletedJoke);
                res.json(deletedJoke)
            })
            .catch((err)=> console.log(err))
    },

    updateJoke: (req,res)=> {
        Joke.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedJoke) => {
            console.log(updatedJoke);
            res.json(updatedJoke)
        })
        .catch((err)=> console.log(err))
    }

}