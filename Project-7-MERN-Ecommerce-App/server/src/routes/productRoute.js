import express from "express";

import  productController  from "../controllers/productController.js";

const router = express.Router();

// product retrieving api
router.get('/product/api1/getProduct', productController.getProducts);


// get induvidual product
router.get("/product/api2/getProductOne/:id",productController.getProductOne)

export default router;