const Product = require("../models/product.model");

module.exports = {
    
    createNewProduct: (req, res)=> {
        Product.create(req.body)
                .then((newProduct)=>{
                    console.log(newProduct);
                    res.json(newProduct)
                })
                .catch((err)=>{ 
                    console.log("Create new product failed");
                    res.json({message: "Error in createNewProduct", error: err})
                })
    },

    findAllProducts: (req, res)=> {
        Product.find()
            .then((allProducts)=> {
                console.log(allProducts);
                res.json(allProducts)
            })
            .catch((err)=>{ 
                console.log("Find all products failed");
                res.json({message: "Error in findAllProducts", error: err})
            })
    },

    findOneProduct: (req, res)=> {
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=> {
                console.log(oneProduct);
                res.json(oneProduct)
            })
            .catch((err)=>{ 
                console.log("Find one product failed");
                res.json({message: "Error in FindOneProduct", error: err})
            })
    },

    deleteProduct: (req, res)=> {
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct)=> {
                console.log(deletedProduct);
                res.json(deletedProduct)
            })
            .catch((err)=>{ 
                console.log("delete one product failed");
                res.json({message: "Error in deleteProduct", error: err})
            })
    },

    updateProduct: (req,res)=> {
        Product.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedProduct)=> {
            console.log(updatedProduct);
            res.json(updatedProduct)
        })
        .catch((err)=>{ 
            console.log("Update product failed");
            res.json({message: "Error in updateProduct", error: err})
        })
    }

}