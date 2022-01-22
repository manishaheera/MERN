import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import DisplayAllAuthors from './components/DisplayAllAuthors';
import CreateAuthors from './components/CreateAuthors';
import ReRoute from './components/ReRoute';
import EditAuthor from './components/EditAuthor';


function App() {



  return (
    <div className="App">
      <Router>

        <DisplayAllAuthors path="/"/>

        <CreateAuthors path="/new"/>

        <ReRoute path="/error" />

        <EditAuthor path="/edit/:id" />

      </Router>

    </div>
  );
}

export default App;
