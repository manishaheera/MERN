import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard
      lastName={'James'}
      firstName={'Karl'}
      age={27}
      hairColor={'Black'}
      />

      <PersonCard
      lastName={'Smith'}
      firstName={'John'}
      age={33}
      hairColor={'Brown'}
      />

      <PersonCard
      lastName={'Smith'}
      firstName={'Maria'}
      age={40}
      hairColor={'Black'}
      />

      <PersonCard
      lastName={'Doe'}
      firstName={'Jane'}
      age={32}
      hairColor={'Brown'}
      />  
      
    </div>
  );
}

export default App;
