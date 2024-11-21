import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuedBy: { type: String, required: true },
    issuedDate: { type: String, required: true },
    effectiveDate: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true }
}, {
    versionKey: false
});
export default postSchema