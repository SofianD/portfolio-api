import * as mongoose from "mongoose";
import { Document } from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    phone_number: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    date: {
        default: Date.now(),
        type: Date
    }
})

export interface Message {
    content: string;
    subject: string;
    phone_number: string;
    email: string;
    sender: string;
    date: Date;
}
