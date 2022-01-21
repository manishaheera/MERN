import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import DisplayAllAuthors from './components/DisplayAllAuthors';
import CreateAuthors from './components/CreateAuthors';
import EditAuthor from './components/EditAuthor';

function App() {



  return (
    <div className="App">
      <Router>

        <DisplayAllAuthors path="/"
        />

        <CreateAuthors path="/authors/new" 
        />

        <EditAuthor path="/authors/edit/:id" 
        />

      </Router>

    </div>
  );
}

export default App;
