import { Link } from "@reach/router";
import { useEffect, useState } from "react";

const NavTwo = (props) => {
    const { gameId } = props;
    const [game1TabStyle, setGame1TabStyle] = useState({});
    const [game2TabStyle, setGame2TabStyle] = useState({});
    const [game3TabStyle, setGame3TabStyle] = useState({});
    const styleObjBold = {fontWeight: "900",};

    useEffect(() => {
        if (gameId === "1") {
        setGame1TabStyle(styleObjBold);
        setGame2TabStyle({});
        setGame3TabStyle({});
        } else if (gameId === "2") {
        setGame1TabStyle({});
        setGame2TabStyle(styleObjBold);
        setGame3TabStyle({});
        } else {
        setGame1TabStyle({});
        setGame2TabStyle({});
        setGame3TabStyle(styleObjBold);
        }
    }, [gameId]);

    return (

        <div>

            <span style={game1TabStyle} className="game">
                <Link to="/status/game/1">Game 1 | </Link>
            </span>

            <span className="game" style={game2TabStyle}>
                <Link to="/status/game/2">Game 2 | </Link>
            </span>

            <span className="game" style={game3TabStyle}>
                <Link to="/status/game/3">Game 3</Link>
            </span>

        </div>
    );
    };

export default NavTwo;