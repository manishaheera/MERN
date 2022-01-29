import './App.css';
import {Router} from "@reach/router";
import Nav from "./components/Nav";
import DisplayAllPlayers from './components/DisplayAllPlayers';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';
import {useState} from "react";


function App() {

  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);

  return (
    <div className="App">

      <Nav
        managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />

      <Router>

          <DisplayAllPlayers path="/players/list" default
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />

          <AddPlayer path="/players/addplayer" 
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />

          <PlayerStatus path="/status/game/:id" 
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />
          

      </Router>
    </div>
  );
}

export default App;
