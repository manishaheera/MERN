const mongoose = require("mongoose");

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
