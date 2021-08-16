import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface TSubmission {
    title: String,
    description: String,
    tags: String[],
    redirect: String,
    image: String,
    isFeatured?: boolean,
    isAdvertised?: boolean
}

const SubmissionModel: TSubmission = new Schema({
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
        required: false
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

let Submission: any;
try {
    Submission = mongoose.model('Submission')
} catch (error) {
    Submission = mongoose.model('Submission', SubmissionModel)
}

export default Submission;