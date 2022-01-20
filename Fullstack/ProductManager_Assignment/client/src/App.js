import "./App.css";
import {Router} from "@reach/router";
import Main from "./views/Main";
import DisplayOneProduct from "./components/DisplayOneProduct";
import UpdateProduct from "./components/UpdateProduct";

import React, {useState} from "react"; // lifted state for success message to be passed as props for displayOne & updateProduct


function App() {

  const [success, setSuccess] = useState(""); // success message 

  return (
    <div className="App">

      <Router>
        
        <Main path ="/" />

        <DisplayOneProduct path ="/products/:id" 
        success = {success} 
        setSuccess ={setSuccess}
        />

        <UpdateProduct path ="/products/edit/:id"
        success = {success}
        setSuccess = {setSuccess} 
        />

      </Router>

    </div>
  );
}

export default App;
