import React, {useState, useEffect} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";

const UpdateProduct = (props) => {

    const {id} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err) => console.log(err))
    }, [id])


    const updateProduct = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description,
            })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                navigate(`/products/${id}`)
            })
            .catch((err)=> {
                console.log(err);
            });
    }


    return (
        <div className= "wrapper">
            <h1>Update Product</h1>

            <form onSubmit={updateProduct}>

                <label> Product Title </label>
                <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} /> <br></br>

                <label> Product Price </label>
                <input type="number" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} /> <br></br>

                <label> Product Description </label>
                <input type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} /> <br></br>
                
                <input type="submit" value="Update" className="submitButton"/>

            </form>

            <Link to={"/"} className="link"> Back to Product List </Link>

        </div>
    )
}

export default UpdateProduct;