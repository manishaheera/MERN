import React, {useState, useEffect} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";

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

    const deleteProduct = (id)=> {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            setProductList(productList.filter((product, index)=>product._id !== id))
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div className ="wrapper">

            <h1>Product List</h1>

            {
                productList.map((product, index)=> (
                    <div key={product._id} className ="product">
        
                        <span>Item {index + 1}: </span> <Link to={`/products/${product._id}`} className="link"> {product.title} </Link> <br></br>
                        <span>Price: </span> {"$"+ product.price} <br></br>
                        <span>Description: </span> {product.description} <br></br>
                    
                        <button onClick={()=> navigate(`/products/edit/${product._id}`)}> Edit</button>
                        <button onClick={()=> deleteProduct(product._id)}> Delete</button>
                    </div>
                ))
            }

        </div>
    )
}

export default DisplayAllProducts;
