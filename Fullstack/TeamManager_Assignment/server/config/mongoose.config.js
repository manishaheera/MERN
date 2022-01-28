const mongoose = require("mongoose");

const  dbName = "playersDB";

mongoose.connect("mongodb://localhost/" + dbName, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>(
        console.log(`You are now connected to the ${dbName} database!`)
    ))
    .catch((err)=>{
        console.log(`Error connecting to the ${dbName} database! Here is your error:`, err)
        console.log(err)
    })
