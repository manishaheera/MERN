// import dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


//name db - Mongoose 

const  dbName = "jokes";

mongoose.connect("mongodb://localhost/" + dbName, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>(
        console.log(`You are now connected to the ${dbName} database!`)
    ))
    .catch((err)=>{
        console.log(`Error connecting to the ${dbName} database!`)
        console.log(err)
    })

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

//logic 

app.post("/api/jokes", (req, res)=> {
    Joke.create(req.body)
        .then((newJoke)=>{
            console.log(newJoke);
            res.json(newJoke)
        })
        .catch((err)=> console.log(err))
})

app.get("/api/jokes", (req, res)=> {
    Joke.find()
        .then((allJokes) => {
            console.log(allJokes);
            res.json(allJokes)
        })
        .catch((err)=> console.log(err))
})

app.get("/api/jokes/:id", (req, res)=> {
    Joke.findOne({_id: req.params.id})
        .then((oneJoke)=> {
            console.log(oneJoke);
            res.json(oneJoke)
        })
        .catch((err)=> console.log(err))
})

app.delete("/api/jokes/:id", (req, res)=> {
    Joke.deleteOne({_id: req.params.id})
        .then((deletedJoke)=> {
            console.log(deletedJoke);
            res.json(deletedJoke)
        })
        .catch((err)=> console.log(err))
})

app.put("/api/jokes/:id", (req,res)=> {
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
})

const portNumber = 8000;

//running server

app.listen(8000, ()=> console.log(`Server connected to port ${portNumber}`))

