import React, {useState} from "react";

const Form = (props) => {

    const [box, setBox] = useState([]);
    const[color, setColor] = useState('');

    const changeBoxColor = (e) => {
        e.preventDefault();

        setBox ([...box, color ]);
    }
    
    


    return(
        <div>

            <form onSubmit= {changeBoxColor}> 

                <div>
                    <h1> Create A Colored Box! </h1>
                    <label> Color </label>
                    <input type ="text" name="color" onChange={ (e) => setColor(e.target.value)}></input>

                </div>
                <button> Submit Color Box! </button>

            </form>

            <h1> Results </h1>

            {
                box.map((color,index) => (
                    <div key={index} style={{
                        backgroundColor: color,
                        height: "100px",
                        width: "100px",
                        display:"inline-flex",
                        marginTop: "10px",
                        marginRight:"10px",
                    }}>
                    </div>
                ))
            }

        </div>
    )
}

export default Form;

