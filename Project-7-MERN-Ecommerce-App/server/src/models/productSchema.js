import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailsUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
},{timestamps: true});

export default new mongoose.model("products", productSchema);