import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard
      lastName={'James'}
      firstName={'Karl'}
      age={'32'}
      hairColor={'Black'}
      />

      <PersonCard
      lastName={'Smith'}
      firstName={'John'}
      age={'33'}
      hairColor={'Brown'}
      />

      <PersonCard
      lastName={'Smith'}
      firstName={'Maria'}
      age={'45'}
      hairColor={'Black'}
      />

      <PersonCard
      lastName={'Doe'}
      firstName={'Jane'}
      age={'55'}
      hairColor={'Brown'}
      />  
      
    </div>
  );
}

export default App;
