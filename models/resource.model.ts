import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface TResource {
    title: String,
    description: String,
    tags: String[],
    redirect: String,
    image: String
}

const ResourceModel = new Schema<TResource>({
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
    }
});

let Resource: mongoose.Model<TResource>;
try {
    Resource = mongoose.model<TResource>('Resource')
} catch (error) {
    Resource = mongoose.model<TResource>('Resource', ResourceModel)
}

export default Resource;