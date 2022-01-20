import React, {useState} from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");

    const submitProduct = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/products", {
                title,
                price,
                description,
            })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data])
                setTitle("");
                setPrice("");
                setDescription("");
                setErrors("");
            })
            .catch((err)=> {
                console.log(err);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors)
            });
    }

    return (
        <div className ="wrapper">
            
            <h1>Product Manager -- Create Product</h1>


            <form onSubmit={submitProduct}>

            {
                errors.title?
                <p>{errors.title.message}</p>
                :null
            }

            {
                errors.price?
                <p>{errors.price.message}</p>
                :null
            }

            {
                errors.description?
                <p>{errors.description.message}</p>
                :null
            }

                <label> Product Title </label>
                <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} /> <br></br>

                <label> Product Price </label>
                <input type="number" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} /> <br></br>

                <label> Product Description </label>
                <input type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} /> <br></br>
                
                <input type="submit" value="Submit" className="submitButton"/>

            </form>

        </div>
    )
}

export default CreateProduct;