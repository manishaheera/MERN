const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors({
    origin:"http://localhost:3000"
}))


require("./config/mongoose.config"); 
require("./routes/player.routes")(app);

const portNumber = 8000;
app.listen(8000, ()=> console.log(`Server connected to port ${portNumber}`))