import './App.css';
import LoginRegistration from './views/LoginRegistration';
import Dashboard from './views/Dashboard';
import Canvas from './components/Canvas';

import {Router} from '@reach/router';

function App() {


  return (
    <div className="app">

      <Router>

        <LoginRegistration path="/" />
        <Dashboard path="/compose/dashboard" />
        <Canvas path="/compose/canvas" />

      </Router>
  
    </div>
  );
}

export default App;
