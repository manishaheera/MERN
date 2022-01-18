import React, {useState, useEffect} from "react"; 
import axios from "axios";
import {Link} from "@reach/router";

const DisplayAllProducts = (props) => {

    const {productList, setProductList} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <div className ="wrapper">

            <h1>Product List</h1>

            {
                productList.map((product, index)=> (
                    <div key={product._id} className ="product">
        
                        <span>Item {index + 1}: </span> <Link to={`/products/${product._id}`}> {product.title} </Link> <br></br>
                        <span>Price: </span> {"$"+ product.price} <br></br>
                        <span>Description: </span> {product.description} <br></br>
                    </div>
                ))
            }

        </div>
    )
}

export default DisplayAllProducts;
