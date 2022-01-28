const Player = require("../models/player.model");

module.exports = {
    
    addNewPlayer: (req, res)=> {
        Player.create(req.body)
                .then((newPlayer)=>{
                    console.log(newPlayer);
                    res.json(newPlayer)
                })
                .catch((err)=>{ 
                    console.log("Add new player failed");
                    res.status(400).json(err);
                })
    },

    findAllPlayers: (req, res)=> {
        Player.find({}).collation({locale:'en', strength:2}).sort({name:1})
            .then((allPlayers)=> {
                console.log(allPlayers);
                res.json(allPlayers)
            })
            .catch((err)=>{ 
                console.log("Find all players failed");
                res.json({message: "Error in findAllPlayers", error: err})
            })
    },

    findOnePlayer: (req, res)=> {
        Player.findOne({_id: req.params.id})
            .then((onePlayer)=> {
                console.log(onePlayer);
                res.json(onePlayer)
            })
            .catch((err)=>{ 
                console.log("Find one player failed");
                res.status(400).json(err);
            })
    },

    deletePlayer: (req, res)=> {
        Player.deleteOne({_id: req.params.id})
            .then((deletedPlayer)=> {
                console.log(deletedPlayer);
                res.json(deletedPlayer)
            })
            .catch((err)=>{ 
                console.log("delete one player failed");
                res.json({message: "Error in deletePlayer", error: err})
            })
    },

    updatePlayer: (req,res)=> {
        Player.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedPlayer)=> {
            console.log(updatedPlayer);
            res.json(updatedPlayer)
        })
        .catch((err)=>{ 
            console.log("Update one player failed");
            res.status(400).json(err);
        })
    }

}