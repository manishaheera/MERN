import './App.css';
import LoginRegistration from './views/LoginRegistration';
import Dashboard from './components/Dashboard';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>

        <LoginRegistration path="/"/>
        <Dashboard path="/compose/dashboard" />

      </Router>
  
    </div>
  );
}

export default App;
