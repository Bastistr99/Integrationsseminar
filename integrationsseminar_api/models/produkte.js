import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    kategorie: {
        type: String,
    },
    uvp: {
        type: Number
    }
}, { timestamps : true})

const Product = mongoose.model('produkt', productSchema)

export default Product
