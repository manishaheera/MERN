// import dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));


require("./config/mongoose.config"); 
require("./routes/joke.routes")(app);


const portNumber = 8000;
app.listen(8000, ()=> console.log(`Server connected to port ${portNumber}`))




