import React, {useState, useEffect} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";

const DisplayOneProduct = (props) => {

    const {id, success, setSuccess} = props;
    const [oneProduct, setOneProduct] = useState({});


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err))
    },[])

    const deleteProduct = ()=> {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=> console.log(err))
    }


    return (
        <div className= "wrapper">
            <div className="product">

                <h1>Product</h1>

                {
                success?
                <h4>{success}</h4>
                :null
                }

                <span>Title:</span> {oneProduct.title} <br></br>
                <span>Price:</span> {"$"+ oneProduct.price} <br></br>
                <span>Description:</span> {oneProduct.description} <br></br><br></br>

                <button onClick={()=> navigate(`/products/edit/${oneProduct._id}`)}> Edit</button>
                <button onClick={()=> deleteProduct(oneProduct._id)}> Delete</button> <br></br>
                
                <Link to={"/"} className="link" onClick={()=> setSuccess("")}> Back to Product List </Link>
            </div>
        </div>
    )
}

export default DisplayOneProduct;
