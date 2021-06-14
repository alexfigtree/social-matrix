import mongoose from 'mongoose';

const footnotesSchema = mongoose.Schema({
    footnotesData: [{
        //question: String,
        //answer: String,
    }]
})

var FootnotesData = mongoose.model('FootnotesData', footnotesSchema);

export default FootnotesData;