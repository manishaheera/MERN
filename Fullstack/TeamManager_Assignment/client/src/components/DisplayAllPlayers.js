import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, navigate} from "@reach/router";

const DisplayAllPlayers = (props) => {

    const [playerList, setPlayerList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/players")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPlayerList(res.data);
        })
        .catch((err) => console.log(err))

    }, [])

    const deletePlayer = (mapId)=> {
        axios.delete(`http://localhost:8000/api/players/${mapId}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            setPlayerList(playerList.filter((player, index)=>player._id !== mapId))
        })
        .catch((err)=> console.log(err))
    }

    return(
        <div className="wrapper">

            <header>
                <Link to={"/players/list"} className="addNew"> Manage Players </Link> |
                <Link to={"/status/game/1"} className="addNew"> Manage Player Status </Link>
            </header>

            <div className="player-box">

                <Link to={"/players/addplayer"} className="addNew"> List </Link> |
                <Link to={"/players/addplayer"} className="addNew"> Add Player </Link>
                
                <table>

                    <thead>
                        <tr>
                            <th> Team Name </th>
                            <th> Preferred Position </th>
                            <th> Actions </th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                        playerList.map((player, index)=> (
                            <tr key={player._id} className ="player">

                                <td>
                                    {player.name} 
                                </td>

                                <td>
                                    {player.preferredPosition}
                                </td>
                            
                                <td>
                                    <button onClick={()=> deletePlayer(player._id)} > Delete </button>
                                </td>

                            </tr>
                        ))
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default DisplayAllPlayers;