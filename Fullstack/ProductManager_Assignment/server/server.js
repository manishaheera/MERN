const express = require("express");
const cors = require("cors");
const app = express();

//both needed for post and put calls
// cors connects front-end at port 3000 to our back-end port at 8000

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors({
    origin:"http://localhost:3000"
}))


require("./config/mongoose.config"); 
require("./routes/product.routes")(app);


const portNumber = 8000;
app.listen(8000, ()=> console.log(`Server connected to port ${portNumber}`))


