import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export interface Admin extends Document {
    email: string;
    password: string;
}
