import productCollection from "../models/productSchema.js";
// import {products} from "../../constants/products.js";

// product retrieval api
const getProducts = async (req, res) => {
    try {
        let allProducts = await productCollection.find(req.body);
        if(allProducts.length===0){
            return  res.status(404).send({ status: false, message: "No data found" })
        }
        return res.status(200).send({ status: true, message: ` ${allProducts.length} document successfully retrieved`, allProducts })
    }
    catch (error) {
       return res.status(500).send({ status: false, message: error.message })
    }
};

//get individual product by id

const getProductOne = async(req, res)=>{
    try {
        let {id} = req.params;
        let productOne = await productCollection.findOne({id:id})
        if(!productOne){
            return res.status(404).send({status: false, message:"There is no data with this data"})
        }
        return res.status(200).send({status: true, data:productOne})
    } catch (error) {
        return res.status(500).send({status: false, message:error.message})
    }
}

export default {
    getProducts,
    getProductOne
};