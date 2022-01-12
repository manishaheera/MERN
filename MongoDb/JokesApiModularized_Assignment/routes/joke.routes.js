const JokeController = require("../controllers/joke.controller");


module.exports = (app) => {

    app.post("/api/jokes", JokeController.createNewJoke);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
    
}