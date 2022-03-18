import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    fragen: {
        type: Object,
    },
    antwort: {
        type: Object
    }
}, { timestamps : true})


const Review = mongoose.model('BeantworteterFragebogen', reviewSchema)

export default Review
