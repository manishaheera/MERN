import React, {useState} from 'react';
import axios from 'axios';

const CreateProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

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
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Create Product</h1>

            <form onSubmit={submitProduct}>

                <label> Product Title </label>
                <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />

                <label> Product Price </label>
                <input type="number" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} />

                <label> Product Description </label>
                <input type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                
                <input type="submit" value="Submit"/>

            </form>

        </div>
    )
}

export default CreateProduct;