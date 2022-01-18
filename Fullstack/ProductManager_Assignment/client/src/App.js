import "./App.css";
import {Router} from "@reach/router";
import Main from "./views/Main";
import DisplayOneProduct from "./components/DisplayOneProduct";


function App() {
  return (
    <div className="App">

      <Router>
        
        <Main path ="/" />

        <DisplayOneProduct path ="/products/:id" />

      </Router>

    </div>
  );
}

export default App;
