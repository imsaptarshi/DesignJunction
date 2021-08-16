import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface TResource {
    title: String,
    description: String,
    tags: String[],
    redirect: String,
    image: String,
    isFeatured: boolean,
    isAdvertised: boolean
}

const ResourceModel: TResource = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    redirect: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        required: false
    },
    isAdvertised: {
        type: Boolean,
        required: false
    }
});

let Resource: any;
try {
    Resource = mongoose.model('Resource')
} catch (error) {
    Resource = mongoose.model('Resource', ResourceModel)
}

export default Resource;