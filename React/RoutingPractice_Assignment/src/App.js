import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home'
import NumberDisplay from './components/NumberDisplay'
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <NumberDisplay path="/:id"/>
        <Color path=":id/:fontColor/:backgroundColor"/>
      </Router>
      
    </div>
  );
}

export default App;
