import * as mongoose from "mongoose";
import { Document } from 'mongoose';

export const PlatformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export interface Platform extends Document {
    name: string;
}
