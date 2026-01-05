import mongoose, { model, Schema } from "mongoose";
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

export const Student = mongoose.model('Student', studentSchema)


