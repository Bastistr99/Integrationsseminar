import mongoose from "mongoose";

const Schema = mongoose.Schema;

const produktSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    kategorie: {
        type: String
    },
    beschreibung: {
        type: String
    },
    uvp: {
        type: Number
    }
}, { collection: 'produkte'})

const ProduktModel = mongoose.model('produkte', produktSchema)

export default ProduktModel
