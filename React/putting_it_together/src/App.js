import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

function App() {

  const persons = [

    {
      firstName : "Jane",
      lastName : "Doe",
      age : 45,
      hairColor : "Black",
    },

    {
      firstName : "John",
      lastName : "Smith",
      age : 88,
      hairColor : "Brown",
    }
  ]


  return (
    <div className="App">
    
    {persons.map((object,index) =>(
        <Person key={index}
        firstName =  {object.firstName}
        lastName = {object.lastName}
        age = {object.age}
        hairColor = {object.hairColor}
        />
    ))}
    </div>
  );
}

export default App;
