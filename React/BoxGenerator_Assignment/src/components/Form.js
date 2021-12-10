import React, {useState} from "react";

const Form = (props) => {

    const {box, setBox, color, setColor, height, setHeight, width, setWidth} = props;

    // const [box, setBox] = useState([]);
    // const[color, setColor] = useState("");
    // const [height, setHeight] = useState("35");
    // const [width, setWidth] = useState("35");

    const modifyBox = (e) => {
        e.preventDefault();

        setBox ([...box, 
        {
            color : color ,
            height : height,
            width: width,
        }
    ]);
    setColor("");
    }

    return(
        <div>

            <form onSubmit= {modifyBox}> 

                <div>
                    <h1> Create A Colored Box! </h1>

                    <label> Color </label>
                    <input type ="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}></input>

                    <label> Height </label>
                    <input type ="text" name="height" onChange={(e) => setHeight(e.target.value)}></input>

                    <label> Width </label>
                    <input type ="text" name="width" onChange={(e) => setWidth(e.target.value)}></input>
                </div>

                <button> Submit Color Box! </button>

            </form>

            {/* <h1> Results </h1>

            {
                box.map((box,index) => (
                    <div key={index} style={{
                        backgroundColor: box.color,
                        height: box.height+"px",
                        width: box.width+"px",
                        display:"inline-flex",
                        marginTop: "10px",
                        marginRight:"10px",
                    }}>
                    </div>
                ))
            } */}
        </div>
    )
}

export default Form;