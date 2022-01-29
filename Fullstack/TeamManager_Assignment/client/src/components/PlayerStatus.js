import axios from "axios";
import { useEffect, useState } from "react";
import NavTwo from "./NavTwo";

const PlayerStatus = (props) => {
    const {setManagePlayerStatusTabIsActive, id } = props;
    const [playerList, setPlayerList] = useState([]);
    const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] = useState(false);

    useEffect(() => {
        setManagePlayerStatusTabIsActive(true);
    }, []);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/players")
        .then((res) => {
            console.log(res.data);
            setPlayerList(res.data);
        })
        .catch((err) => console.log(err.res));
    }, [triggerGetAllRequestDummy]);

    const ChangeGameStatus = (idFromBelow, newStatus) => {
        let putData = {};
        if (id === "1") {
        putData.gameOneStatus = newStatus;
        } else if (id === "2") {
        putData.gameTwoStatus = newStatus;
        } else {
        putData.gameThreeStatus = newStatus;
        }

        axios
        .put(`http://localhost:8000/api/players/${idFromBelow}`, putData)
        .then((res) => {
            console.log(res);
            setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy);
        })
        .catch((err) => console.log(err.res));
    };

    return (
        <div className="wrapper" >
    

            <div className="player-box">

            <h1>Player Status -- Game {props.id}</h1>

            <NavTwo id={id} />

            <table>
                <thead>
                    <th>Player Name</th>
                    <th>Actions</th>
                </thead>
                <tbody>

                {id === "1" ? (
                    playerList.map((player, index) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>
                                <button
                                className={`${
                                    player.gameOneStatus === "Playing"
                                    ? "playingButton"
                                    : ""
                                }`}
                                onClick={() => ChangeGameStatus(player._id, "Playing")}> Playing </button>
                                
                                <button
                                className={`${
                                    player.gameOneStatus === "Not Playing"
                                    ? "notPlayingButton"
                                    : ""
                                }`}
                                onClick={() => ChangeGameStatus(player._id, "Not Playing")}> Not Playing </button>
                                
                                <button
                                className={`${
                                    player.gameOneStatus === "Undecided"
                                    ? "undecidedButton"
                                    : ""
                                }`}
                                onClick={() => ChangeGameStatus(player._id, "Undecided")} > Undecided </button>
                            </td>
                        </tr>
                    );
                    })
                ) : (
                <></>
                )}


                {id === "2" ? (
                    playerList.map((player, index) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>
                                <button
                                className={`${
                                    player.gameTwoStatus === "Playing"
                                    ? "playingButton"
                                    : ""
                                }`}
                                onClick={() => ChangeGameStatus(player._id, "Playing")}> Playing </button>

                                <button
                                className={`${
                                    player.gameTwoStatus === "Not Playing"
                                    ? "notPlayingButton"
                                    : ""
                                }`}
                                onClick={() => ChangeGameStatus(player._id, "Not Playing")}> Not Playing </button>

                                <button
                                className={`${
                                    player.gameTwoStatus === "Undecided"
                                    ? "undecidedButton"
                                    : ""
                                }`}
                                onClick={() => ChangeGameStatus(player._id, "Undecided")} > Undecided </button>
                                
                            </td>
                        </tr>
                    );
                    })
                ) : (
                    <></>
                )}


                {id === "3" ? (
                    playerList.map((player, index) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>
                                <button
                                className={`${
                                    player.gameThreeStatus === "Playing"
                                    ? "playingButton"
                                        : ""
                                    }`}
                                    onClick={() => ChangeGameStatus(player._id, "Playing")}> Playing </button>
                                    
                                <button
                                className={`${
                                    player.gameThreeStatus === "Not Playing"
                                    ? "notPlayingButton"
                                        : ""
                                    }`}
                                    onClick={() => ChangeGameStatus(player._id, "Not Playing")}> Not Playing </button>

                                <button
                                className={`${
                                    player.gameThreeStatus === "Undecided"
                                    ? "undecidedButton"
                                        : ""
                                    }`}
                                    onClick={() => ChangeGameStatus(player._id, "Undecided")} > Undecided </button>
                                    
                            </td>
                        </tr>
                    );
                    })
                ) : (
                <></>
                )}
                </tbody>
            </table>

            </div>

        </div>
    );
};

export default PlayerStatus;