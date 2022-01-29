import { Link } from "@reach/router";
import { useEffect, useState } from "react";

const NavOne = (props) => {

    const { listPageIsActive, setListPageIsActive } = props;
    const [listTabStyle, setListTabStyle] = useState({});
    const [addPlayerTabStyle, setAddPlayerTabStyle] = useState({});
    const styleObjBold = {fontWeight: "900",};

    useEffect(() => {
        if (listPageIsActive) {
        setListTabStyle(styleObjBold);
        setAddPlayerTabStyle({});
        } else {
        setListTabStyle({});
        setAddPlayerTabStyle(styleObjBold);
        }
    }, [listPageIsActive]);

    return (
        <div>

            <span style={{ ...listTabStyle }} className="subNav">
                <Link to="/players/list">List | </Link>
            </span>
            <span style={{ ...addPlayerTabStyle }} className="subNav">
                <Link to="/players/addplayer">Add Player</Link>
            </span>

        </div>
    );
};

export default NavOne;