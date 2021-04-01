import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    matrixData: {
        question: String,
        answer: String,
    },
    footnotes: {
        question: String,
        answer: String,
    }
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;