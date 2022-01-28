import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import DisplayAllPlayers from './components/DisplayAllPlayers';
import AddPlayer from './components/AddPlayer'

function App() {
  return (
    <div className="App">
      <Router>

          <DisplayAllPlayers path="/players/list" default="true" />
          <AddPlayer path="/players/addplayer" />

      </Router>
    </div>
  );
}

export default App;
