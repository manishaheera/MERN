const PlayerController = require("../controllers/player.controller");


module.exports = (app) => {

    app.post("/api/players", PlayerController.addNewPlayer);
    app.get("/api/players", PlayerController.findAllPlayers);
    app.get("/api/players/:id", PlayerController.findOnePlayer);
    app.put("/api/players/:id", PlayerController.updatePlayer);
    app.delete("/api/players/:id", PlayerController.deletePlayer);
    
}