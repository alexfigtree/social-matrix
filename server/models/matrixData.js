import mongoose from 'mongoose';

const matrixSchema = mongoose.Schema({
    matrixData: [{
        //question: String,
        //answer: String,
    }]
})

var MatrixData = mongoose.model('MatrixData', matrixSchema);

export default MatrixData;